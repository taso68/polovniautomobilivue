<template>
  <div class="app-wrapper">
    <HeaderTop></HeaderTop>
    <nav class="nav-wrapper">
      <div class="nav-left">

      </div>
      <div class="nav-right">
        <a href="">
          <font-awesome-icon class="icon" :icon="['fas', 'user']" size="xl" /> My Profile
        </a>
      </div>
    </nav>

    <Home />
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
import Home from './views/Home.vue';
export default {
  components:{
    HeaderTop,
    Home,
  
},


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
  .nav-wrapper{
    height: 2rem;
    width: 100%;
    background-color: #4CAF50;
    display: flex;
    justify-content: space-between;
  }
  .nav-left{
    width: 45%;
    display: flex;
    justify-content: flex-start;
  }
  .nav-right {
    width: 45%;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    margin: 0.2em;
  }
  .icon {
    color: white;
  }

  .icon:hover {
    opacity: 0.5;
  }
</style>

