<template>
  <v-chart class="chart" :option="option" :autoresize="true"/>
</template>


<script setup>
import VChart from "vue-echarts";
import { ref } from 'vue';



let data = [
  { value: 50, name: '在线率' },
  { value: 30, name: '离线率' },
]




let option = ref({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['20%', '50%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        position: 'outside',
        color: '#fff'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },

      data:data
      
    }
  ]
})




const randomNumber = () => Math.floor(Math.random()*100)


const updated=()=> {
 option.value.series[0].data.forEach(i=>i.value=randomNumber()) 
}


setInterval(() => {
  updated()
},1000)



</script>

<style lang="scss" scoped>

.chart{
  border: 1px solid white;

}
</style>