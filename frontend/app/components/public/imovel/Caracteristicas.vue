<script setup lang="ts">
import { Check } from '@lucide/vue';

const gruposCaracteristicas = [
    {
        titulo: 'Área privativa',
        itens: [
            'Área de serviço',
            'Copa',
            'Cozinha',
            'Cozinha planejada',
            'Escritório',
            'Lavabo',
            'Lavanderia',
            'Ambientes integrados',
            'Closet',
            'Despensa',
            'Quartos com armários',
            'Quartos com sacada',
            'Dormitório para hóspedes',
            'Dependência para funcionários',
            'Sótão',
            'Ar-condicionado',
            'Banheira',
            'Box no banheiro',
            'Hidromassagem',
            'Lareira',
            'Móveis planejados',
            'Pé-direito alto',
            'Reformado',
            'Sauna',
            'TV a cabo',
            'Varanda',
            'Varanda gourmet',
            'Aceita animais',
            'Acabamento em alto padrão',
            'Quintal',
            'Canil',
        ],
    },
    {
        titulo: 'Área comum',
        itens: [
            'Churrasqueira',
            'Jardim',
            'Paisagismo',
            'Piscina',
            'Alarme',
            'Câmeras de segurança',
            'Carregador para carro elétrico',
            'Depósito',
            'Interfone',
            'Portão automático',
        ],
    },
] as const;


</script>


<template>
    <section class="secao-caracteristicas" aria-labelledby="titulo-caracteristicas">
        <div class="cabecalho-caracteristicas">
            <div>
                <h3 id="titulo-caracteristicas">Características do imóvel</h3>
            </div>

        </div>

        <div class="grupos-caracteristicas">
            <section v-for="(grupo, index) in gruposCaracteristicas" :key="grupo.titulo" class="grupo-caracteristicas"
                :class="`grupo-caracteristicas-${index + 1}`" :aria-labelledby="`titulo-grupo-${index}`">
                <h4 :id="`titulo-grupo-${index}`">{{ grupo.titulo }}</h4>
                <ul>
                    <li v-for="item in grupo.itens" :key="item" class="caracteristica">
                        <span class="icone-caracteristica">
                            <Check aria-hidden="true" />
                        </span>
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </section>
</template>


<style scoped>

.secao-caracteristicas{
    margin-bottom: 32px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 24px;
}

.cabecalho-caracteristicas {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: var(--padding-lg);
    margin-bottom: var(--padding-xl);
}

.cabecalho-caracteristicas h3 {
    color: var(--color-neutral-900);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}



.grupos-caracteristicas {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--padding-lg);
}

.grupo-caracteristicas {
    min-width: 0;
}

.grupo-caracteristicas h3 {
    margin-bottom: var(--padding-md);
    color: var(--color-neutral-900);
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.grupo-caracteristicas ul {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--padding-sm) var(--padding-lg);
    list-style: none;
}

.grupo-caracteristicas li {
    display: flex;
    min-width: 0;
    align-items: flex-start;
    gap: var(--padding-xs);
    color: var(--color-neutral-700);
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
}



.icone-caracteristica {
    display: inline-flex;
    width: 18px;
    height: 18px;
    flex: 0 0 18px;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    border-radius: var(--radius-full);
    background: var(--color-focus-ring);
    color: var(--color-accent-500);
    transition: var(--transition-normal)
}

.icone-caracteristica svg {
    width: 12px;
    height: 12px;
    stroke-width: 2.5;
}

.caracteristica:hover .icone-caracteristica {
    scale: 1.2;
}

@media (max-width: 900px) {
    .grupo-caracteristicas ul {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .secao-caracteristicas {
        padding-top: var(--padding-xl);
    }

    .cabecalho-caracteristicas {
        align-items: flex-start;
        margin-bottom: var(--padding-lg);
    }

    .cabecalho-caracteristicas h2 {
        font-size: var(--text-xl);
    }

    .grupo-caracteristicas ul {
        grid-template-columns: minmax(0, 1fr);
    }
}

@media (max-width: 380px) {
    .cabecalho-caracteristicas {
        flex-direction: column;
        gap: var(--padding-sm);
    }
}
</style>
