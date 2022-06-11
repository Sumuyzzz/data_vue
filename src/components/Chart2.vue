<template>
  <v-chart :option="option" :autoresize="true" ref="pie"></v-chart>
</template>

<script setup>
import { ref,onMounted } from "vue";
import VChart from "vue-echarts"


const data = [
  { value: 40, name: '上限' },
  { value: 38, name: '下限' },
  { value: 32, name: '负跳变' },
  { value: 30, name: '正跳变' },
]

const option = ref({
  title: {
    text: '设备在线状态',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    top: 'bottom',
    textStyle: {
      color: '#fff'
    }
  },
  series: [
    {
      type: 'pie',
      radius: [30, 60],
      center: ['50%', '50%'],
      roseType: 'area',

      label: {
        textStyle: {
          color: '#fff'
        },
      },
      data: data,
    }
  ],
  graphic: {
    elements: [
      {
        type: 'group',
        left: 'center',
        top: 'center',
        children: [
          {
            type: 'text',
            id: 'text1',
          },
          {
            type: 'text',
            id: 'text2',
          }
        ]
      }
    ]
  }
})


const pie = ref(null)
onMounted(() => {
  let dataIndex = 0
  setInterval(function () {
    pie.value.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex
    })
    dataIndex = dataIndex >= data.length - 1 ? 0 : (dataIndex + 1)
    pie.value.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex
    })
  }, 1000)
})






</script>

<style lang="scss" scoped>
</style>