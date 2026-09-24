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
    <div class="filtro-listagem">
        <div class="filtro-resumo">
            <div>
                <span class="filtro-kicker">Encontre seu próximo endereço</span>
                <strong>Refine sua busca</strong>
            </div>

            <div class="filtros-rapidos">
                <label class="campo-rapido">
                    <span>Cidade</span>
                    <select v-model="cidade">
                        <option value="presidente-prudente">Presidente Prudente</option>
                        <option value="sao-paulo">São Paulo</option>
                    </select>
                </label>
                <label class="campo-rapido">
                    <span>Bairro</span>
                    <select v-model="bairro">
                        <option value="todos">Todos os bairros</option>
                        <option value="centro">Centro</option>
                        <option value="jardim-bongiovani">Jardim Bongiovani</option>
                        <option value="parque-do-povo">Parque do Povo</option>
                        <option value="vila-marcondes">Vila Marcondes</option>
                    </select>
                </label>
                <label class="campo-rapido campo-rapido-menor">
                    <span>Dormitórios</span>
                    <select v-model="quartos">
                        <option value="qualquer">Qualquer</option>
                        <option value="1">1 ou mais</option>
                        <option value="2">2 ou mais</option>
                        <option value="3">3 ou mais</option>
                    </select>
                </label>
                <button class="botao-pesquisar" type="button" aria-label="Pesquisar imóveis" title="Pesquisar"
                    @click="aplicarFiltros">
                    <Search :size="18" aria-hidden="true" />
                </button>
            </div>

            <button class="botao-abrir-filtros" type="button" @click="modalAberto = true">
                <SlidersHorizontal :size="18" aria-hidden="true" />
                <span>Mais filtros</span>
                <span v-if="filtrosAtivos" class="contador-filtros">{{ filtrosAtivos }}</span>
            </button>
        </div>
    </div>

    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="modalAberto" class="modal-backdrop" @click.self="modalAberto = false">
                <section class="modal-filtros" role="dialog" aria-modal="true" aria-labelledby="titulo-filtros">
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
                                <h3>Destaques</h3>
                                <p>Escolha comodidades importantes para você</p>
                            </div>
                            <div class="comodidades-grid">
                                <button v-for="comodidade in comodidades" :key="comodidade.id" type="button"
                                    :class="{ selecionado: comodidadesSelecionadas.includes(comodidade.id) }"
                                    @click="alternarComodidade(comodidade.id)">
                                    <component :is="comodidade.icone" class="comodidade-icone" aria-hidden="true" />
                                    <span>{{ comodidade.nome }}</span>
                                </button>
                            </div>
                        </section>

                        <section class="secao-filtro">
                            <div class="secao-titulo">
                                <h3>Tipo de imóvel</h3>
                            </div>
                            <div class="opcoes-segmentadas" role="group" aria-label="Tipo de imóvel">
                                <button
                                    v-for="opcao in [{ id: 'qualquer', nome: 'Qualquer tipo' }, { id: 'apartamento', nome: 'Apartamento' }, { id: 'casa', nome: 'Casa' }]"
                                    :key="opcao.id" type="button" :class="{ selecionado: tipoAcomodacao === opcao.id }"
                                    @click="tipoAcomodacao = opcao.id">
                                    {{ opcao.nome }}
                                </button>
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
                                    <span>Categoria</span>
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
                                <h3>Localização e características</h3>
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
                                <label class="campo-filtro">
                                    <span>Área mínima</span>
                                    <input v-model="areaMinima" type="number" min="0" placeholder="m²"
                                        aria-label="Área mínima">
                                </label>
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
    </Teleport>
</template>

<style scoped>
.filtro-listagem {
    width: 100%;
    max-width: var(--max-width);
    padding: 0 var(--padding-xl);
}

.filtro-cabecalho {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--padding-lg);
    margin-bottom: var(--padding-lg);
}

.filtro-kicker {
    display: block;
    margin-bottom: var(--padding-3xs);
    color: var(--color-accent-500);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.filtro-cabecalho h1 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-2xl);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.filtro-icone {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    color: var(--color-accent-500);
}

.filtro-formulario {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: var(--padding-md);
    align-items: end;
}

.campo-filtro,
.campo-grupo {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: var(--padding-3xs);
}

.campo-filtro span,
.campo-grupo>span {
    color: var(--color-neutral-600);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
}

.campo-filtro select,
.campo-grupo input {
    width: 100%;
    height: 46px;
    min-width: 0;
    padding: 0 var(--padding-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    outline: 0;
    background: var(--color-neutral-0);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-sm);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.campo-filtro select:focus,
.campo-grupo input:focus {
    border-color: var(--color-accent-400);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.campos-duplos {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--padding-xs);
}

.botao-filtrar {
    display: inline-flex;
    width: 100%;
    height: 46px;
    align-items: center;
    justify-content: center;
    gap: var(--padding-xs);
    grid-column: span 2;
    padding: var(--padding-btn-md);
    border: 0;
    border-radius: var(--radius-md);
    background: var(--color-accent-500);
    box-shadow: 0 2px 6px var(--shadow-accent-sm);
    color: var(--color-neutral-0);
    font: inherit;
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: background-color var(--transition-fast), box-shadow var(--transition-fast);
}

.botao-filtrar:hover {
    background: var(--color-accent-600);
    box-shadow: 0 4px 10px var(--shadow-accent-lg);
}

@media (max-width: 1050px) {
    .filtro-formulario {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

@media (max-width: 700px) {
    .filtro-formulario {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .campo-finalidade,
    .campo-tipo,
    .campo-cidade,
    .campo-bairro,
    .botao-filtrar {
        grid-column: span 2;
    }
}

@media (max-width: 420px) {
    .filtro-formulario {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .campo-filtro,
    .campo-grupo,
    .campo-finalidade,
    .botao-filtrar {
        width: 100%;
    }
}

.filtro-resumo {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
    align-items: center;
    gap: var(--padding-lg);
}

.filtro-resumo strong {
    display: block;
    color: var(--text-main);
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
}

.filtros-rapidos {
    display: flex;
    min-width: 0;
    align-items: end;
    gap: var(--padding-sm);
    justify-content: center;
}

.campo-rapido {
    display: flex;
    min-width: 150px;
    flex-direction: column;
    gap: var(--padding-3xs);
}

.campo-rapido-menor {
    min-width: 124px;
}

.campo-rapido span {
    padding-left: var(--padding-3xs);
    color: var(--text-muted);
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
}

.campo-rapido select {
    width: 100%;
    height: 40px;
    padding: 0 var(--padding-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    outline: 0;
    background: var(--bg-surface);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-sm);
}

.campo-rapido select:focus {
    border-color: var(--color-accent-400);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.botao-abrir-filtros {
    display: inline-flex;
    width: max-content;
    justify-self: end;
    align-items: center;
    gap: var(--padding-xs);
    min-height: 42px;
    padding: var(--padding-btn-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-full);
    background: var(--bg-surface);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
    cursor: pointer;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast), transform var(--transition-fast);
}

.botao-abrir-filtros:hover {
    border-color: var(--color-accent-400);
    box-shadow: var(--shadow-sm);
    transform: translateY(-1px);
}

.botao-pesquisar {
    display: inline-flex;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 1px solid var(--color-accent-500);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--color-accent-500);
    font: inherit;
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: background-color var(--transition-fast), box-shadow var(--transition-fast);
}

.botao-pesquisar:hover {
    background: var(--color-accent-500);
    color: var(--color-neutral-0);
    box-shadow: var(--shadow-sm);
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
    position: fixed;
    z-index: var(--z-modal-backdrop);
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--padding-xl);
    background: rgba(31, 23, 26, 0.48);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
}

.modal-filtros {
    display: flex;
    width: min(100%, 680px);
    max-height: min(88vh, 760px);
    flex-direction: column;
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
    margin: 0;
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
    transition: background-color var(--transition-fast);
}

.botao-fechar:hover {
    background: var(--color-neutral-100);
}

.modal-conteudo {
    overflow-y: auto;
    padding: 0 var(--padding-xl);
}

.secao-filtro {
    padding: var(--padding-xl) 0;
    border-bottom: 1px solid var(--color-neutral-200);
}

.secao-filtro:last-child {
    border-bottom: 0;
}

.secao-titulo {
    margin-bottom: var(--padding-md);
}

.secao-titulo h3 {
    margin: 0 0 var(--padding-3xs);
    color: var(--text-main);
    font-size: var(--text-lg);
    font-weight: var(--font-semibold);
}

.secao-titulo p {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--text-sm);
}

.comodidades-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--padding-sm);
}

.comodidades-grid button {
    display: flex;
    min-height: 104px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--padding-xs);
    padding: var(--padding-sm);
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-md);
    background: var(--bg-surface);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-sm);
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
    width: 28px;
    height: 28px;
    color: var(--color-accent-500);
}

.opcoes-segmentadas {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-bottom: var(--padding-lg);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    overflow: hidden;
}

.opcoes-segmentadas button {
    min-height: 46px;
    border: 0;
    border-right: 1px solid var(--color-neutral-200);
    background: var(--bg-surface);
    color: var(--color-neutral-700);
    font: inherit;
    font-size: var(--text-sm);
    cursor: pointer;
}

.opcoes-segmentadas button:last-child {
    border-right: 0;
}

.opcoes-segmentadas button.selecionado {
    background: var(--color-neutral-100);
    box-shadow: inset 0 0 0 2px var(--color-neutral-900);
    color: var(--text-main);
    font-weight: var(--font-semibold);
}

.campos-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--padding-md);
}

.campos-grid-tipo {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.campo-filtro input,
.campo-filtro select {
    width: 100%;
    height: 44px;
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
    justify-content: space-between;
    gap: var(--padding-md);
    padding: var(--padding-md) var(--padding-xl);
    border-top: 1px solid var(--color-neutral-200);
    background: var(--bg-surface);
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
    border: 0;
    background: transparent;
    color: var(--text-muted);
}

.botao-aplicar {
    display: inline-flex;
    align-items: center;
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

.modal-fade-enter-active .modal-filtros,
.modal-fade-leave-active .modal-filtros {
    transition: transform var(--transition-normal);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-from .modal-filtros,
.modal-fade-leave-to .modal-filtros {
    transform: translateY(12px) scale(0.98);
}

@media (max-width: 600px) {
    .modal-backdrop {
        align-items: flex-end;
        padding: 0;
    }

    .modal-filtros {
        width: 100%;
        max-height: 92vh;
        border-radius: var(--radius-xl) var(--radius-xl) 0 0;
    }

    .comodidades-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .campos-grid,
    .campos-grid-tipo {
        grid-template-columns: 1fr;
    }

    .filtro-resumo {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .filtros-rapidos {
        width: 100%;
        order: 3;
        margin: 0;
    }

    .campo-rapido {
        flex: 1;
        min-width: 0;
    }
}

@media (max-width: 420px) {
    .botao-abrir-filtros {
        flex-shrink: 0;
    }

    .filtros-rapidos {
        align-items: stretch;
        flex-direction: column;
    }

    .campo-rapido {
        width: 100%;
    }

    .modal-conteudo {
        padding: 0 var(--padding-lg);
    }

    .modal-cabecalho,
    .modal-rodape {
        padding-right: var(--padding-lg);
        padding-left: var(--padding-lg);
    }

    .botao-aplicar {
        flex: 1;
        justify-content: center;
    }
}
</style>
