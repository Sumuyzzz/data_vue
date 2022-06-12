<template>

    <v-chart :option="option"></v-chart>

</template>

<script setup>
import { ref } from "vue";
import VChart from "vue-echarts"

var percent = 1;

    function getData() {
      return [{
        value: percent,
        itemStyle: {
          normal: {
            color: 'red',
            shadowBlur: 10,
            shadowColor: '#0c142'
          }
        }
      }, {
        value: 100 - percent,
        itemStyle: {
          normal: {
            color: 'transparent'
          }
        }
      }];
    }

    let option = ref({
      title: {
        text: '故障率\n'+ (percent * 1) + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          color: '#fff',
          fontWeight: 'bolder',
          fontSize: 12,
        }
      },
      series: [
        {
          name: 'main',
          type: 'pie',
          radius: ['50%', '51%'],
          label: {
          
            normal: {
              show: false,
            }
          },
          data: getData(),
          animationEasingUpdate: 'cubicInOut',
          animationDurationUpdate: 100,
        },
        {
          type: 'pie',
          radius: ['39%', '49%'],
          silent: true,
          label: {
            normal: {
              show: false,
            }
          },

          data: [{
            value: 1,
            itemStyle: {
              normal: {
                color: '#313443',
                shadowBlur: 100,
                shadowColor: '#1b1e25',

              }
            }
          }],


        },
      ]
    })








    setInterval(function () {
      if (percent === 100) {
        percent = 0;
      } else {
        ++percent;
      }

      option.value.title = {
        text: '故障率\n' +percent + '%'
      }

      option.value.series = [{
        name: 'main',
        data: getData()
      }]
    }, 100);
</script>

<style lang="scss" scoped>
.charts{
  display:flex;
}


</style>