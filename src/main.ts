import { createApp } from 'vue'
import App from './view/App.vue'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import './assets/style/normalize.css'

import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  PieChart,
  ScatterChart,
  EffectScatterChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GraphicComponent,
  GeoComponent,
  VisualMapComponent
} from 'echarts/components'

use([
  TitleComponent,
  CanvasRenderer,
  BarChart,
  PieChart ,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  GraphicComponent,
  GeoComponent,
  ScatterChart,
  VisualMapComponent,
  EffectScatterChart
])


const app = createApp(App)

app.component('v-chart', ECharts)
app.mount('#app')