<template>
  <div class="header-wrapper">
    <div class="header-logo">
      <img :src=this.logo alt="fail">
    </div>
    <div class="header-social">
      <a href="https://www.youtube.com/">
        <font-awesome-icon class="icon" :icon="['fab', 'youtube']" size="xl" />
      </a>
      <a href="https://www.instagram.com/lazar_taso/">
        <font-awesome-icon class="icon" :icon="['fab', 'instagram']" size="xl" />
      </a>
      <a href=" https://www.facebook.com/lazartaso">
        <font-awesome-icon class="icon" :icon="['fab', 'facebook']" size="xl" />
      </a>
      <a href=" https://twitter.com/lazar_taso">
        <font-awesome-icon class="icon" icon="dove" bounce size="xl"/>
      </a>
    </div>
    <div class=" header-login">
          <!-- <font-awesome-icon class="icon" icon="user" /> -->
          <button id="login-button">LOGIN</button>
          <button id="register-button">REGISTER</button>

    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      logo: require("@/assets/camaro-logo.png")
    }
  }

}
</script>

<style scoped>
.header-wrapper{
  width: 100%;
  height: 3rem;
  background-color: rgb(38, 35, 35);
  color: white;
  display: flex;
  justify-content: space-around;
}
.header-logo {
  display: block;
}
.header-logo img{
  height: 3rem;
}
.header-logo p{
  margin: 0;
  color: rgb(192, 167, 167);
  font-family:'New', monospacel;
}
.header-social{
  padding-top: 0.5rem;
  width: 25%;
  display: flex;
  justify-content:space-around ;
  
}
.header-login{
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
  width: 35%;
}

#login-button {
  background-color: #206ec1;
  border: none;
  color: white;
  padding: 7px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  height: 2rem;
  margin-right:1rem;
}
#register-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 7px 27px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  height: 2rem;
  margin-left: 1rem;
}
.icon{
  color: white;
}
.icon:hover {
  opacity: 0.5;
}
@media only screen and (max-width: 525px) {
  .header-logo {
      display: none;
    }
}
</style>
