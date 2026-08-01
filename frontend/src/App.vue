<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, defineAsyncComponent, type Component } from 'vue';
import { useRoute } from 'vue-router';



const route = useRoute();


// Mapeia usando componentes ASSÍNCRONOS (Lazy Loading)
const layouts: Record<string, any> = {
  // O arquivo do layout SÓ SERÁ BAIXADO se essa chave for chamada!
  GeralLayout: defineAsyncComponent(() => import('@/layouts/GeralLayout.vue'))
}

const currentLayout = computed(() => {
  const layoutName = (route.meta.layout as string) || 'GeralLayout'
  return layouts[layoutName]
})
</script>





<template>
  <component :is="currentLayout">
    <RouterView />
  </component>
</template>

<style scoped></style>
