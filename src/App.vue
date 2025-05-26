<script setup>
import { AgGridVue } from 'ag-grid-vue3'

import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
const columnDefs = [
  { field: 'name', sortable: true, filter: true },
  { field: 'age', sortable: true, filter: true }
];

const rowData = [
  { name: 'Juan', age: 25 },
  { name: 'Ana', age: 30 },
  { name: 'Luis', age: 41 }
];

</script>

<template>
<div> <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1></div>
    <AgGridVue
    class="ag-theme-quartz"
    :rowData="rowData"
    :columnDefs="columnDefs"
    style="height: 400px; width: 100%;"
  />
</template>

<style scoped>
</style>
