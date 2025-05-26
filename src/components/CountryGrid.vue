<template>
  <div style="height: 600px; width: 100%;" class="bg-white rounded-lg shadow-md">
    <ag-grid-vue
         class="ag-theme-quartz w-full h-full"
      style="width: 100%; height: 100%;"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      @grid-ready="onGridReady"
      @row-clicked="onRowClicked"
      :pagination="true"
      :paginationPageSize="10"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'

import 'ag-grid-community/styles/ag-theme-quartz.min.css';
defineOptions({
  components: {
    'ag-grid-vue': AgGridVue
  }
})
const gridApi = ref(null)
const rowData = ref([])


// Definición de columnas
const columnDefs = [
  {
    headerName: 'Bandera',
    width: 100,
    cellRenderer: params => `<img src="${params.data.flags.svg}" alt="bandera" style="width: 30px; height: 20px;">`
  },
  {
  field: 'nameCommon',
  headerName: 'País',
  filter: true,
  sortable: true,
  valueGetter: params => params.data.name?.common || 'N/A'
},
  { 
    headerName: 'Capital',
    valueGetter: params => params.data.capital?.[0] || 'N/A'
  },
  {
  field: 'region',
  headerName: 'Región',
  filter: true,
  valueGetter: params => params.data.region
},
  { 
    headerName: 'Población',
    filter: 'agNumberColumnFilter',
    valueGetter: params => params.data.population,
    valueFormatter: params => params.value?.toLocaleString()
  }
]

const defaultColDef = {
  flex: 1,
  minWidth: 100,
  sortable: true,
  filter: true,
  resizable: true
}

const emit = defineEmits(['row-selected'])

const onGridReady = params => {
  gridApi.value = params.api
  fetchCountries()
}

const onRowClicked = params => {
  emit('row-selected', params.data)
}

const fetchCountries = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    rowData.value = data
  } catch (error) {
    console.error('Error fetching countries:', error)
  }
}

// Método público para aplicar filtros
const applyFilters = ({ search, region }) => {
  if (!gridApi.value) return

  gridApi.value.setFilterModel({
    'name.common': {
      type: 'contains',
      filter: search
    },
    'region': {
      type: 'equals',
      filter: region
    }
  })
}

defineExpose({ applyFilters })
</script> 