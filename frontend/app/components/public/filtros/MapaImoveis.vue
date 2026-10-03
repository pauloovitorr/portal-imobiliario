<script setup lang="ts">
import { Map, Marker, NavigationControl, Popup, setWorkerUrl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

setWorkerUrl(workerUrl);

// 1. REFERÊNCIAS E ESTADOS DO COMPONENTE
const mapContainer = ref<HTMLElement | null>(null);
const mapReady = ref(false);
let map: Map | undefined;

// 2. DADOS DOS IMÓVEIS
const imoveis = [
    {
        id: 1,
        lat: -23.5615,
        lng: -46.6558,
        preco: 'R$ 3.500',
        titulo: 'Apto em frente ao MASP',
        img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300',
    },
    {
        id: 2,
        lat: -23.563,
        lng: -46.654,
        preco: 'R$ 4.200',
        titulo: 'Studio próximo ao Metrô',
        img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300',
    },
    {
        id: 3,
        lat: -23.559,
        lng: -46.658,
        preco: 'R$ 2.800',
        titulo: 'Loft aconchegante',
        img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=300',
    },
    {
        id: 4,
        lat: -23.5645,
        lng: -46.652,
        preco: 'R$ 5.500',
        titulo: 'Cobertura nos Jardins',
        img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300',
    },
    {
        id: 5,
        lat: -23.56,
        lng: -46.651,
        preco: 'R$ 3.100',
        titulo: 'Apto próximo a Hospitais',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=300',
    },
];

// 3. CONVERSÃO DOS IMÓVEIS PARA GEOJSON
const geojsonImoveis = {
    type: 'FeatureCollection' as const,
    features: imoveis.map((item) => ({
        type: 'Feature' as const,
        geometry: {
            type: 'Point' as const,
            coordinates: [item.lng, item.lat],
        },
        properties: {
            id: item.id,
            lat: item.lat,
            lng: item.lng,
            preco: item.preco,
            titulo: item.titulo,
            img: item.img,
        },
    })),
};

// 4. MEMÓRIA DOS MARCADORES
const markers: Record<number, Marker> = {};

// 5. INICIALIZAÇÃO DO MAPA
onMounted(() => {
    if (!mapContainer.value) return;

    map = new Map({
        container: mapContainer.value,
        style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=KzyTzGLMLZNPcOGllELK',
        center: [-46.6558, -23.5615],
        zoom: 14.5,
    });

    map.on('error', (event) => {
        console.error('Falha ao carregar o mapa:', event.error);
    });

    map.addControl(
        new NavigationControl({ showCompass: false }),
        'top-left',
    );

    // 6. QUANDO O MAPA TERMINAR DE CARREGAR
    map.on('load', () => {
        if (!map) return;

        // A. LIMPEZA DO MAPA
        const layers = map.getStyle().layers;
        layers.forEach((layer) => {
            const id = layer.id.toLowerCase();
            const sourceLayer = layer['source-layer'] || '';

            if (
                layer.type === 'fill-extrusion' ||
                id.includes('building') ||
                sourceLayer === 'poi' ||
                sourceLayer === 'park_name' ||
                sourceLayer === 'housenumber' ||
                id.includes('transit') ||
                id.includes('bus') ||
                id.includes('station')
            ) {
                map.setLayoutProperty(layer.id, 'visibility', 'none');
            }
        });

        // B. CONFIGURAÇÃO DA FONTE DOS IMÓVEIS
        map.addSource('imoveis-source', {
            type: 'geojson',
            data: geojsonImoveis,
            cluster: true,
            clusterMaxZoom: 15,
            clusterRadius: 50,
        });

        // C. VISUAL DOS CLUSTERS
        map.addLayer({
            id: 'clusters',
            type: 'circle',
            source: 'imoveis-source',
            filter: ['has', 'point_count'],
            paint: {
                'circle-color': '#222222',
                'circle-radius': ['step', ['get', 'point_count'], 20, 10, 24, 30, 28],
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff',
            },
        });

        // D. NÚMERO DENTRO DO CLUSTER
        map.addLayer({
            id: 'cluster-count',
            type: 'symbol',
            source: 'imoveis-source',
            filter: ['has', 'point_count'],
            layout: {
                'text-field': '{point_count_abbreviated}',
                'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                'text-size': 14,
            },
            paint: {
                'text-color': '#ffffff',
            },
        });

        // E. ESTADO DO POPUP
        let popupAberto: Popup | null = null;

        // F. CRIAÇÃO DOS MARCADORES DOS IMÓVEIS
        imoveis.forEach((imovel) => {
            const el = document.createElement('div');
            el.className = 'price-marker';
            el.innerText = imovel.preco;

            const popup = new Popup({
                offset: 25,
                closeButton: true,
                closeOnClick: true,
                maxWidth: '300px',
            }).setHTML(`
                <div class="popup-card">
                    <img src="${imovel.img}" alt="${imovel.titulo}">
                    <h4>${imovel.titulo}</h4>
                    <p>1 quarto • 1 cama</p>
                    <div class="price">
                        ${imovel.preco} <span>/ mês</span>
                    </div>
                </div>
            `);

            popup.on('open', () => {
                if (popupAberto && popupAberto !== popup) {
                    popupAberto.remove();
                }
                popupAberto = popup;
                el.classList.add('active');
            });

            popup.on('close', () => {
                if (popupAberto === popup) {
                    popupAberto = null;
                }
                el.classList.remove('active');
            });

            const marker = new Marker({
                element: el,
                anchor: 'center',
            })
                .setLngLat([imovel.lng, imovel.lat])
                .setPopup(popup);

            markers[imovel.id] = marker;
        });

        // G. MOTOR DE RENDERIZAÇÃO DOS MARCADORES
        const renderMarkers = () => {
            if (!map || !map.isSourceLoaded('imoveis-source')) return;

            const features = map.querySourceFeatures('imoveis-source');
            const unclusteredIds = new Set<number>(
                features
                    .filter((feature) => !feature.properties?.cluster)
                    .map((feature) => Number(feature.properties?.id)),
            );

            imoveis.forEach((imovel) => {
                const marker = markers[imovel.id];
                if (!marker) return;

                const isRendered = marker.getElement().parentNode !== null;

                if (unclusteredIds.has(imovel.id)) {
                    if (!isRendered) marker.addTo(map);
                } else {
                    if (isRendered) marker.remove();
                }
            });
        };

        // H. INTERAÇÃO COM OS CLUSTERS
        map.on('click', 'clusters', (event) => {
            if (!map) return;

            const features = map.queryRenderedFeatures(event.point, { layers: ['clusters'] });
            if (!features.length) return;

            const clusterId = features[0].properties?.cluster_id;
            if (clusterId === undefined) return;

            const source = map.getSource('imoveis-source');
            if (!source) return;

            (source as any).getClusterExpansionZoom(clusterId, (error: Error | null, zoom: number) => {
                if (error || !map) return;

                map.easeTo({
                    center: (features[0].geometry as any).coordinates,
                    zoom: zoom + 1.5,
                    duration: 500,
                });
            });
        });

        

        // I. EVENTOS PARA ATUALIZAR OS MARCADORES
        map.on('move', renderMarkers);
        map.on('moveend', renderMarkers);

        map.on('sourcedata', (event) => {
            if (event.sourceId === 'imoveis-source' && map?.isSourceLoaded('imoveis-source')) {
                renderMarkers();
            }
        });

        map.on('idle', () => {
            if (!map) return;
            renderMarkers();
            mapReady.value = true;
        });

        renderMarkers();
    });
});

// 7. LIMPEZA DO MAPA
onBeforeUnmount(() => {
    map?.remove();
    map = undefined;
});
</script>

<template>
    <div class="map-container-box">
        <div ref="mapContainer" class="map" :class="{ 'map-hidden': !mapReady }"></div>
        <div v-if="!mapReady" class="map-loading">Carregando mapa...</div>
    </div>
</template>

<style scoped>
.map-container-box {
    position: relative;
    width: 100%;
    height: 650px;
    border-radius: var(--radius-lg);
    border: 1px solid #ccc;
    overflow: hidden;
}

.map {
    width: 100%;
    height: 100%;
    transition: opacity 0.2s ease;
}

.map-hidden {
    opacity: 0;
}

.map-loading {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f6ef;
    color: #666;
    font-size: 14px;
}

/* MARCADOR DE PREÇO */
:deep(.price-marker) {
    background: #ffffff;
    border: 1px solid #222;
    border-radius: 999px;
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 600;
    color: #222;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease;
}

:deep(.price-marker:hover) {
    transform: scale(1.05);
}

:deep(.price-marker.active) {
    background: #222;
    color: #fff;
    transform: scale(1.05);
}

/* CARD DO POPUP */
:deep(.popup-card) {
    overflow: hidden;
    font-family: inherit;
}

:deep(.popup-card img) {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
}

:deep(.popup-card h4) {
    margin: 12px 0 6px;
    font-size: 16px;
    font-weight: 600;
    color: #222;
}

:deep(.popup-card p) {
    margin: 0 0 10px;
    font-size: 13px;
    color: #717171;
}

:deep(.popup-card .price) {
    font-size: 15px;
    font-weight: 700;
    color: #222;
}

:deep(.popup-card .price span) {
    font-weight: 400;
    color: #717171;
}
</style>