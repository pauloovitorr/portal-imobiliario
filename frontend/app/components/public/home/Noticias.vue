<script setup lang="ts">
interface Noticia {
    id: number;
    titulo: string;
    descricao: string;
    fonte: string;
    imagem: string;
    url: string;
}

const noticias: Noticia[] = [
    {
        id: 1,
        titulo: 'Caixa altera regras do crédito imobiliário e exige entrada maior em financiamentos',
        descricao: 'Mudanças no financiamento pelo sistema SBPE impactam o percentual máximo concedido pelo banco e exigem maior planejamento financeiro dos compradores.',
        fonte: 'VALOR ECONÔMICO',
        imagem: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        url: 'https://valor.globo.com/financas/noticia/caixa-muda-regras-do-credito-imobiliario.ghtml'
    },
    {
        id: 2,
        titulo: 'Como a taxa Selic impacta o financiamento de imóveis e os Fundos Imobiliários',
        descricao: 'Entenda os efeitos do cenário macroeconômico sobre o custo do crédito imobiliário e a rentabilidade dos FIIs de tijolo e papel no mercado brasileiro.',
        fonte: 'INFOMONEY',
        imagem: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
        url: 'https://www.infomoney.com.br/onde-investir/como-a-taxa-selic-afeta-o-financiamento-imobiliario/'
    },
    {
        id: 3,
        titulo: 'Mercado de imóveis de luxo segue aquecido nas capitais apesar dos juros altos',
        descricao: 'Segmento de alto padrão demonstra resiliência frente ao cenário de juros elevados, mantendo forte volume de lançamentos e valorização do m².',
        fonte: 'EXAME',
        imagem: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
        url: 'https://exame.com/mercado-imobiliario/mercado-imobiliario-de-luxo-segue-aquecido/'
    }
];


</script>

<template>
    <section class="section-noticias" data-aos="fade-up" data-aos-delay="50"
        data-aos-duration="500" data-aos-easing="ease-in-out">
        <div class="container-noticias estilo-container">
            <PublicTituloSecao titulo="Notícias" subtitulo="Informações imobiliárias" detalhe="sobre o mercado" link="" />

            <div class="noticias-grid">
                <article v-for="item in noticias" :key="item.id" class="noticia-card">
                    <a :href="item.url" target="_blank" rel="noopener noreferrer" class="noticia-imagem-link">
                        <div class="noticia-imagem-wrapper">
                            <img :src="item.imagem" :alt="item.titulo" loading="lazy" class="noticia-imagem">
                        </div>
                    </a>

                    <div class="noticia-content">
                        <h3 class="noticia-titulo">{{ item.titulo }}</h3>
                        <p class="noticia-descricao">{{ item.descricao }}</p>

                        <div class="noticia-footer">
                            <span class="noticia-fonte">{{ item.fonte }}</span>
                            <a :href="item.url" target="_blank" rel="noopener noreferrer" class="noticia-btn">
                                Ver mais
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-noticias {
    width: 100%;
    background-color: var(--color-neutral-0);
    padding-bottom: 64px;
    padding-top: 64px;
}

.container-noticias {
    display: flex;
    flex-direction: column;
}

/* Grid Layout */
.noticias-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    /* margin-top: 40px; */
}

/* Card Principal */
.noticia-card {
    background-color: var(--color-neutral-0);
    border-radius: var(--radius-xl);
    border: 1px solid var(--color-neutral-200);
    box-shadow: var(--shadow-sm);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.noticia-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-md);
}

/* Imagem e Aspect Ratio (4:3) */
.noticia-imagem-link {
    display: block;
    width: 100%;
}

.noticia-imagem-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    background-color: var(--color-neutral-100);
    overflow: hidden;
}

.noticia-imagem {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}



/* Conteúdo */
.noticia-content {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.noticia-titulo {
    font-family: var(--font-secondary);
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    color: var(--color-neutral-900);
    line-height: var(--leading-tight);
    min-height: 46px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.noticia-descricao {
    margin-top: 12px;
    font-size: var(--text-sm);
    color: var(--color-neutral-600);
    line-height: var(--leading-relaxed);
    min-height: 66px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Rodapé do Card */
.noticia-footer {
    margin-top: auto;
    padding-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.noticia-fonte {
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
    color: var(--color-neutral-500);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.noticia-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 20px;
    border-radius: var(--radius-md);
    background-color: var(--color-neutral-900);
    color: var(--color-neutral-0);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    text-decoration: none;
    transition: var(--transition-normal);
}


.noticia-btn:hover {
    background-color: var(--color-accent-500);
    /* Transição para o vinho no hover */
}

.noticia-btn:active {
    transform: scale(0.98);
}

/* Responsividade */
@media (max-width: 1024px) {
    .noticias-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
    }
}

@media (max-width: 640px) {
    .noticias-grid {
        grid-template-columns: 1fr;
    }

    .noticia-titulo,
    .noticia-descricao {
        min-height: auto;
    }
}
</style>