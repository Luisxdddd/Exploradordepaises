import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ModuleRegistry } from 'ag-grid-community'
import { ClientSideRowModelModule } from 'ag-grid-community'
import { PaginationModule } from 'ag-grid-community';
import { NumberFilterModule } from 'ag-grid-community';
import {
  
  CsvExportModule
} from 'ag-grid-community'

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  PaginationModule,
  NumberFilterModule,
  CsvExportModule
])

createApp(App).mount('#app')
