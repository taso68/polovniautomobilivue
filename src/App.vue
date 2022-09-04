<template>
  <div class="app-wrapper">
    <HeaderTop></HeaderTop>
    <nav class="nav-wrapper">
      <div class="nav-left">
        <router-link to="/home">
          <button class="button-edged" id="my-profile-button">
            <font-awesome-icon class="icon" id="my-profile-icon" :icon="['fas', 'home']" size="xl" />
            home
          </button>
        </router-link>
        <button class="button-edged" id="my-profile-button">
          <font-awesome-icon class="icon" id="my-profile-icon" :icon="['fas', 'plus']" size="xl" /> New Ad
        </button>
      </div>
      <div class="nav-right">
        <router-link to="/profile">
          <button class="button-edged" id="my-profile-button">
            <font-awesome-icon class="icon" id="my-profile-icon" :icon="['fas', 'user']" size="xl" />
            Profile
          </button>
        </router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
export default {
  components:{
    HeaderTop,
    Home,
    Profile
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

.button-edged {
  background-color: #2c3e50;
  border: none;
  color: white;
  padding: 7px 15px;
  padding-left: 15px !important;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 5px;

}
.button-edged:hover {
  transform: scale(0.9);
  transition: all 300ms;
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
  height: 2.4rem;
  width: 100%;
  background-color: #4CAF50;
  display: flex;
  justify-content: space-between;
}
.nav-left{
  justify-content: flex-start;
}
.nav-right , .nav-left{
  width: 45%;
  display: flex;
  padding-right: 1rem;
  margin: 0.2em 0 0.2em 0.2em;
}
.nav-left {
  justify-content: flex-start;
}
.nav-right {
  justify-content: flex-end;
}
#my-profile-button {
  background-color: #206ec1;
}
#my-profile-button:hover{
  transform: scale(0.9);
  transition: all 300ms;
}
#my-profile-icon{
  color: white;
  margin-right: 0.2em;
}
#my-profile-icon:hover{
  color: #4CAF50;
}

</style>

