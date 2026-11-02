<script setup lang="ts">
definePageMeta({
    layout: false,
});
</script>

<template>
    <main class="login-page">
        <div class="login-layout">
            <aside class="login-image">
                <NuxtImg
                    src="/login.png"
                    alt="Equipe do Meu Lugar reunida em um evento"
                    format="webp"
                    loading="lazy"
                    class="login-image-content"
                />
            </aside>

            <section class="login-panel" aria-labelledby="login-title">
                <div class="login-content">
                    <header class="login-heading">
                        <span class="login-eyebrow">Acesse sua conta</span>
                        <h1 id="login-title">Bem-vindo de volta!</h1>
                        <p>Entre para continuar sua jornada no Meu Lugar.</p>
                    </header>

                    <form class="login-form">
                        <div class="login-field">
                            <label for="login-email">E-mail</label>
                            <input
                                id="login-email"
                                name="email"
                                type="email"
                                placeholder="seuemail@exemplo.com"
                                autocomplete="email"
                                required
                            >
                        </div>

                        <div class="login-field">
                            <label for="login-senha">Senha</label>
                            <input
                                id="login-senha"
                                name="password"
                                type="password"
                                placeholder="Digite sua senha"
                                autocomplete="current-password"
                                required
                            >
                        </div>

                        <button class="login-submit" type="button">Entrar</button>
                    </form>

                    <p class="login-switch">
                        Não tem conta?
                        <NuxtLink to="/anunciar">Criar sua conta</NuxtLink>
                    </p>
                    <NuxtLink class="login-portal-link" to="/">Acessar portal</NuxtLink>
                </div>
            </section>
        </div>
    </main>
</template>

<style scoped>
.login-page {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: var(--bg-surface);
}

.login-layout {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 65% 35%;
    grid-template-areas: "image form";
    align-items: stretch;
}

.login-panel {
    display: flex;
    grid-area: form;
    align-items: center;
    justify-content: center;
    padding: clamp(var(--padding-lg), 4vw, var(--padding-2xl));
    background: var(--bg-surface);
}

.login-content {
    width: 100%;
    max-width: 520px;
}

.login-heading {
    margin-bottom: var(--padding-xl);
}

.login-eyebrow {
    display: inline-block;
    margin-bottom: var(--padding-xs);
    color: var(--color-accent-500);
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
}

.login-heading h1 {
    color: var(--text-main);
    font-family: var(--font-secondary);
    font-size: clamp(var(--text-2xl), 3vw, var(--text-3xl));
    font-weight: var(--font-semibold);
    line-height: var(--leading-tight);
}

.login-heading p {
    margin-top: var(--padding-xs);
    color: var(--text-muted);
    line-height: var(--leading-normal);
}

.login-form {
    display: grid;
    gap: 28px;
}

.login-field {
    display: grid;
    gap: var(--padding-2xs);
}

.login-field label {
    color: var(--color-neutral-700);
    font-size: var(--text-sm);
    font-weight: var(--font-medium);
}

.login-field input {
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

.login-field input::placeholder {
    color: var(--color-neutral-400);
}

.login-field input:focus-visible {
    border-color: var(--color-accent-500);
    box-shadow: 0 0 0 3px var(--color-focus-ring);
}

.login-submit {
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

.login-submit:hover {
    background: var(--color-accent-600);
}

.login-submit:active {
    transform: scale(0.99);
}

.login-submit:focus-visible,
.login-switch a:focus-visible,
.login-portal-link:focus-visible {
    outline: 3px solid var(--color-focus-ring);
    outline-offset: 3px;
}

.login-switch {
    margin-top: var(--padding-xl);
    color: var(--text-muted);
    font-size: var(--text-sm);
    text-align: center;
}

.login-switch a {
    margin-left: var(--padding-3xs);
    color: var(--color-accent-500);
    font-weight: var(--font-semibold);
    text-decoration: none;
}

.login-switch a:hover {
    color: var(--color-accent-600);
    text-decoration: underline;
}

.login-portal-link {
    display: block;
    margin-top: var(--padding-xs);
    color: var(--color-accent-500);
    font-size: var(--text-sm);
    text-align: center;
    text-decoration: none;
}

.login-portal-link:hover {
    color: var(--color-accent-600);
    text-decoration: underline;
}

.login-image {
    position: relative;
    grid-area: image;
    min-width: 0;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
    background: var(--color-neutral-200);
}

.login-image-content {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 760px) {
    .login-layout {
        grid-template-columns: minmax(0, 1fr);
        grid-template-areas: "form";
        align-items: center;
    }

    .login-panel {
        max-width: 520px;
        padding: var(--padding-xl);
    }

    .login-image {
        display: none;
    }
}

@media (max-height: 760px) {
    .login-panel {
        padding-top: var(--padding-xs);
        padding-bottom: var(--padding-xs);
    }

    .login-heading {
        margin-bottom: var(--padding-sm);
    }

    .login-form {
        gap: var(--padding-xs);
    }

    .login-field input {
        min-height: 40px;
    }

    .login-field {
        gap: var(--padding-3xs);
    }

    .login-switch {
        margin-top: var(--padding-sm);
    }
}
</style>
