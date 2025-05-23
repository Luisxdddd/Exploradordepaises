<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>


<script setup>
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-blue-500 text-white p-8 rounded-xl shadow-lg hover:bg-blue-600 transition-colors text-2xl font-bold">
      Hola Tailwind!
    </div>
  </div>
</template>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
