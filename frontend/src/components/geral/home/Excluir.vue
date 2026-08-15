<script setup lang="ts">
import { ref, reactive } from 'vue';

// Estados do Filtro
const tipoTransacao = ref<'comprar' | 'alugar'>('comprar');
const buscaLocalidade = ref('');

const filtro = reactive({
  tipoImovel: 'Apartamento',
  faixaPreco: '',
  quartos: '2+'
});

// Opções rápidas estilo Apple Pills
const tiposImoveis = ['Apartamento', 'Casa', 'Cobertura', 'Studio', 'Terreno'];
const opcoesQuartos = ['1+', '2+', '3+', '4+'];

const executarBusca = () => {
  const payload = {
    transacao: tipoTransacao.value,
    localizacao: buscaLocalidade.value,
    ...filtro
  };
  console.log('Buscando imóveis com os parâmetros:', payload);
};
</script>

<template>
  <div class="filter-wrapper">
    <div class="segmented-control">
      <button 
        type="button"
        :class="['segmented-item', { active: tipoTransacao === 'comprar' }]"
        @click="tipoTransacao = 'comprar'"
      >
        Comprar
      </button>
      <button 
        type="button"
        :class="['segmented-item', { active: tipoTransacao === 'alugar' }]"
        @click="tipoTransacao = 'alugar'"
      >
        Alugar
      </button>
    </div>

    <div class="filter-card">
      <div class="filter-grid">
        
        <div class="filter-field field-large">
          <label class="field-label">Onde você quer morar?</label>
          <div class="input-with-icon">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              v-model="buscaLocalidade"
              type="text" 
              placeholder="Bairro, cidade ou condomínio..."
              class="apple-input"
            />
          </div>
        </div>

        <div class="filter-field">
          <label class="field-label">Tipo de Imóvel</label>
          <select v-model="filtro.tipoImovel" class="apple-select">
            <option v-for="tipo in tiposImoveis" :key="tipo" :value="tipo">
              {{ tipo }}
            </option>
          </select>
        </div>

        <div class="filter-field">
          <label class="field-label">Dormitórios</label>
          <div class="rooms-pill-group">
            <button 
              v-for="qnt in opcoesQuartos" 
              :key="qnt"
              type="button"
              :class="['pill-btn', { active: filtro.quartos === qnt }]"
              @click="filtro.quartos = qnt"
            >
              {{ qnt }}
            </button>
          </div>
        </div>

        <div class="filter-action">
          <button @click="executarBusca" class="btn-apple-primary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Buscar</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* Container com margem e centralização para sobrepor a Hero Image */
.filter-wrapper {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

/* ==========================================================================
   1. SEGMENTED CONTROL (SWITCH COMPRAR/ALUGAR TIPO iOS)
   ========================================================================== */
.segmented-control {
  display: inline-flex;
  padding: 4px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: var(--radius-full);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: var(--shadow-sm);
  margin-top: 300px;
}

.segmented-item {
  border: none;
  background: transparent;
  padding: 0.5rem 1.25rem;
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-neutral-700);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.segmented-item.active {
  background: var(--color-neutral-0);
  color: var(--color-neutral-900);
  font-weight: var(--font-semibold);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* ==========================================================================
   2. FILTER CARD (GLASSMORPHISM APPLE)
   ========================================================================== */
.filter-card {
  width: 100%;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: var(--radius-xl);
  padding: 1.25rem 1.5rem;
  box-shadow: 0 20px 40px -15px rgba(31, 23, 26, 0.07);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.filter-card:hover {
  box-shadow: 0 25px 50px -12px rgba(31, 23, 26, 0.12);
}

.filter-grid {
  display: grid;
  grid-template-columns: 2.2fr 1.2fr 1.2fr auto;
  gap: 1.25rem;
  align-items: center;
}

/* ==========================================================================
   3. INPUTS E CAMPOS DE FORMULÁRIO
   ========================================================================== */
.filter-field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.field-label {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-left: 0.25rem;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 0.875rem;
  width: 18px;
  height: 18px;
  color: var(--color-neutral-500);
  pointer-events: none;
}

.apple-input,
.apple-select {
  width: 100%;
  height: 46px;
  background: rgba(245, 242, 243, 0.6);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  padding: 0 1rem;
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: var(--color-neutral-900);
  outline: none;
  transition: all var(--transition-fast);
}

.apple-input {
  padding-left: 2.5rem;
}

.apple-input::placeholder {
  color: var(--color-neutral-500);
}

.apple-input:focus,
.apple-select:focus {
  background: var(--color-neutral-0);
  border-color: var(--color-neutral-300);
  box-shadow: 0 0 0 4px rgba(128, 15, 47, 0.08); /* Sutil brilho no tom Burgundy */
}

.apple-select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%20786c72' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.25rem;
}

/* ==========================================================================
   4. PILLS DE QUARTOS (TIPO WATCH OS / IOS SELECTION)
   ========================================================================== */
.rooms-pill-group {
  display: flex;
  gap: 0.25rem;
  background: rgba(245, 242, 243, 0.6);
  padding: 3px;
  border-radius: var(--radius-md);
  height: 46px;
  align-items: center;
}

.pill-btn {
  flex: 1;
  height: 100%;
  border: none;
  background: transparent;
  border-radius: calc(var(--radius-md) - 3px);
  font-family: var(--font-primary);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  color: var(--color-neutral-700);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.pill-btn.active {
  background: var(--color-neutral-0);
  color: var(--color-accent-500);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* ==========================================================================
   5. BOTÃO PRINCIPAL DE BUSCA (BURGUNDY CTA)
   ========================================================================== */
.filter-action {
  display: flex;
  align-items: flex-end;
}

.btn-apple-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 46px;
  padding: 0 1.75rem;
  background-color: var(--color-accent-500);
  color: var(--color-neutral-0);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-primary);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(128, 15, 47, 0.25);
  transition: all var(--transition-fast);
}

.btn-apple-primary:hover {
  background-color: var(--color-accent-600);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(128, 15, 47, 0.35);
}

.btn-apple-primary:active {
  transform: scale(0.97);
}

.btn-icon {
  width: 16px;
  height: 16px;
}

/* ==========================================================================
   6. RESPONSIVIDADE (MOBILE & TABLET)
   ========================================================================== */
@media (max-width: 900px) {
  .filter-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .filter-action {
    margin-top: 0.5rem;
  }

  .btn-apple-primary {
    width: 100%;
  }
}
</style>