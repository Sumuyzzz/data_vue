import { createApp } from 'vue'
import App from './view/App.vue'
import ECharts from 'vue-echarts'
import { use } from "echarts/core"

import vue3SeamlessScroll from "vue3-seamless-scroll";
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

const app = createApp(App)



use([
  TitleComponent,
  CanvasRenderer,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  GraphicComponent,
  GeoComponent,
  ScatterChart,
  VisualMapComponent,
  EffectScatterChart,
])






app.use(vue3SeamlessScroll);

app.component('v-chart', ECharts)
app.mount('#app')
