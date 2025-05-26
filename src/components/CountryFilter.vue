<template>
  <div class="mb-6 p-4 bg-white rounded-lg shadow-md">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Búsqueda por nombre -->
      <div class="relative">
        <input
          type="text"
          v-model="searchQuery"
          @input="emitFilters"
          placeholder="Buscar país..."
          class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span class="absolute right-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      <!-- Filtro por región -->
      <select
        v-model="selectedRegion"
        @change="emitFilters"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">Todas las regiones</option>
        <option v-for="region in regions" :key="region" :value="region">
          {{ region }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const searchQuery = ref('')
const selectedRegion = ref('')
const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

const emit = defineEmits(['filter-change'])

const emitFilters = () => {
  emit('filter-change', {
    search: searchQuery.value,
    region: selectedRegion.value
  })
}

// Emitir valores iniciales
watch([searchQuery, selectedRegion], () => {
  emitFilters()
}, { immediate: true })
</script> 