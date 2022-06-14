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

import { data } from "@/components/map/data"

import{getRandomColor} from '@/components/lib/random'


registerMap("china", chinaMap);



var geoCoordMap = {

  北京: [116.4551, 40.2539],

  天津: [117.4219, 39.4189],

  河北: [114.4995, 38.1006],

  山西: [112.3352, 37.9413],

  内蒙古: [110.3467, 41.4899],

  辽宁: [123.1238, 42.1216],

  吉林: [125.8154, 44.2584],

  黑龙江: [127.9688, 45.368],

  上海: [121.4648, 31.2891],

  江苏: [118.8062, 31.9208],

  安徽: [117.29, 32.0581],

  浙江: [119.5313, 29.8773],

  福建: [119.4543, 25.9222],

  江西: [116.0046, 28.6633],

  山东: [117.1582, 36.8701],

  河南: [113.4668, 34.6234],

  湖北: [114.3896, 30.6628],

  湖南: [113.0823, 28.2568],

  广东: [113.12244, 23.009505],

  广西: [108.479, 23.1152],

  海南: [110.3893, 19.8516],

  重庆: [108.384366, 30.439702],

  四川: [103.9526, 30.7617],

  贵州: [106.6992, 26.7682],

  云南: [102.9199, 25.4663],

  陕西: [109.1162, 34.2004],

  甘肃: [103.5901, 36.3043],

  青海: [101.4038, 36.8207],

  宁夏: [106.3586, 38.1775],

  新疆: [87.9236, 43.5883],

  西藏: [91.11, 29.97],

};





const dataxxx = [
  {
    name: "内蒙古",
    itemStyle: {
      areaColor: "#56b1da",
    },
    value: [110.3467, 41.4899]
  },
  {
    name: "黑龙江",
    itemStyle: {
      areaColor: "#bfc",
    },
    value: [127.9688, 45.368]
  },
];

let generateData = () => {
  console.log(geoCoordMap.keys());
}


let option = ref({
  backgroundColor: "black",
  geo: {
    map: "china",
    aspectScale: 0.8,
    layoutCenter: ["50%", "50%"],
    layoutSize: "120%",
    itemStyle: {
      normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
    },

    regions: [
      {
        name: "南海诸岛",
        itemStyle: {
          areaColor: "rgba(0, 10, 52, 1)",
          borderColor: "rgba(0, 10, 52, 1)",
          normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
          },
        },
        label: {
          show: false,
          color: "#FFFFFF",
          fontSize: 12,
        },
      },
    ],
  },
  series: [
    {
      type: "map",
      selectedMode: "multiple",
      mapType: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"], //地图位置
      layoutSize: "120%",
      zoom: 1,
      showLegendSymbol: 'true',
      //当前视角的缩放比例
      // roam: true, //是否开启平游或缩放
      scaleLimit: {
        //滚轮缩放的极限控制
        min: 1,
        max: 2,
      },
      label: {
        show: false,
        color: "#FFFFFF",
        fontSize: 16,
      },
      itemStyle: {
        normal: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: false,
            color: "#fff",
          },
        },
      },
      data: data,
    },
    {
      name: 'Top 5',
      type: 'scatter',
      coordinateSystem: 'geo',
      //   symbol: 'image://http://ssq168.shupf.cn/data/biaoji.png',
      // symbolSize: [30,120],
      // symbolOffset:[0, '-40%'] ,
      label: {
        normal: {
          show: false,
        }
      },
      itemStyle: {
        normal: {
          color: '#D8BC37', //标志颜色
        }
      },
      data: data,
      showEffectOn: 'render',
      rippleEffect: {
        brushType: 'stroke'
      },
      hoverAnimation: true,
      zlevel: 1
    },
  ],
})





</script>

<style lang="scss" scoped>
</style>