<template>
  <div class="h-[600px] w-full bg-white rounded-lg shadow-md">
    <ag-grid-vue
      class="ag-theme-quartz h-full w-full"
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

const gridApi = ref(null)
const rowData = ref([])

// Definición de columnas
const columnDefs = [
  {
    field: 'flags',
    headerName: 'Bandera',
    width: 100,
    cellRenderer: params => `<img src="${params.value.svg}" alt="bandera" style="width: 30px; height: 20px;">`
  },
  { 
    field: 'name.common',
    headerName: 'País',
    filter: true,
    sortable: true
  },
  { 
    field: 'capital',
    headerName: 'Capital',
    valueGetter: params => params.data.capital?.[0] || 'N/A'
  },
  { 
    field: 'region',
    headerName: 'Región',
    filter: true
  },
  { 
    field: 'population',
    headerName: 'Población',
    filter: 'agNumberColumnFilter',
    valueFormatter: params => params.value.toLocaleString()
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