<template>

  <v-chart :option="option" :autoresize="true"></v-chart>

</template>

<script setup>
import { ref } from "vue";
import VChart from "vue-echarts"



var highlight = '#03b7c9';

var demoData = [
  { name: '故障率', value: 50, unit: '%', pos: ['50%', '55%'], range: [0, 100] },
];

let option = ref({
  series: (function () {
    var result = [];
    demoData.forEach(function (item) {
      result.push(
        {
          type: 'gauge',
          center: item.pos,
          splitNumber: item.splitNum || 10,
          min: item.range[0],
          max: item.range[1],
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            show: true,
            lineStyle: {
              width: 2,
              shadowBlur: 0,
              color: [[1, highlight]],
            },
          },
          axisTick: {
            show: true,
            lineStyle: {
              color: highlight,
              width: 1,
            },
            length: -5,
            splitNumber: 10,
          },
          splitLine: {
            show: true,
            length: -14,
            lineStyle: {
              color: highlight,
            },
          },
          axisLabel: {
            distance: -20,
            textStyle: {
              color: highlight,
              fontSize: '14',
              fontWeight: 'bold',
            },
          },
          pointer: {
            show: 0,
          },
          detail: {
            show: 0,
          },
        },
        {
          name: item.name,
          type: 'gauge',
          center: item.pos,
          radius: '30.33%',
          startAngle: 225,
          endAngle: -45,
          min: item.range[0],
          max: item.range[1],
          axisLine: {
            show: true,
            lineStyle: {
              width: 16,
              color: [[1, 'rgba(255,255,255,.1)']],
            },
          },
          axisTick: {
            show: 0,
          },
          splitLine: {
            show: 0,
          },
          axisLabel: {
            show: 0,
          },
          pointer: {
            show: true,
            length: '105%',
          },
          detail: {
            show: true,
            offsetCenter: [0, '100%'],
            textStyle: {
              fontSize: 20,
              color: '#fff',
            },
            formatter: ['{value} ' + (item.unit || ''), '{name|' + item.name + '}'].join('\n'),
            rich: {
              name: {
                fontSize: 14,
                lineHeight: 30,
                color: '#ddd',
              },
            },
          },
          itemStyle: {
            normal: {
              color: highlight,
            },
          },
          data: [
            {
              value: item.value,
            },
          ],
          anchor: {
            show: true,
            showAbove: true,
            size: 24,
            itemStyle: {
              color: '#fff',
            },
          },
        }
      );
    });
    return result;
  })(),
})


const randomNumber = () => Math.floor(Math.random() * 100)

const update = () => {
  option.value.series[1].data[0].value = randomNumber()
}


setInterval(update, 1000)







</script>

<style lang="scss" scoped>
.charts {
  display: flex;
}
</style>