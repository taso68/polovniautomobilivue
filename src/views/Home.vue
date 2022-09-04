<template>
  <div class="home-wrapper">
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';
export default {
    components: { SearchBar }
}
</script>

<style>
  .home-wrapper{
    height: 100%;
    width: 100%;
  }
</style>