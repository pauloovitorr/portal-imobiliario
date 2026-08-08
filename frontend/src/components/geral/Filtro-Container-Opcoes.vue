<script setup lang="ts">

</script>


<template>
    <div class="container-opcoes">
        <form action="" method="post">
            <div class="form-group tp-imovel">
                <label for="tipo-imovel">Tipo de Imóvel</label>
                <select name="tipo-imovel" id="tipo-imovel">
                    <option value="">Apartamento</option>
                    <option value="">Casa</option>
                    <option value="">Sala</option>
                </select>
            </div>

            <div class="form-group bairro">
                <label for="tipo-imovel">Cidade</label>
                <select name="tipo-imovel" id="tipo-imovel">
                    <option value="">Apartamento</option>
                    <option value="">Casa</option>
                    <option value="">Sala</option>
                </select>
            </div>


            <div class="form-group cidade">
                <label for="tipo-imovel">Bairro</label>
                <select name="tipo-imovel" id="tipo-imovel">
                    <option value="">Apartamento</option>
                    <option value="">Casa</option>
                    <option value="">Sala</option>
                </select>
            </div>

            <div class="form-group-btn">
                <button class="btn-apple-primary"><span>Buscar</span></button>
            </div>

        </form>
    </div>
</template>


<style scoped>
.container-opcoes {
    width: 100%;
    min-height: 60px;
    background: rgba(255, 255, 255, 0.75);
    padding: var(--padding-card);
    border-radius: var(--radius-xl);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.8);


    box-shadow: var(--shadow-sm);
    transition: transform var(--transition-normal);
    display: flex;
    align-items: center;

}

.container-opcoes form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-group {
    height: 60px;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
}

.form-group label {
    font-size: var(--text-xs);
    font-weight: var(--font-semibold);
    margin-bottom: 4px;
    line-height: .9;
}

.form-group select {
    height: 46px;
    padding: var(--padding-sm);
    border-radius: 4px;
    border: 1px solid var(--color-neutral-300);
    font-size: var(--text-sm);
    font-family: var(--font-primary);
    border-radius: var(--radius-md);
}

.form-group.tp-imovel {
    width: 20%;
}

.form-group.bairro,
.form-group.cidade {
    width: 30%;
}

.form-group-btn {
    /* width: 20%; */
    height: 60px;
    display: flex;
    align-items: end;
    /* border: 1px solid; */
}

.btn-apple-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    gap: 0.5rem;
    height: 46px;
    padding: 0 1.75rem;
    background-color: var(--color-accent-500);
    color: var(--color-neutral-0);
    border: none;
    border-radius: var(--radius-md);
    font-family: var(--font-primary);
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(128, 15, 47, 0.25);
    transition: all var(--transition-fast);
}

.btn-apple-primary:hover {
    background-color: var(--color-accent-600);
    box-shadow: var(--shadow-md);
}


@media (max-width:768px) {
    .container-opcoes form {
        flex-direction: column;
        gap: 12px;
    }

    .form-group.tp-imovel,
    .form-group.bairro,
    .form-group.cidade,
    .form-group-btn,
    .btn-apple-primary {
        width: 100%;
    }

}
</style>
