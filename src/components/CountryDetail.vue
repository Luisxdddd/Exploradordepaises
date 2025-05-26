<template>
  <div v-if="country" class="bg-white rounded-lg shadow-md p-6">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold">{{ country.name.common }}</h2>
      <button
        @click="$emit('close')"
        class="text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Bandera -->
      <div class="col-span-2">
        <img
          :src="country.flags.svg"
          :alt="country.flags.alt || `Bandera de ${country.name.common}`"
          class="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      <!-- Información general -->
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Información General</h3>
          <p><span class="font-medium">Capital:</span> {{ country.capital?.[0] || 'N/A' }}</p>
          <p><span class="font-medium">Región:</span> {{ country.region }}</p>
          <p><span class="font-medium">Subregión:</span> {{ country.subregion || 'N/A' }}</p>
          <p><span class="font-medium">Población:</span> {{ country.population.toLocaleString() }}</p>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">Idiomas</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(lang, code) in country.languages"
              :key="code"
              class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {{ lang }}
            </span>
          </div>
        </div>
      </div>

      <!-- Información adicional -->
      <div class="space-y-4">
        <div>
          <h3 class="text-lg font-semibold mb-2">Monedas</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(currency, code) in country.currencies"
              :key="code"
              class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
            >
              {{ currency.name }} ({{ currency.symbol }})
            </span>
          </div>
        </div>

        <div>
          <h3 class="text-lg font-semibold mb-2">Información Geográfica</h3>
          <p><span class="font-medium">Área:</span> {{ country.area.toLocaleString() }} km²</p>
          <p><span class="font-medium">Fronteras:</span></p>
          <div class="flex flex-wrap gap-2 mt-1">
            <span
              v-for="border in country.borders"
              :key="border"
              class="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
            >
              {{ border }}
            </span>
            <span v-if="!country.borders?.length" class="text-gray-500">Sin fronteras</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
    Selecciona un país para ver sus detalles
  </div>
</template>

<script setup>
const props = defineProps({
  country: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script> 