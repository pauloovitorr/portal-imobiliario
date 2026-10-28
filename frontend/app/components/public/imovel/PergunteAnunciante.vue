<script setup lang="ts">
import { Send } from '@lucide/vue'
import { computed, ref } from 'vue'

const pergunta = ref('')
const limiteCaracteres = 200
const quantidadeCaracteres = computed(() => pergunta.value.length)
const perguntasRapidas = [
    'Eu posso visitar?',
    'Aceita permuta?',
    'Me retorne no whatsapp!',
    'Tenho interesse, está disponível?',
]

const selecionarPergunta = (texto: string): void => {
    pergunta.value = pergunta.value === texto ? '' : texto
}
</script>

<template>
    <section class="secao-pergunta" aria-labelledby="titulo-pergunta">
        <div class="cabecalho-pergunta">
            <div>
                <h2 id="titulo-pergunta">Perguntas rápidas para o anunciante</h2>
                <p>Faça perguntas rápidas ao anunciante ou escreva a sua própria pergunta.</p>
            </div>
        </div>

        <form class="form-pergunta" @submit.prevent>
            <div class="perguntas-rapidas" aria-label="Sugestões de perguntas">
                <button
                    v-for="sugestao in perguntasRapidas"
                    :key="sugestao"
                    class="botao-sugestao"
                    :class="{ selecionada: pergunta === sugestao }"
                    type="button"
                    :aria-pressed="pergunta === sugestao"
                    @click="selecionarPergunta(sugestao)"
                >
                    {{ sugestao }}
                    <span class="indicador-sugestao" aria-hidden="true" />
                </button>
            </div>

            <label class="sr-only" for="pergunta-anunciante">Sua pergunta</label>
            <div class="entrada-e-enviar">
                <div class="entrada-pergunta">
                    <textarea
                        id="pergunta-anunciante"
                        v-model="pergunta"
                        name="pergunta"
                        rows="2"
                        :maxlength="limiteCaracteres"
                        placeholder="Escreva sua pergunta..."
                    />
                    <span class="contador-caracteres" aria-live="polite">
                        {{ quantidadeCaracteres }}/{{ limiteCaracteres }}
                    </span>
                </div>
                <button class="botao-perguntar" type="submit">
                    <Send aria-hidden="true" />
                    <span>Enviar</span>
                </button>
            </div>
        </form>
        <p class="nota-demo">Demonstração visual: sua pergunta não será enviada.</p>
    </section>
</template>

<style scoped>
.secao-pergunta {
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
}

.cabecalho-pergunta {
    display: flex;
    flex-direction: column;
    gap: var(--padding-3xs);
}

.cabecalho-pergunta h2 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}

.cabecalho-pergunta p {
    margin: 0;
    color: var(--color-neutral-600);
    font-size: var(--text-base);
}

.perguntas-rapidas {
    display: flex;
    flex-wrap: wrap;
    gap: var(--padding-xs);
    margin: var(--padding-sm) 0;
}

.botao-sugestao {
    display: inline-flex;
    min-height: 42px;
    align-items: center;
    gap: var(--padding-xs);
    padding: var(--padding-xs) var(--padding-sm);
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--radius-full);
    background: var(--color-neutral-100);
    color: var(--color-neutral-600);
    font: inherit;
    font-size: var(--text-sm);
    cursor: pointer;
    transition: border-color var(--transition-fast), background-color var(--transition-fast), color var(--transition-fast);
}

.botao-sugestao:hover {
    border-color: var(--color-accent-400);
    color: var(--color-accent-600);
}

.botao-sugestao.selecionada {
    border-color: var(--color-accent-500);
    background: var(--color-accent-500);
    color: var(--color-neutral-0);
}

.botao-sugestao:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 2px;
}

.indicador-sugestao {
    width: 10px;
    height: 10px;
    flex: 0 0 auto;
    border-radius: var(--radius-full);
    background: var(--color-neutral-300);
}

.botao-sugestao.selecionada .indicador-sugestao {
    background: var(--color-neutral-0);
}

.form-pergunta {
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
}

.entrada-e-enviar {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--padding-sm);
}

.entrada-pergunta {
    position: relative;
    min-width: 0;
}

.entrada-pergunta textarea {
    box-sizing: border-box;
    width: 100%;
    min-height: 72px;
    resize: vertical;
    padding: var(--padding-sm) var(--padding-lg) var(--padding-lg);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    outline: none;
    background: var(--color-neutral-0);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-base);
    line-height: var(--leading-normal);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.entrada-pergunta textarea::placeholder {
    color: var(--color-neutral-500);
}

.entrada-pergunta textarea:focus {
    border-color: var(--color-accent-500);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.contador-caracteres {
    position: absolute;
    right: var(--padding-sm);
    bottom: var(--padding-2xs);
    color: var(--text-muted);
    font-size: var(--text-sm);
}

.botao-perguntar {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    gap: var(--padding-xs);
    padding: var(--padding-sm) var(--padding-xl);
    border: 0;
    border-radius: var(--radius-md);
    background: var(--color-accent-500);
    color: var(--color-neutral-0);
    font: inherit;
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: background-color var(--transition-fast), box-shadow var(--transition-fast);
}

.botao-perguntar:hover {
    background: var(--color-accent-600);
    box-shadow: 0 4px 12px var(--shadow-accent-sm);
}

.botao-perguntar:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 3px;
}

.botao-perguntar svg {
    width: 18px;
    height: 18px;
}

.nota-demo {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--text-xs);
    line-height: var(--leading-normal);
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
}

@media (max-width: 640px) {
    .entrada-e-enviar {
        grid-template-columns: minmax(0, 1fr);
    }

    .botao-perguntar {
        justify-self: end;
    }

    .entrada-pergunta textarea {
        min-height: 92px;
    }

}
</style>
