<script setup lang="ts">
getTestApiUrl();
getTestBackendUrl();
</script>

<template>
  <div class="home-page">
    <PublicHomeHero />

    <div class="imoveis">
      <PublicHomeExplorarCapitais />
      <PublicHomeImoveisDestaquesHome />
      <PublicHomeCategorias />
    </div>

    <div class="empreendimentos">
      <PublicHomeBannerEmpreendimento />
      <PublicHomeImoveisLancamentoHome />
      <PublicHomeBannerLancamento />
    </div>

    <!-- <PublicHomeCallAction /> -->
    <div class="estatisticas">
      <PublicHomeEstatisticas />
      <PublicHomeNoticias class="noticias-contiguas" />
      <PublicHomePesquisas />
    </div>
  </div>
</template>

<style scoped>
.home-page {
  --espaco-entre-blocos: 64px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.imoveis {
  display: flex;
  flex-direction: column;
  gap: var(--padding-2xl);
  margin-top: var(--padding-2xl);
}

.empreendimentos {
  display: flex;
  flex-direction: column;
  gap: var(--padding-2xl);
  margin-top: var(--espaco-entre-blocos);
}

.estatisticas {
  display: flex;
  flex-direction: column;
  margin-top: var(--espaco-entre-blocos);
}

@media (max-width: 768px) {
  .home-page {
    --espaco-entre-blocos: var(--padding-3xl);
  }

  .empreendimentos {
    gap: var(--padding-xl);
  }
}
</style>

<style>
</style>
