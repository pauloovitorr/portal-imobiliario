<script setup lang="ts">
definePageMeta({
    layout: false,
});
</script>

<template>
    <main class="announce-page">
        <div class="announce-layout">
            <section class="announce-panel" aria-labelledby="announce-title">
                <div class="announce-content">
                    <header class="announce-heading">
                        <span class="announce-eyebrow">Crie sua conta</span>
                        <h1 id="announce-title">Seu próximo anúncio começa aqui</h1>
                        <p>Preencha seus dados para começar a anunciar no Meu Lugar.</p>
                    </header>

                    <form class="announce-form">
                        <div class="announce-field">
                            <label for="cadastro-nome">Nome completo</label>
                            <input
                                id="cadastro-nome"
                                name="name"
                                type="text"
                                placeholder="Digite seu nome completo"
                                autocomplete="name"
                                required
                            >
                        </div>

                        <div class="announce-field">
                            <label for="cadastro-email">E-mail</label>
                            <input
                                id="cadastro-email"
                                name="email"
                                type="email"
                                placeholder="seuemail@exemplo.com"
                                autocomplete="email"
                                required
                            >
                        </div>

                        <div class="announce-field">
                            <label for="cadastro-telefone">Telefone</label>
                            <input
                                id="cadastro-telefone"
                                name="telephone"
                                type="tel"
                                placeholder="(00) 00000-0000"
                                autocomplete="tel"
                                required
                            >
                        </div>

                        <div class="announce-field">
                            <label for="cadastro-senha">Senha</label>
                            <input
                                id="cadastro-senha"
                                name="password"
                                type="password"
                                placeholder="Crie uma senha"
                                autocomplete="new-password"
                                minlength="8"
                                pattern="(?=.*[A-Za-z])(?=.*[0-9]).{8,}"
                                title="Use no mínimo 8 caracteres, incluindo letras e números."
                                aria-describedby="cadastro-senha-ajuda"
                                required
                            >
                            <small id="cadastro-senha-ajuda">
                                Use no mínimo 8 caracteres, incluindo letras e números.
                            </small>
                        </div>

                        <button class="announce-submit" type="button">Criar conta</button>
                    </form>

                    <p class="announce-switch">
                        Já tem uma conta?
                        <NuxtLink to="/entrar">Entrar</NuxtLink>
                    </p>
                    <NuxtLink class="announce-portal-link" to="/">Acessar portal</NuxtLink>
                </div>
            </section>

            <aside class="announce-image">
                <NuxtImg
                    src="/cadastro.png"
                    alt="Profissionais do mercado imobiliário reunidos em um evento"
                    format="webp"
                    loading="lazy"
                    class="announce-image-content"
                />
            </aside>
        </div>
    </main>
</template>

<style scoped>
.announce-page {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: var(--bg-surface);
}

.announce-layout {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 35% 65%;
    grid-template-areas: "form image";
}

.announce-panel {
    display: flex;
    grid-area: form;
    align-items: center;
    justify-content: center;
    padding: clamp(var(--padding-lg), 4vw, var(--padding-2xl));
    background: var(--bg-surface);
}

.announce-content {
    width: 100%;
    max-width: 520px;
}

.announce-heading {
    margin-bottom: var(--padding-xl);
}

.announce-eyebrow {
    display: inline-block;
    margin-bottom: var(--padding-xs);
    color: var(--color-accent-500);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
}

.announce-heading h1 {
    color: var(--text-main);
    font-family: var(--font-secondary);
    font-size: clamp(var(--text-2xl), 3vw, var(--text-3xl));
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.announce-heading p {
    margin-top: var(--padding-xs);
    color: var(--text-muted);
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
}

.announce-form {
    display: grid;
    gap: 28px;
}

.announce-field {
    display: grid;
    gap: var(--padding-2xs);
}

.announce-field label {
    color: var(--color-neutral-700);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
}

.announce-field input {
    width: 100%;
    min-height: 48px;
    padding: 0 var(--padding-md);
    border: 1px solid var(--color-neutral-300);
    border-radius: var(--radius-md);
    outline: none;
    background: var(--bg-surface);
    color: var(--text-main);
    font: inherit;
    transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.announce-field input::placeholder {
    color: var(--color-neutral-400);
}

.announce-field input:focus-visible {
    border-color: var(--color-accent-500);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.announce-field small {
    color: var(--text-muted);
    font-size: var(--text-xs);
    line-height: var(--leading-normal);
}

.announce-submit {
    min-height: 48px;
    margin-top: var(--padding-xs);
    padding: var(--padding-sm) var(--padding-lg);
    border: 0;
    border-radius: var(--radius-md);
    background: var(--color-accent-500);
    color: var(--color-neutral-0);
    font: inherit;
    font-weight: var(--font-semibold);
    cursor: pointer;
    transition: background-color var(--transition-fast), transform var(--transition-fast);
}

.announce-submit:hover {
    background: var(--color-accent-600);
}

.announce-submit:active {
    transform: scale(0.99);
}

.announce-submit:focus-visible,
.announce-switch a:focus-visible,
.announce-portal-link:focus-visible {
    outline: 3px solid var(--color-focus-ring);
    outline-offset: 3px;
}

.announce-switch {
    margin-top: var(--padding-xl);
    color: var(--text-muted);
    font-size: var(--text-sm);
    text-align: center;
}

.announce-switch a {
    margin-left: var(--padding-3xs);
    color: var(--color-accent-500);
    font-weight: var(--font-semibold);
    text-decoration: none;
}

.announce-switch a:hover {
    color: var(--color-accent-600);
    text-decoration: underline;
}

.announce-portal-link {
    display: block;
    margin-top: var(--padding-xs);
    color: var(--color-accent-500);
    font-size: var(--text-sm);
    text-align: center;
    text-decoration: none;
}

.announce-portal-link:hover {
    color: var(--color-accent-600);
    text-decoration: underline;
}

.announce-image {
    position: relative;
    grid-area: image;
    min-width: 0;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: var(--color-neutral-200);
}

.announce-image-content {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 760px) {
    .announce-page {
        height: auto;
        min-height: 100vh;
        min-height: 100dvh;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .announce-layout {
        height: auto;
        min-height: 100vh;
        min-height: 100dvh;
        grid-template-columns: minmax(0, 1fr);
        grid-template-areas: "form";
    }

    .announce-panel {
        padding: var(--padding-xl);
    }

    .announce-image {
        display: none;
    }
}

@media (max-height: 760px) {
    .announce-panel {
        padding-top: var(--padding-xs);
        padding-bottom: var(--padding-xs);
    }

    .announce-heading {
        margin-bottom: var(--padding-sm);
    }

    .announce-form {
        gap: var(--padding-xs);
    }

    .announce-field input {
        min-height: 40px;
    }

    .announce-field {
        gap: var(--padding-3xs);
    }

    .announce-switch {
        margin-top: var(--padding-sm);
    }
}
</style>
