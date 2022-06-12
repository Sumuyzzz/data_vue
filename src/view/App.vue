<script setup lang="ts">
import Header from "./Header.vue"
import Main from "./Main.vue"


</script>

<template>
  <Header ></Header>
  <Main></Main>
  <footer></footer>
</template>

<style lang="scss">
#app {
  background:  url('@/assets/img/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display:flex;
  flex-direction: column;
  
  Header{
    z-index: 1;
    height:100px;
  }
  Main{ 
align-self: center;
  }

}
</style>
