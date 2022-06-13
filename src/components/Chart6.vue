<template>
<v-chart :option="option"></v-chart>
</template>

<script setup>
import VChart from "vue-echarts"


const option = ref({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: date
  },
  yAxis: {
    boundaryGap: [0, '50%'],
    type: 'value'
  },
  series: [
    {
      name: '成交',
      type: 'line',
      smooth: true,
      symbol: 'none',
      stack: 'a',
      areaStyle: {
        normal: {}
      },
      data: data
    }
  ]
})



const xxx = {
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
      data: data
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
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};



var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
var data = [Math.random() * 150];
var now = new Date(base);
function addData(shift) {
  now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
  date.push(now);
  data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);
  if (shift) {
    date.shift();
    data.shift();
  }
  now = new Date(+new Date(now) + oneDay);
}
for (var i = 1;i < 100;i++) {
  addData();
}

setInterval(function () {
  addData(true);
option.value= {
    xAxis: {
      data: date
    },
    series: [
      {
        name: '成交',
        data: data
      }
    ]
  };
}, 500);




</script>

<style lang="scss" scoped>

</style>