<script setup lang="ts">
import { Armchair, CarFront, PawPrint, Search, SlidersHorizontal, Waves, X } from '@lucide/vue'

const modalAberto = ref(false)
const finalidade = ref<'comprar' | 'alugar'>('comprar')
const tipoAcomodacao = ref('qualquer')
const tipoImovel = ref('apartamento')
const cidade = ref('presidente-prudente')
const bairro = ref('todos')
const quartos = ref('qualquer')
const banheiros = ref('qualquer')
const vagas = ref('qualquer')
const precoMinimo = ref('')
const precoMaximo = ref('')
const areaMinima = ref('')
const areaMaxima = ref('')
const comodidadesSelecionadas = ref<string[]>([])

const comodidades = [
    { id: 'pet', nome: 'Aceita pets', icone: PawPrint },
    { id: 'garagem', nome: 'Estacionamento', icone: CarFront },
    { id: 'piscina', nome: 'Piscina', icone: Waves },
    { id: 'mobiliado', nome: 'Mobiliado', icone: Armchair }
]

const filtrosAtivos = computed(() => {
    return [
        finalidade.value !== 'comprar',
        tipoAcomodacao.value !== 'qualquer',
        bairro.value !== 'todos',
        quartos.value !== 'qualquer',
        banheiros.value !== 'qualquer',
        vagas.value !== 'qualquer',
        precoMinimo.value,
        precoMaximo.value,
        areaMinima.value,
        areaMaxima.value,
        comodidadesSelecionadas.value.length
    ].filter(Boolean).length
})

function alternarComodidade(id: string) {
    if (comodidadesSelecionadas.value.includes(id)) {
        comodidadesSelecionadas.value = comodidadesSelecionadas.value.filter(item => item !== id)
        return
    }

    comodidadesSelecionadas.value.push(id)
}

function aplicarFiltros() {
    modalAberto.value = false
}

function abrirModal() {
    modalAberto.value = true
}

defineExpose({ abrirModal })
</script>

<template>
    <aside class="filtro-listagem">
        <header class="filtro-cabecalho">
            <div class="titulo-filtros">
                <SlidersHorizontal aria-hidden="true" />
                <h2>Filtros</h2>
            </div>
            <span class="contador-desktop">{{ filtrosAtivos }} aplicados</span>
            <button class="botao-abrir-filtros" type="button" @click="abrirModal">
                <SlidersHorizontal :size="18" aria-hidden="true" />
                <span>Filtros</span>
                <span v-if="filtrosAtivos" class="contador-filtros">{{ filtrosAtivos }}</span>
            </button>
        </header>

        <Transition name="modal-fade">
            <div class="modal-backdrop" :class="{ aberta: modalAberto }" @click.self="modalAberto = false">
                <section class="modal-filtros" :role="modalAberto ? 'dialog' : 'region'"
                    :aria-modal="modalAberto ? 'true' : undefined" aria-labelledby="titulo-filtros">
                    <header class="modal-cabecalho">
                        <h2 id="titulo-filtros">Refine sua busca</h2>
                        <button class="botao-fechar" type="button" aria-label="Fechar filtros"
                            @click="modalAberto = false">
                            <X :size="20" aria-hidden="true" />
                        </button>
                    </header>

                    <form class="modal-conteudo" @submit.prevent="aplicarFiltros">
                        <section class="secao-filtro">
                            <div class="secao-titulo">
                                <h3>Finalidade e tipo</h3>
                            </div>
                            <div class="campos-grid campos-grid-tipo">
                                <label class="campo-filtro">
                                    <span>Finalidade</span>
                                    <select v-model="finalidade">
                                        <option value="comprar">Comprar</option>
                                        <option value="alugar">Alugar</option>
                                    </select>
                                </label>
                                <label class="campo-filtro">
                                    <span>Tipo de imóvel</span>
                                    <select v-model="tipoImovel">
                                        <option value="apartamento">Apartamento</option>
                                        <option value="casa">Casa</option>
                                        <option value="sala">Sala comercial</option>
                                        <option value="terreno">Terreno</option>
                                    </select>
                                </label>
                            </div>
                        </section>

                        <section class="secao-filtro">
                            <div class="secao-titulo">
                                <h3>Localização</h3>
                            </div>
                            <div class="campos-grid">
                                <label class="campo-filtro">
                                    <span>Cidade</span>
                                    <select v-model="cidade">
                                        <option value="presidente-prudente">Presidente Prudente</option>
                                        <option value="sao-paulo">São Paulo</option>
                                    </select>
                                </label>
                                <label class="campo-filtro">
                                    <span>Bairro</span>
                                    <select v-model="bairro">
                                        <option value="todos">Todos os bairros</option>
                                        <option value="centro">Centro</option>
                                        <option value="jardim-bongiovani">Jardim Bongiovani</option>
                                        <option value="parque-do-povo">Parque do Povo</option>
                                        <option value="vila-marcondes">Vila Marcondes</option>
                                    </select>
                                </label>
                            </div>
                        </section>

                        <section class="secao-filtro">
                            <div class="secao-titulo">
                                <h3>Faixa de preço</h3>
                                <p>Defina o valor que cabe no seu momento</p>
                            </div>
                            <div class="campos-duplos">
                                <label class="campo-filtro">
                                    <span>Mínimo</span>
                                    <input v-model="precoMinimo" type="number" min="0" placeholder="R$ 0"
                                        aria-label="Preço mínimo">
                                </label>
                                <label class="campo-filtro">
                                    <span>Máximo</span>
                                    <input v-model="precoMaximo" type="number" min="0" placeholder="Sem limite"
                                        aria-label="Preço máximo">
                                </label>
                            </div>
                        </section>

                        <section class="secao-filtro">
                            <div class="secao-titulo">
                                <h3>Características</h3>
                            </div>
                            <div class="campos-grid">
                                <label class="campo-filtro">
                                    <span>Dormitórios</span>
                                    <select v-model="quartos">
                                        <option value="qualquer">Qualquer quantidade</option>
                                        <option value="1">1 ou mais</option>
                                        <option value="2">2 ou mais</option>
                                        <option value="3">3 ou mais</option>
                                        <option value="4">4 ou mais</option>
                                    </select>
                                </label>
                                <label class="campo-filtro">
                                    <span>Banheiros</span>
                                    <select v-model="banheiros">
                                        <option value="qualquer">Qualquer quantidade</option>
                                        <option value="1">1 ou mais</option>
                                        <option value="2">2 ou mais</option>
                                        <option value="3">3 ou mais</option>
                                    </select>
                                </label>
                                <label class="campo-filtro">
                                    <span>Vagas</span>
                                    <select v-model="vagas">
                                        <option value="qualquer">Qualquer quantidade</option>
                                        <option value="1">1 ou mais</option>
                                        <option value="2">2 ou mais</option>
                                        <option value="3">3 ou mais</option>
                                    </select>
                                </label>
                                <div class="campos-duplos">
                                    <label class="campo-filtro">
                                        <span>Área mínima</span>
                                        <input v-model="areaMinima" type="number" min="0" placeholder="m²"
                                            aria-label="Área mínima">
                                    </label>
                                    <label class="campo-filtro">
                                        <span>Área máxima</span>
                                        <input v-model="areaMaxima" type="number" min="0" placeholder="m²"
                                            aria-label="Área máxima">
                                    </label>
                                </div>
                            </div>
                        </section>

                        <section class="secao-filtro">
                            <div class="secao-titulo">
                                <h3>Destaques</h3>
                                <p>Escolha comodidades importantes para você</p>
                            </div>
                            <div class="comodidades-grid">
                                <button v-for="comodidade in comodidades" :key="comodidade.id" type="button"
                                    :class="{ selecionado: comodidadesSelecionadas.includes(comodidade.id) }"
                                    :aria-pressed="comodidadesSelecionadas.includes(comodidade.id)"
                                    @click="alternarComodidade(comodidade.id)">
                                    <component :is="comodidade.icone" class="comodidade-icone" aria-hidden="true" />
                                    <span>{{ comodidade.nome }}</span>
                                </button>
                            </div>
                        </section>
                    </form>

                    <footer class="modal-rodape">
                        <button class="botao-limpar" type="button" @click="modalAberto = false">Fechar</button>
                        <button class="botao-aplicar" type="button" @click="aplicarFiltros">
                            <Search :size="18" aria-hidden="true" />
                            Mostrar imóveis
                        </button>
                    </footer>
                </section>
            </div>
        </Transition>
    </aside>
</template>

<style scoped>
.filtro-listagem {
    width: 100%;
    max-height: inherit;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: var(--padding-md);
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
}

.filtro-listagem::-webkit-scrollbar {
    display: none;
}

.filtro-cabecalho {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--padding-sm);
    padding: 0 0 var(--padding-md);
    border-bottom: 1px solid var(--color-neutral-200);
}

.titulo-filtros {
    display: flex;
    align-items: center;
    gap: var(--padding-xs);
}

.titulo-filtros svg {
    width: 18px;
    height: 18px;
}

.titulo-filtros h2 {
    color: var(--text-main);
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
}

.contador-desktop {
    color: var(--color-neutral-600);
    font-size: var(--text-xs);
    white-space: nowrap;
}

.botao-abrir-filtros {
    display: none;
    min-height: 42px;
    align-items: center;
    justify-content: center;
    gap: var(--padding-xs);
    padding: var(--padding-btn-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    background: var(--bg-surface);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    cursor: pointer;
}

.contador-filtros {
    display: inline-flex;
    width: 22px;
    height: 22px;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-full);
    background: var(--color-accent-500);
    color: var(--color-neutral-0);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
}

.modal-backdrop {
    position: static;
    display: block;
}

.modal-filtros {
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow: visible;
    border: 0;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
}

.modal-cabecalho {
    display: none;
}

.modal-conteudo {
    overflow: visible;
}

.secao-filtro {
    padding: var(--padding-md) 0;
    border-bottom: 1px solid var(--color-neutral-200);
}

.secao-filtro:last-child {
    border-bottom: 0;
}

.secao-titulo {
    margin-bottom: var(--padding-sm);
}

.secao-titulo h3 {
    margin: 0 0 var(--padding-3xs);
    color: var(--text-main);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
}

.secao-titulo p {
    color: var(--text-muted);
    font-size: var(--text-xs);
}

.comodidades-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--padding-xs);
}

.comodidades-grid button {
    display: flex;
    min-height: 72px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--padding-3xs);
    padding: var(--padding-xs);
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-md);
    background: var(--bg-surface);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-xs);
    text-align: center;
    cursor: pointer;
    transition: border-color var(--transition-fast), background-color var(--transition-fast);
}

.comodidades-grid button:hover,
.comodidades-grid button.selecionado {
    border-color: var(--color-accent-400);
    background: var(--color-neutral-50);
}

.comodidade-icone {
    width: 22px;
    height: 22px;
    color: var(--color-accent-500);
}

.campos-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--padding-sm);
}

.campos-grid-tipo {
    grid-template-columns: 1fr;
}

.campos-duplos {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--padding-xs);
}

.campo-filtro {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: var(--padding-3xs);
}

.campo-filtro span {
    color: var(--color-neutral-600);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
}

.campo-filtro input,
.campo-filtro select {
    width: 100%;
    height: 42px;
    min-width: 0;
    padding: 0 var(--padding-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    outline: 0;
    background: var(--bg-surface);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-sm);
}

.campo-filtro input:focus,
.campo-filtro select:focus {
    border-color: var(--color-accent-400);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.modal-rodape {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: flex-end;
    gap: var(--padding-md);
    padding-top: var(--padding-md);
    border-top: 1px solid var(--color-neutral-200);
}

.botao-limpar,
.botao-aplicar {
    min-height: 44px;
    padding: var(--padding-btn-md);
    border-radius: var(--radius-md);
    font: inherit;
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    cursor: pointer;
}

.botao-limpar {
    display: none;
    border: 0;
    background: transparent;
    color: var(--text-muted);
}

.botao-aplicar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--padding-xs);
    border: 0;
    background: var(--color-accent-500);
    color: var(--color-neutral-0);
    box-shadow: 0 2px 6px var(--shadow-accent-sm);
}

.botao-aplicar:hover {
    background: var(--color-accent-600);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity var(--transition-normal);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

@media (max-width: 900px) {
    .filtro-listagem {
        max-height: none;
        overflow: visible;
        padding: 0;
        border: 0;
        background: transparent;
    }

    .filtro-cabecalho {
        padding: 0;
        border: 0;
    }

    .titulo-filtros,
    .contador-desktop {
        display: none;
    }

    .botao-abrir-filtros {
        display: inline-flex;
    }

    .modal-backdrop {
        position: fixed;
        z-index: var(--z-modal-backdrop);
        inset: 0;
        display: none;
        align-items: center;
        justify-content: center;
        padding: var(--padding-xl);
        background: rgba(31, 23, 26, 0.48);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
    }

    .modal-backdrop.aberta {
        display: flex;
    }

    .modal-filtros {
        width: min(100%, 680px);
        max-height: min(88vh, 760px);
        overflow: hidden;
        border: 1px solid var(--color-neutral-200);
        border-radius: var(--radius-xl);
        background: var(--bg-surface);
        box-shadow: var(--shadow-lg);
    }

    .modal-cabecalho {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: space-between;
        padding: var(--padding-lg) var(--padding-xl);
        border-bottom: 1px solid var(--color-neutral-200);
    }

    .modal-cabecalho h2 {
        color: var(--text-main);
        font-size: var(--text-lg);
        font-weight: var(--font-semibold);
    }

    .botao-fechar {
        display: inline-flex;
        width: 34px;
        height: 34px;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: var(--radius-full);
        background: transparent;
        color: var(--text-main);
        cursor: pointer;
    }

    .modal-conteudo {
        overflow-y: auto;
        padding: 0 var(--padding-xl);
    }

    .modal-rodape {
        justify-content: space-between;
        padding: var(--padding-md) var(--padding-xl);
        border-top: 1px solid var(--color-neutral-200);
    }

    .botao-limpar {
        display: inline-flex;
        align-items: center;
    }

    .botao-aplicar {
        flex: 1;
    }
}

@media (max-width: 600px) {
    .modal-backdrop {
        align-items: flex-end;
        padding: 0;
    }

    .modal-filtros {
        width: 100%;
        max-height: 92vh;
        margin: 0 auto;
        border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }

    .comodidades-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .campos-grid-tipo {
        grid-template-columns: 1fr;
    }

    .modal-conteudo {
        padding: 0 var(--padding-lg);
    }

    .modal-cabecalho,
    .modal-rodape {
        padding-right: var(--padding-lg);
        padding-left: var(--padding-lg);
    }
}
</style>
