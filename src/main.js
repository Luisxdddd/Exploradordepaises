import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { ModuleRegistry } from 'ag-grid-community'
import { ClientSideRowModelModule } from 'ag-grid-community'
import {CsvExportModule} from 'ag-grid-community'

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
 
  CsvExportModule,
]);

createApp(App).mount('#app')
