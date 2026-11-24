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
      <PublicHomePesquisas />
      <PublicHomeNoticias class="noticias-contiguas" />
      <PublicHomeEstatisticas />
    </div>
  </div>
</template>

<style scoped>
.home-page {
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
  padding-top: var(--espaco-entre-blocos);
  background-color: var(--bg-surface);
}

@media (max-width: 768px) {
  .empreendimentos {
    gap: var(--padding-xl);
  }
}
</style>

<style>
</style>
