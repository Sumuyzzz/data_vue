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
  PieChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  PieChart ,
  GridComponent,
  TooltipComponent,
  LegendComponent
])


const app = createApp(App)

app.component('v-chart', ECharts)
app.mount('#app')