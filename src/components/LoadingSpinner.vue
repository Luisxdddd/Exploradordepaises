<template>
  <div class="flex items-center justify-center p-4">
    <div class="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    <span class="ml-3 text-gray-600">{{ message || 'Cargando...' }}</span>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: ''
  }
})
</script> 