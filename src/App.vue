<template>
  <div class="min-h-screen bg-gray-100 p-4 md:p-8">
    <div class="max-w-7xl mx-auto space-y-6">
      <!-- Encabezado -->
      <header class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-800 mb-2">
          Explorador de Países
        </h1>
        <p class="text-gray-600">
          Descubre información detallada sobre países de todo el mundo
        </p>
      </header>

      <!-- Filtros -->
      <CountryFilter @filter-change="handleFilterChange" />

      <!-- Grid y Detalles -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Grid de países -->
        <div class="lg:col-span-2">
          <CountryGrid
            ref="gridRef"
            @row-selected="handleCountrySelect"
          />
        </div>

        <!-- Panel de detalles -->
        <div class="lg:col-span-1">
          <CountryDetail
            :country="selectedCountry"
            @close="selectedCountry = null"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CountryFilter from './components/CountryFilter.vue'
import CountryGrid from './components/CountryGrid.vue'
import CountryDetail from './components/CountryDetail.vue'

const gridRef = ref(null)
const selectedCountry = ref(null)

const handleFilterChange = (filters) => {
  gridRef.value?.applyFilters(filters)
}

const handleCountrySelect = (country) => {
  selectedCountry.value = country
}
</script>

<style scoped>
</style>
