<script setup lang="ts">
const imoveisDestaque = [
    {
        id: 1,
        link: '',
        imagem: 'https://static.coelhodafonseca.com.br/images/imoveis/original/10955027.jpg',
        titulo: 'Adolpho Lindenberg',
        bairro: 'Moema',
        area: '474 m²'
    },
    {
        id: 2,
        link: '',
        imagem: 'https://static.coelhodafonseca.com.br/images/imoveis/original/10955025.jpg',
        titulo: 'Renato 410',
        bairro: 'Itaim Bibi',
        area: '273 m²'
    },
    {
        id: 3,
        link: '',
        imagem: 'https://static.coelhodafonseca.com.br/images/imoveis/original/10913958.jpg',
        titulo: 'Horácio Lafer Autoria',
        bairro: 'Itaim Bibi',
        area: '357 à 736 m²'
    },
    {
        id: 4,
        link: '',
        imagem: 'https://static.coelhodafonseca.com.br/images/imoveis/original/10913958.jpg',
        titulo: 'Adolpho Lindenberg',
        bairro: 'Moema',
        area: '474 m²'
    },
    {
        id: 5,
        link: '',
        imagem: 'https://static.coelhodafonseca.com.br/images/imoveis/original/10913958.jpg',

        titulo: 'Renato 410',
        bairro: 'Itaim Bibi',
        area: '273 m²'
    },
    {
        id: 6,
        link: '',
        imagem: 'https://static.coelhodafonseca.com.br/images/imoveis/original/10955027.jpg',
        titulo: 'Horácio Lafer Autoria',
        bairro: 'Itaim Bibi',
        area: '357 à 736 m²'
    }
];
</script>


<template>
<a v-for="imovel in imoveisDestaque" :key="imovel.id" :href="imovel.link" class="card-imovel">
                <div class="card-imagem-wrapper">
                    <img :src="imovel.imagem" alt="Perspectiva artística" class="card-imagem" loading="lazy">

                    <div class="card-overlay">
                        <h3 class="card-titulo">{{ imovel.titulo }}</h3>

                        <div class="card-info">
                            <div class="card-localizacao">
                                <MapPinHouse class="icone-pin" />
                                <span class="truncate">{{ imovel.bairro }}</span>
                            </div>

                            <div class="card-area">
                                <span>{{ imovel.area }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
</template>


<style scoped>

.card-imovel {
    display: block;
    text-decoration: none;
    border-radius: var(--radius-lg);
    overflow: hidden;
    background-color: var(--bg-surface);
    box-shadow: var(--shadow-sm);
    transition: box-shadow var(--transition-normal);
}

.card-imovel:hover {
    box-shadow: var(--shadow-hover);
}

.card-imagem-wrapper {
    position: relative;
    height: 100%;
    aspect-ratio: 5 / 6;
    overflow: hidden;
}

.card-imagem {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 700ms ease-out;
}

.card-imovel:hover .card-imagem {
    transform: scale(1.05);
}

.card-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0) 100%);
    color: var(--color-neutral-0);
    display: flex;
    flex-direction: column;
}

.card-titulo {
    font-family: var(--font-secondary);
    font-size: var(--text-2xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
    margin: 0;
}

.card-info {
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding-right: 20px;
    font-family: var(--font-primary);
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.85);
}

.card-localizacao {
    display: flex;
    align-items: center;
    gap: 4px;
    overflow: hidden;
}

.icone-pin {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
}

.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-area {
    display: inline-flex;
    align-items: center;
    font-weight: var(--font-medium);
}

@media (max-width: 768px) {
    .imoveis-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .card-imagem-wrapper {
        aspect-ratio: 3 / 4;
    }

    .card-overlay {
        padding: 16px;
    }

    .card-titulo {
        font-size: var(--text-xl);
    }
}

@media (max-width: 600px) {
    .imoveis-container {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

@media (max-width: 575px) {
    .container-lancamentos {
        margin-top: 0px;
        margin-bottom: 0px;
    }
}
</style>
