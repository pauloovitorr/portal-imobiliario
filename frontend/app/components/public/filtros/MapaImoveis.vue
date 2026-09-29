<script setup lang="ts">
import { Map, NavigationControl, setWorkerUrl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import workerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';

setWorkerUrl(workerUrl);

const mapContainer = ref<HTMLElement | null>(null);

let map: Map | undefined;

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
        new NavigationControl({
            showCompass: false,
        }),
        'top-right',
    );

    map.on('load', () => {

        const layers = map.getStyle().layers;

        layers.forEach((layer) => {
            const id = layer.id.toLowerCase();
            const sourceLayer = layer["source-layer"] || "";

            // Filtramos e escondemos camadas indesejadas interceptando seus IDs ou Fontes.
            if (
                layer.type === "fill-extrusion" || // Prédios 3D
                id.includes("building") ||         // Blocos de construções
                sourceLayer === "poi" ||           // Pontos de interesse gerais (hospitais, etc)
                sourceLayer === "park_name" ||     // Textos de praças
                sourceLayer === "housenumber" ||   // Número das casas nas ruas
                id.includes("transit") ||          // Transporte público
                id.includes("bus") ||
                id.includes("station")
            ) {
                map.setLayoutProperty(layer.id, "visibility", "none");
            }
        });

    })
});

onBeforeUnmount(() => {
    map?.remove();
    map = undefined;
});
</script>

<template>
    <div class="map-container-box">
        <div ref="mapContainer" class="map"></div>
    </div>
</template>

<style scoped>
.map-container-box {
    width: 100%;
    height: 650px;
    border-radius: var(--radius-lg);
    border: 1px solid #ccc;
    overflow: hidden;
}

.map {
    width: 100%;
    height: 100%;
}
</style>