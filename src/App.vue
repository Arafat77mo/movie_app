<template>
  <header-vue></header-vue>

  <router-view class="color"/>
</template>


<script>
import HeaderVue from './components/G/Header.vue';
import '@/assets/css/main.css'

export default {
  components:{
    HeaderVue
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



</style>
