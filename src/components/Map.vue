<template>
  <v-chart :option="option"></v-chart>
</template>

<script setup>
import VChart from "vue-echarts"
import chinaMap from "@/assets/geo/china.json"
import {
  registerMap,
} from "echarts/core";
import { ref } from "vue";

import { data, convertData } from "@/components/map/data"

registerMap("china", chinaMap);




const sortData = () => convertData(
  data
    .sort(function (a, b) {
      return b.value - a.value;
    })
    .slice(0, 10)
)


let option = ref({

  title: {
    text: '平台数据分布',
    subtext: '数据仅限参考',
    left: 'center',
    textStyle: {
      color: '#fff',
    },
  },
  tooltip: {
    trigger: 'item',
  },
  visualMap: {
    show: true,
    min: 0,
    max: 100,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'],
    textStyle: {
      color: '#fff',
    },
    calculable: true,
    seriesIndex: [0],
    inRange: {
      color: ['#A5CC82', '#ffc0cb'],
    },
  },
  legend: {
    orient: 'vertical',
    y: 'bottom',
    x: 'right',
    data: ['haidilao'],
    textStyle: {
      color: '#fff',
    },
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false,
      },
    },
    roam: true,
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#111',
      },
      emphasis: {
        areaColor: '#2a333d',
      },
    },
  },
  series: [
    {
      name: '地理位置+数量',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(data),

      symbolSize: function (val) {
        return val[2] / 2;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
        },
        emphasis: {
          show: true,
        },
      },
      itemStyle: {
        normal: {
          color: '#ddb926',
        },
      },
    },
    {
      name: 'Top 10',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      data: sortData(),
      symbolSize: function (val) {
        return val[2] / 3;
      },
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke',
      },
      hoverAnimation: true,
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: true,
        },
      },
      itemStyle: {
        normal: {
          color: '#f4e925',
          shadowBlur: 10,
          shadowColor: '#333',
        },
      },

    },
  ],
})





</script>

<style lang="scss" scoped>
</style>