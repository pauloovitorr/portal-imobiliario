<script setup lang="ts">
const imoveis = [
    {
        id: 1,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Jardim Paulista',
        localizacao: 'São Paulo/SP',
        area: '68 m²',
        quartos: '2 dorms',
        suites: '1 suíte',
        vagas: '1 vaga',
        preco: 'R$ 631.774',
        imagem: '/imovel.png',
    },
    {
        id: 2,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Vila Formosa',
        localizacao: 'São Paulo/SP',
        area: '54 m²',
        quartos: '2 dorms',
        suites: '1 suíte',
        vagas: '1 vaga',
        preco: 'R$ 352.130',
        imagem: '/imovel.png',
    },
    {
        id: 3,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Bela Vista',
        localizacao: 'São Paulo/SP',
        area: '62 m²',
        quartos: '2 dorms',
        suites: '1 suíte',
        vagas: '1 vaga',
        preco: 'R$ 362.000',
        imagem: '/imovel.png',
    },
    {
        id: 4,
        tipoImovel: 'Apartamento à venda',
        bairro: 'Brooklin',
        localizacao: 'São Paulo/SP',
        area: '74 m²',
        quartos: '3 dorms',
        suites: '1 suíte',
        vagas: '2 vagas',
        preco: 'Consulte preço',
        imagem: '/imovel.png',
    }
]
</script>

<template>
    <section class="secao-similares" aria-labelledby="titulo-similares">
        <div class="cabecalho-similares">
            <div>
                <h2 id="titulo-similares">Imóveis novos similares</h2>
                <p>Outras opções que podem combinar com você.</p>
            </div>
        </div>

        <div class="lista-similares" aria-label="Lista de imóveis similares">
            <PublicHomeCardImovel
                v-for="imovel in imoveis"
                :key="imovel.id"
                compacto
                :tipo-imovel="imovel.tipoImovel"
                :bairro="imovel.bairro"
                :localizacao="imovel.localizacao"
                :area="imovel.area"
                :quartos="imovel.quartos"
                :suites="imovel.suites"
                :vagas="imovel.vagas"
                :preco="imovel.preco"
                :imagem="imovel.imagem"
            />
        </div>
        <p class="nota-demo">Imóveis e informações exibidos para fins de demonstração.</p>
    </section>
</template>

<style scoped>
.secao-similares {
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
    min-width: 0;
}

.cabecalho-similares h2 {
    margin: 0;
    color: var(--text-main);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}

.cabecalho-similares p {
    margin: var(--padding-3xs) 0 0;
    color: var(--text-muted);
    font-size: var(--text-sm);
}

.lista-similares {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--padding-md);
    min-width: 0;
}

.nota-demo {
    margin: 0;
    color: var(--text-muted);
    font-size: var(--text-xs);
}

@media (max-width: 1100px) and (min-width: 641px) {
    .lista-similares {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .lista-similares {
        grid-template-columns: minmax(0, 1fr);
    }
}
</style>
