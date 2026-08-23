<script setup lang="ts">
import CallAction from './CallAction.vue';

const estatisticas = [
    { valor: '+56 mil', label: 'Imóveis negociados' },
    { valor: '+67 mil', label: 'Clientes atendidos' },
    { valor: '+500 mil', label: 'Acessos mensais' },
    { valor: '+1 mil', label: 'Novos imóveis por mês' }
];
</script>

<template>
  
    <section class="section-estatisticas" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500"
             data-aos-easing="ease-in-out">
        <div class="container-estatisticas estilo-container">
            
            <div class="estatisticas-header">
                <h2 class="estatisticas-titulo">
                    O Meu Lugar em <span>números</span>
                </h2>
                <p class="estatisticas-descricao">
                    Com expertise e foco na excelência, nos consolidamos como referência no mercado imobiliário. 
                    Cada número expressa a confiança dos nossos clientes e a dedicação em transformar projetos 
                    em grandes histórias de sucesso.
                </p>
            </div>

            <div class="estatisticas-grid">
                <div 
                    v-for="(item, index) in estatisticas" 
                    :key="index" 
                    class="estatisticas-card"
                >
                    <div class="card-valor">{{ item.valor }}</div>
                    <div class="card-label">{{ item.label }}</div>
                </div>
            </div>

        </div>
    </section>

     <CallAction />
</template>

<style scoped>

.section-estatisticas {
    width: 100%;
    background-color: var(--color-neutral-0); 
}

.container-estatisticas{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}


.estatisticas-header {
    text-align: center;
    max-width: 800px;
}

.estatisticas-titulo {
    font-family: var(--font-secondary);
    font-size: var(--text-4xl);
    font-weight: var(--font-medium);
    color: var(--color-neutral-900); 
    line-height: var(--leading-tight);
    margin-bottom: 12px;
}


.estatisticas-titulo span {
    font-weight: var(--font-light);
    font-style: italic;
    color: var(--color-accent-500); 
}

.estatisticas-descricao {
    font-size: var(--text-lg);
    color: var(--color-neutral-600); 
    line-height: var(--leading-relaxed);
}


.estatisticas-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
}


.estatisticas-card {
    background-color: var(--color-neutral-0);
    padding: var(--padding-2xl);
    border-radius: var(--radius-xl);
    border: 1px solid var(--color-neutral-200);
    text-align: center;
    box-shadow: var(--shadow-sm); 
    transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
}


.estatisticas-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-neutral-300);
}


.card-valor {
    font-family: var(--font-primary);
    font-size: var(--text-4xl);
    font-weight: var(--font-bold);
    color: var(--color-accent-500); 
    line-height: var(--leading-tight);
    margin-bottom: 12px;
    letter-spacing: -1px;
}

.card-label {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    color: var(--color-neutral-600);
}


@media (max-width: 1024px) {
    .estatisticas-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .estatisticas-titulo {
        font-size: var(--text-3xl);
    }
    
    .estatisticas-descricao {
        font-size: var(--text-base);
    }

    .card-valor {
        font-size: var(--text-3xl);
    }
}

@media (max-width: 480px) {
    .estatisticas-grid {
        grid-template-columns: 1fr;
        gap: 24px;
    }
    
    .estatisticas-card {
        padding: var(--padding-xl);
    }
}
</style>