<template>
  <v-chart :option="option" :autoresize="true" class="chartss"></v-chart>
</template>

<script setup>
import { ref } from "vue";
import VChart from "vue-echarts"


const data = [
  { value: 40, name: '上限' },
  { value: 38, name: '下限' },
  { value: 32, name: '负跳变' },
  { value: 30, name: '正跳变' },
]




const option = ref({
  grid: {
    width: "5%",
    height: "4%"
  },
  title: {
    text: '设备在线状态',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    grid: {
      width: "5%",
      height: "4%"
    },
    top: 'bottom',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [35, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 4,
      },
      label: {
        textStyle: {
          color: '#fff'
        },
      },
      data: data,

    }
  ]
})

</script>

<style lang="scss" scoped>




</style>