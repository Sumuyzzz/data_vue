<template>
  <v-chart :option="option"></v-chart>
</template>

<script setup>
import VChart from "vue-echarts"
import * as echarts from 'echarts';


let data1 = [Math.random() * 100];
let data2 = [Math.random() * 200];

var base = +new Date();
var oneDay = 24 * 3600 * 1000;
var date = [];
var now = new Date(base);


const option = ref({
  backgroundColor: 'rgba(1,202,217,.2)',
  grid: {
    left: 60,
    right: 60,
    top: 50,
    bottom: 40
  },
  legend: {
    top: 10,
    textStyle: {
      fontSize: 10,
      color: 'rgba(255,255,255,.7)'
    },
    data: ['报警数', '处理数']
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },

      data: date,
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '',
      min: 0,
      max: 250,
      interval: 50,
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.01)'
        }
      },
    },
    {
      type: 'value',
      name: '',
      max: 25,
      interval: 5,
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.3)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)'
        }
      },
    }
  ],
  series: [
    {
      name: '处理数',
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#00f0ff' },
              { offset: 1, color: '#032a72' }
            ]
          )
        }
      },
      data: data1
    },
    {
      name: '报警数',
      type: 'line',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#fffb34' },
              { offset: 1, color: '#fffb34' }
            ]
          )
        }
      },
      data: data2
    }
  ]
})








function addData(shift) {
  now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
  date.push(now);
  data1.push((Math.random() - 0.4) * 10 + data1[data1.length - 1]);
  data2.push((Math.random() - 0.4) * 20 + data2[data2.length - 1]);
  if (shift) {
    date.shift();
    data1.shift();
    data2.shift();
  }
  now = new Date(+new Date(now) + oneDay);
}
for (var i = 1;i < 100;i++) {
  addData();
}

setInterval(function () {
  addData(true);
  option.value = {
    xAxis: {
      data: date
    },
    series: [
      {
        name: '报警数',
        data: data2
      },
      {
        name: '处理数',
        data: data1
      }
    ]
  };
}, 1000);




</script>

<style lang="scss" scoped>
</style>