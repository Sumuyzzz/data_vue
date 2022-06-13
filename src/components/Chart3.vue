<template>
  <v-chart :option="option"></v-chart>
</template>

<script setup>
import VChart from "vue-echarts"
import { ref } from "vue"
import * as echarts from "echarts"



let data = []


for (let i = 0;i < 5;++i) {
  data.push(Math.round(Math.random() * 200));
}

const option = ref({
  title: {
    text: '接入工厂类型',
    textStyle: {
      color: '#fff'
    },
    left: '60'
  },
  color: ['#7ecef4'],
  grid: {
    left: 40,
    right: 20,
    top: 30,
    bottom: 0,
    containLabel: true
  },
  xAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,0)'
      }
    },
    axisLabel: {
      color: "rgba(255,255,255,0)"
    },
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    axisLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.5)'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(255,255,255,.1)'
      }
    },
    axisLabel: {
      color: "rgba(255,255,255,.5)"
    },
    data: ['锅炉', '环保', '电厂', '供需', '采掘']
  },
  series: [
    {
      name: '2022年',
      type: 'bar',
      barWidth: 20,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            1, 0, 0, 1,
            [
              { offset: 0, color: 'rgba(230,253,139,.7)' },
              { offset: 1, color: 'rgba(41,220,205,.7)' }
            ]
          )
        }
      },
      data: data
    }
  ]
})




const update = () => {

  let data = option.value.series[0].data
  for (var i = 0;i < data.length;++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 2000);
    } else {
      data[i] += Math.round(Math.random() * 200);
    }
  }

}

setInterval(function () {
  update();
}, 500);
</script>

<style lang="scss" scoped>
</style>