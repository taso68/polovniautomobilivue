<template>
<div class="app-wrapper">
  <HeaderTop></HeaderTop>
  <h1>KURAVVEL</h1>
</div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
export default {
  components:{
    HeaderTop,
    HeaderTop
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
body{
  margin: 0px;
}
</style>
<style scoped>
  .app-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
</style>

