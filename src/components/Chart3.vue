<template>
  <v-chart :option="option" :autoresize="true"></v-chart>
</template>

<script setup>
import VChart from "vue-echarts"
import { ref } from "vue"



let data = []


for (let i = 0;i < 5;++i) {
  data.push(Math.round(Math.random() * 200));
}

const option = ref({
  title: {
    text: '工厂接入类型',
    textStyle: {
      color: '#fff'
    },
    top: '20',
    left: '60'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    textStyle: {
      color: '#fff'
    },
    top: '60'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    height: '200'
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['锅炉', '环保', '电厂', '供需', '采掘']
  },
  series: [
    {
      name: '2020',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      barWidth: '15',
      emphasis: {
        focus: 'series'
      },
      data: data
    },
    {
      name: '2021',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: data
    },
    {
      name: '2022',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: data
    },
    {
      name: '2023',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: data
    },
    {
      name: '2024',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: data
    }
  ]
})



let xxx = option.value.series.map(i => i.data)
console.log(xxx);
const update = () => {
  let data = option.value.series[0].data
  for (var i = 0;i < data.length;++i) {
    if (Math.random() > 0.9) {
      data[i] += Math.round(Math.random() * 200);
    } else {
      data[i] += Math.round(Math.random() * 20);
    }
  }

}

setInterval(function () {
  update();
}, 500);
</script>

<style lang="scss" scoped>
</style>