<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <img src="@/assets/camaro-logo.png" alt="">
    </div>
    <div class="networks-wrapper">
      <div class="social-network">
        <img src="@/assets/facebook-icon.png" alt="">
      </div>
      <div class="social-network">
        <img src="@/assets/insta-icon.png" alt="">
      </div>
      <div class="social-network">
        <img src="@/assets/yt-icon.png" alt="">
      </div>
    </div>
    <div class="wrapper-login">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .header-wrapper{
    position: relative;
    width: 100%;
    height: 4rem;
    background-color: black;
    color:white;
    display: flex;
    justify-content: space-around;
  }
  .logo-wrapper, .networks-wrapper, .wrapper-login{
    width: 30%;
  }
  .logo-wrapper img{
    height: 85%;
    background: transparent;
  }
  .logo-wrapper p {
    margin: 0;
    font-size: 1rem;
    font-family: OCR A Std,monospace;
  }
  
  .social-network img{
    height: 2rem;
    background: transparent;
  }
  .networks-wrapper{
    display: flex;
    padding-top: 1rem;
    justify-content: space-around;
  }

</style>