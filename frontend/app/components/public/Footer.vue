<script setup lang="ts">
// import MeuLugar from '@/assets/imgs/geral/meulugar.png'
</script>

<template>
    <footer class="section-rodape">
        <div class="container-rodape">

            <!-- Grid Principal com Navegação -->
            <div class="rodape-grid">

                <!-- Coluna 1: Marca e Resumo -->
                <div class="rodape-col-brand">
                     <NuxtImg src="/meulugar.png" class="rodape-logo" width="200px" alt="Logo do portal imobiliário" format="webp" loading="lazy" />
                    <p class="rodape-brand-text">
                        Conectando você aos imóveis mais exclusivos e às melhores oportunidades do mercado imobiliário.
                    </p>
                </div>

                <!-- Coluna 2: Navegação Principal -->
                <div class="rodape-col">
                    <h4 class="rodape-titulo">Navegação</h4>
                    <ul class="rodape-links">
                        <li><a href="#">Comprar</a></li>
                        <li><a href="#">Alugar</a></li>
                        <li><a href="#">Lançamentos</a></li>
                        <li><a href="#">Buscar Imobiliárias</a></li>
                        <li><a href="#">Notícias</a></li>
                    </ul>
                </div>

                <!-- Coluna 3: Tipos de Imóveis -->
                <div class="rodape-col">
                    <h4 class="rodape-titulo">Categorias</h4>
                    <ul class="rodape-links">
                        <li><a href="#">Casas de Condomínio</a></li>
                        <li><a href="#">Apartamentos de Luxo</a></li>
                        <li><a href="#">Coberturas</a></li>
                        <li><a href="#">Terrenos & Fazendas</a></li>
                    </ul>
                </div>

                <!-- Coluna 4: Para Parceiros -->
                <div class="rodape-col">
                    <h4 class="rodape-titulo">Parceiros</h4>
                    <ul class="rodape-links">
                        <li><a href="#">Anunciar Imóvel</a></li>
                        <li><a href="#">Área do Corretor</a></li>
                        <li><a href="#">Cadastrar Imobiliária</a></li>
                    </ul>
                </div>

            </div>

            <!-- Linha Divisória Sutil -->
            <div class="rodape-divisor"></div>
        </div>

        <!-- Rodapé Inferior: Direitos e Disclaimer -->
        <div class="rodape-bottom">
            <div class="rodape-bottom-info">
                <p class="copyright-texto">
                    © 2026 <strong>Meu Lugar</strong>. Todos os direitos reservados para <strong>Paulo Vitor</strong>.
                </p>
                <span class="disclaimer-badge">
                    Portal meramente ilustrativo para fins de portfólio (2026)
                </span>
            </div>
        </div>

    </footer>
</template>

<style scoped>

.section-rodape {
    width: 100%;
    background-color: var(--color-accent-800); 
    color: var(--color-neutral-0);
}

.container-rodape {
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
    padding-top: 64px;
}

/* 2. Grid das Colunas */
.rodape-grid {
    display: grid;
    grid-template-columns: 1.5fr repeat(3, 1fr);
    gap: 40px;
}

.rodape-logo {
    max-width: 160px;
    height: auto;
    margin-bottom: 16px;
    filter: brightness(0) invert(1);
}

.rodape-brand-text {
    font-size: var(--text-sm);
    color: var(--color-neutral-300); 
    line-height: var(--leading-relaxed);
    max-width: 280px;
}

/* 3. Títulos das Seções */
.rodape-titulo {
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    color: var(--color-neutral-0); /* Branco absoluto */
    margin-bottom: 20px;
}

/* 4. Links */
.rodape-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.rodape-links a {
    font-size: var(--text-sm);
    color: var(--color-neutral-300);
    text-decoration: none;
    transition: all var(--transition-fast);
}

.rodape-links a:hover {
    color: var(--color-neutral-0); 
    margin-left: 4px; 
}


.rodape-bottom {
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: var(--color-accent-800);
    padding: 16px 0;
    border-top: 1px solid var(--color-neutral-600);
}

.rodape-bottom-info {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0px var(--padding-xl);
}

.copyright-texto {
    font-size: var(--text-xs);
    color: rgba(255, 255, 255, 0.85);
}

.copyright-texto strong {
    color: var(--color-neutral-0);
    font-weight: var(--font-semibold);
}

/* 7. Pílula de Aviso do Portfólio */
.disclaimer-badge {
    font-size: var(--text-xs);
    color: rgba(255, 255, 255, 0.9);
    background-color: rgba(255, 255, 255, 0.12);
    padding: var(--padding-2xs) var(--padding-sm);
    border-radius: var(--radius-full);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 8. Adaptabilidade Responsiva */
@media (max-width: 1024px) {
    .rodape-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 640px) {
    .rodape-grid {
        grid-template-columns: 1fr;
        gap: 32px;
    }

    .rodape-bottom-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
}
</style>