<script setup lang="ts">

import imagemCta from '@/assets/imgs/geral/equipe.png'


</script>

<template>
    <section class=" section-call-action" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
        data-aos-easing="ease-in-out">
        <div class="container-call-action">
            <div class="cta-wrapper">

            
                <div class="cta-content">
                    <span class="cta-badge">Para Corretores e Imobiliárias</span>

                    <h2 class="cta-titulo">Seu imóvel ainda não está publicado?</h2>

                    <p class="cta-descricao">
                        Amplie sua visibilidade e conecte-se com clientes qualificados em todo o Brasil. Cadastre-se em
                        nosso ecossistema e acelere suas vendas com inteligência e exclusividade.
                    </p>

                    <div class="cta-actions">
                      
                        <a href="#" class="cta-btn cta-btn-solid">
                            Criar Conta e Anunciar
                        </a>
                        <a href="#" class="cta-btn cta-btn-outline">
                            Conhecer Vantagens
                        </a>
                    </div>
                </div>

              
                <div class="cta-image-container">
                    <img src="/equipe.png" alt="Profissional apresentando imóvel" class="cta-image" loading="lazy">
                </div>

            </div>
        </div>
    </section>

    

</template>

<style scoped>

.section-call-action {
    width: 100%;
    background-color: var(--color-neutral-0);
    /* border: 1px solid red; */
}

.container-call-action {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
    /* padding-bottom: 64px; */
}


.cta-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--color-accent-500);

    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.cta-content {
    padding: 64px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.cta-badge {
    display: inline-block;
    align-self: flex-start;
    padding: var(--padding-2xs) var(--padding-sm);
    background-color: rgba(255, 255, 255, 0.15);
    color: var(--color-neutral-0);
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    border-radius: var(--radius-full);
    margin-bottom: 24px;
    letter-spacing: 0.05em;
}


.cta-titulo {
    font-family: var(--font-secondary);
    font-size: var(--text-3xl);
    font-weight: var(--font-semibold);
    color: var(--color-neutral-0);

    line-height: var(--leading-tight);
    margin-bottom: 16px;
}

.cta-descricao {
    font-size: var(--text-lg);
    color: rgba(255, 255, 255, 0.85);
    line-height: var(--leading-relaxed);
    margin-bottom: 32px;
}

.cta-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}


.cta-btn {
    padding: var(--padding-btn-lg);
    font-weight: var(--font-bold);
    border-radius: var(--radius-md);

    text-decoration: none;
    text-align: center;
    transition: all var(--transition-normal);
}


.cta-btn-solid {
    background-color: var(--color-neutral-0);
    color: var(--color-accent-500);
}

.cta-btn-solid:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}


.cta-btn-outline {
    background-color: transparent;
    color: var(--color-neutral-0);
    border: 1px solid rgba(255, 255, 255, 0.4);
}

.cta-btn-outline:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: var(--color-neutral-0);
}


.cta-image-container {
    width: 100%;
    height: 100%;
    min-height: 400px;
}

.cta-image {
    width: 100%;
    height: 100%;
    object-fit: none;
    object-position: center center;
}

@media (max-width: 968px) {
    .cta-wrapper {
        grid-template-columns: 1fr;
    }

    .cta-content {
        padding: 40px 24px;
    }

    .cta-image-container {
        height: 300px;
        min-height: auto;
    }
}
</style>