<template>
  <div class="wrapper">
    <div class="title">
      <Icon icon="ep:warning-filled" color="red" />
      <div>{{ "报警记录" }}</div>
    </div>
    <vue3-seamless-scroll :list="list" class="scroll">
      <ul class="item" v-for="(item, index) in list" :key="index">
        <li>{{ item.text }}</li>
        <div>{{ date }}</div>
      </ul>
    </vue3-seamless-scroll>

  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import day from 'dayjs'
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
import { ref } from 'vue'

const date = day(new Date()).format('YYYY[-]MM[-]DD')



const list = ref([{
  text: "山东市D区12#机器气压过高报警"
}, {
  text: "江苏省13#机器气压过高报警"
}, {
  text: "YY省14#机器气压过高报警"
}, {
  text: "山东市D区12#机器气压过高报警"
}, {
  text: "江苏省13#机器气压过高报警"
}, {
  text: "山东市D区12#机器气压过高报警"
}, {
  text: "江苏省13#机器气压过高报警"
}, {
  text: "YY省14#机器气压过高报警"
}, {
  text: "山东市D区12#机器气压过高报警"
}, {
  text: "江苏省13#机器气压过高报警"
}, {
  text: "山东市D区12#机器气压过高报警"
}, {
  text: "江苏省13#机器气压过高报警"
}, {
  text: "YY省14#机器气压过高报警"
}, {
  text: "山东市D区12#机器气压过高报警"
}, {
  text: "江苏省13#机器气压过高报警"
}])


</script>

<style lang="scss" scoped>





.wrapper {
  overflow: hidden;
  height: 200px;
          

.title{
  display: flex;
  justify-content: center;
  color: white;
}
  .scroll {
    overflow: hidden;
  color: rgba(255, 255, 255, .7);
  }

  .item {

    font-size: 20px;

    .box {
      background: #017097;
      color: white;
    }
  }



  ul {

    padding: 0;
  }
}
</style>