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
    <div class="continuidade-estatisticas-noticias">
      <PublicHomeEstatisticas />
      <PublicHomeNoticias class="noticias-contiguas" />
      <PublicHomePesquisas />
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
  margin-top: 96px;
}

.continuidade-estatisticas-noticias {
  display: flex;
  flex-direction: column;
  margin-top: 96px;
}

.home-page-band {
  margin-block: calc(0px - var(--padding-3xl));
}

@media (max-width: 768px) {
  .empreendimentos {
    gap: var(--padding-xl);
    margin-top: 80px;
  }

  .continuidade-estatisticas-noticias {
    margin-top: 80px;
  }

  .home-page-band {
    margin-block: calc(0px - var(--padding-2xl));
  }
}
</style>
