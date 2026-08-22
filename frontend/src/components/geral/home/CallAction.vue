<script setup lang="ts">
// Você pode substituir por uma imagem local depois, ex: import ImagemCorretor from '@/assets/imgs/corretor.jpg'
const imagemCta = 'https://www.coelhodafonseca.com.br/images/venha-empreender.jpg';
</script>

<template>
    <section class="section-call-action" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
            data-aos-easing="ease-in-out">
        <div class="estilo-container">
            <div class="cta-wrapper">
                
                <!-- Coluna de Texto e Ação -->
                <div class="cta-content">
                    <span class="cta-badge">Para Corretores e Proprietários</span>
                    
                    <h2 class="cta-titulo">Seu imóvel ainda não está publicado?</h2>
                    
                    <p class="cta-descricao">
                        Amplie sua visibilidade e conecte-se com clientes qualificados em todo o Brasil. Cadastre-se em nosso ecossistema e acelere suas vendas com inteligência e exclusividade.
                    </p>
                    
                    <div class="cta-actions">
                        <a href="#" class="btn-primary cta-btn">
                            Criar Conta e Anunciar
                        </a>
                        <a href="#" class="btn-secondary cta-btn-outline">
                            Conhecer Vantagens
                        </a>
                    </div>
                </div>

                <!-- Coluna de Imagem -->
                <div class="cta-image-container">
                    <img :src="imagemCta" alt="Profissional apresentando imóvel" class="cta-image" loading="lazy">
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
/* Respiro fixo solicitado para manter o padrão matemático do layout */
.section-call-action {
    width: 100%;
    background-color: var(--bg-app); 
}

/* O Card Duplo (Estilo Portfólio Premium) */
.cta-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: var(--color-neutral-0);
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

/* Elemento visual para chamar atenção do público-alvo */
.cta-badge {
    display: inline-block;
    align-self: flex-start;
    padding: var(--padding-2xs) var(--padding-sm);
    background-color: var(--color-focus-ring);
    color: var(--color-accent-500);
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
    color: var(--color-neutral-900);
    line-height: var(--leading-tight);
    margin-bottom: 16px;
}

.cta-descricao {
    font-size: var(--text-lg);
    color: var(--color-neutral-600);
    line-height: var(--leading-relaxed);
    margin-bottom: 32px;
}

.cta-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

/* Ajustes finos nos botões usando seus tokens globais */
.cta-btn {
    padding: var(--padding-btn-lg);
}

.cta-btn-outline {
    padding: var(--padding-btn-lg);
    background-color: transparent;
}

/* Imagem cobrindo 100% da coluna direita */
.cta-image-container {
    width: 100%;
    height: 100%;
    min-height: 400px;
}

.cta-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Quebra elegante para Mobile e Tablets */
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