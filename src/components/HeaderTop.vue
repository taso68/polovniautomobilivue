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
        <font-awesome-icon class="icon" icon="dove" bounce size="xl" />
      </a>
    </div>
    <div class=" header-login">
      <button class="button-hover-trans button-edged " id="login-button">LOGIN</button>
      <button class="button-hover-trans button-edged" id="register-button">REGISTER</button>

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
  max-width: 100vw;
  height: 3rem;
  background-color: rgb(38, 35, 35);
  color: white;
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 1rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"), linear-gradient(to right top, #343a40, #2b2c31, #211f22, #151314, #000000);
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
  width: 25%;
}

#login-button {
  background-color: #206ec1;
}
#register-button {
  background-color: #4CAF50;
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
