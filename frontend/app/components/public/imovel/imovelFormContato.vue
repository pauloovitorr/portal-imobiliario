<script setup lang="ts">
import { Mail } from '@lucide/vue'
</script>


<template>
    <section class="card-contato" aria-labelledby="titulo-contato">
        <h2 id="titulo-contato" class="titulo-contato">Fale com o anunciante</h2>

        <form class="form-contato" @submit.prevent>
            <div class="campo">
                <label for="contato-nome">Nome</label>
                <input
                    id="contato-nome"
                    name="nome"
                    type="text"
                    autocomplete="name"
                    placeholder="Seu nome"
                    required
                >
            </div>

            <div class="campo">
                <label for="contato-email">E-mail</label>
                <input
                    id="contato-email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="seu@email.com"
                    required
                >
            </div>

            <div class="campo">
                <label for="contato-telefone">Telefone</label>
                <input
                    id="contato-telefone"
                    name="telefone"
                    type="tel"
                    autocomplete="tel"
                    placeholder="(00) 00000-0000"
                    required
                >
            </div>

            <div class="campo">
                <label for="contato-mensagem">Mensagem</label>
                <textarea
                    id="contato-mensagem"
                    name="mensagem"
                    rows="4"
                    maxlength="500"
                    required
                >Olá, gostaria de receber mais informações sobre este imóvel.</textarea>
                <span class="dica-mensagem">Deixe uma mensagem para o anunciante sobre este imóvel.</span>
            </div>

            <button class="botao-enviar" type="submit">
                <span>Enviar mensagem</span>
                <Mail aria-hidden="true" />
            </button>

            <p class="aviso-privacidade">
                Seus dados de contato são necessários para o anunciante responder à solicitação.
            </p>
        </form>
    </section>
</template>


<style scoped>
.card-contato {
    box-sizing: border-box;
    width: 100%;
    padding: var(--padding-lg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-surface);
    box-shadow: var(--shadow-sm);
}

.titulo-contato {
    margin: 0 0 var(--padding-md);
    color: var(--text-main);
    font-size: var(--text-xl);
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.form-contato {
    display: flex;
    flex-direction: column;
    gap: var(--padding-sm);
}

.campo {
    display: flex;
    min-width: 0;
    flex-direction: column;
    gap: var(--padding-3xs);
}

.campo label {
    color: var(--color-neutral-700);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
}

.campo input,
.campo textarea {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding: var(--padding-sm);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    outline: none;
    background: var(--color-neutral-0);
    color: var(--text-main);
    font: inherit;
    font-size: var(--text-sm);
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.campo input {
    min-height: 46px;
}

.campo textarea {
    min-height: 112px;
    resize: vertical;
    line-height: var(--leading-normal);
}

.campo input::placeholder {
    color: var(--color-neutral-500);
    opacity: 0.8;
}

.campo input:focus,
.campo textarea:focus {
    border-color: var(--color-accent-500);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.dica-mensagem {
    color: var(--text-muted);
    font-size: var(--text-xs);
}

.botao-enviar {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: var(--padding-xs);
    margin-top: var(--padding-2xs);
    padding: var(--padding-sm) var(--padding-lg);
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

.botao-enviar:hover {
    background: var(--color-accent-600);
    box-shadow: 0 4px 12px var(--shadow-accent-sm);
}

.botao-enviar:focus-visible {
    outline: 2px solid var(--color-accent-500);
    outline-offset: 3px;
}

.botao-enviar svg {
    width: 18px;
    height: 18px;
}

.aviso-privacidade {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--text-xs);
    line-height: var(--leading-normal);
}

.aviso-privacidade a {
    color: var(--color-neutral-700);
    font-weight: var(--font-medium);
    text-decoration: underline;
    text-underline-offset: 2px;
}

.aviso-privacidade a:hover {
    color: var(--color-accent-600);
}

@media (max-width: 640px) {
    .card-contato {
        padding: var(--padding-md);
    }
}
</style>
