<template>
  <table>
    <thead>
      <tr>
        <th colspan="6">
          <Icon icon="fad:logo-reason" />
          监控列表
        </th>
      </tr>
    </thead>
    <tbody class="body">


      <vue3-seamless-scroll :list="items" class="scroll">
        <tr class="first">
          <td v-for="th in thead">
            {{ th }}
          </td>
        </tr>
        <tr v-for="item in items" class="item">
          <td v-for="i in item">
            {{ i }}
          </td>
          <td>
            <button v-for="button in buttons">
              {{ button }}
            </button>
          </td>
        </tr>
      </vue3-seamless-scroll>


    </tbody>
  </table>
</template>
<script setup>
import { Icon } from '@iconify/vue';


const thead = [
  "单位名",
  "网关数",
  "设备数",
  "数据点",
  "报警",
  "操作"]

const items = [{
  name: "宝钢",
  value: 200,
  device: 400,
  stronghold: 5000,
  alarm: "无"
}, {
  name: "造纸厂",
  value: 3000,
  device: 2000,
  stronghold: 1000,
  alarm: "温度上限报警>120"
}, {
  name: "宝钢",
  value: 200,
  device: 400,
  stronghold: 5000,
  alarm: "无"
}]

const buttons = [
  "报警记录", "历史数据", "组态应用"
]







</script>

<style lang="scss" scoped>






.body {

  text-align: center;

}





table,
th,
td {
  border: 1px solid #4e7298;
  border-collapse: collapse;
  color: #b3c3d3;
}


ul{ 

  list-style: none;
  padding: 0;
  display: flex;
  font-size: 18px;;
  li{
    border: 1px solid #4e7298;
    margin: 0;
  }
}
th {
  background: #017197;
}

.first {
  text-align: center;
  color: white;
  font-weight: bold;
}


.scroll{
overflow:hidden;
width: 100%;
  border: 1px solid red;
  display: flex;
  justify-content:center;
}

button {
  border: none;
  color: white;
  margin: 2px;
}


button:first-child {
  background: #ff0000;
}

button:nth-child(2) {
  background: #2897c4;
}

button:nth-child(3) {
  background: #36971a;
}
</style>
  