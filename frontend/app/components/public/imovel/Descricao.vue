<script setup lang="ts">
const tituloDescricao = ref('Apartamento para aluguel em São Paulo / SP, Vila Nair, 2 dormitórios, 1 banheiro');
const textoDescricao = ref('Ótimo sobrado semi-mobiliado, localizado no Pilarzinho, composto por 3 quartos sendo 1 suíte máster com closet, sala para 2 ambientes, móveis planejados na cozinha, lavabo, 2 banheiros sociais, área de serviço, sacada, área externa com churrasqueira á carvão e forno á lenha.<br>Ático no terceiro piso de 40 m²<br>Móveis planejados nos quartos e banheiros, 2 vagas de garagens cobertas, jardim na frente com gramado.<br>*Piso laminado de madeira nos quartos e sala, piso em cerâmica nas áreas frias como cozinha e banheiros.<br>Conta com aquecimento a gás para chuveiros e torneiras<br>OBS: Sobrado encontra-se alugado no momento, gerando renda mensal.<br>sobrado com 166m² porem averbado apenas 138,52m²<br><br>Proximidades: Academia, banco, escola, farmácia, hospital Nossa senhora do Pillar, shopping, supermercado Condor, padaria, terminal de ônibus, (2 linhas: Cabral e Campina do Siqueira a 1 quadra, Bracatinga e Vila Nori) próximo aos Parques São Lourenço, Tanguá, Tingui, Opera de Arame, Universidade do Meio Ambiente,  Pedreira Paulo Leminski e ás rádios e TVs de Curitiba, RIC, Transamérica, Band TV, laboratórios de análises clínicas e 3 acessos ao centro,12 km do centro.<br><br>Os valores mencionados podem ser alterados sem prévio aviso.<br>REF.2401-L7 - 17/10/2026');
</script>




<template>
    <section class="container-descricao">
        <PublicImovelTextoDescricao :titulo-descricao="tituloDescricao" :texto-descricao="textoDescricao" />
    </section>
</template>


<style scoped>
.cabecalho-descricao h2 {
    color: var(--color-neutral-900);
    font-size: var(--text-xl);
    font-weight: var(--font-medium);
    line-height: var(--leading-tight);
}
</style>
