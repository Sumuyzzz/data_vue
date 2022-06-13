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
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
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