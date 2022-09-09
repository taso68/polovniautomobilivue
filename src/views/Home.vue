<template>
  <div class="home-wrapper">
    <SearchBar :srcBarMarks={marks} :srcBarFuels={fuels} :srcBarBodies={bodies}></SearchBar>
  </div>
</template>

<script>

import SearchBar from '@/components/home/SearchBar.vue';
import axios from 'axios';
export default {
    components: { SearchBar },
    data: function(){
      return{
        marks: null,
        fuels: null, 
        bodies: null,
      }
    },
    methods:{
      async getMarksWithModels(){
        try{
          const res = await axios.get("http://localhost:8082/marks")
          this.marks = res.data;
        }catch(error){
          console.log(error);
        }
      },
      async getFuels(){
        try{
          const res = await axios.get("http://localhost:8082/fuels")
          this.fuels = res.data;          
        }catch(error){
          console.log(error);
        }
      },
      async getBodies() {
        try {
          const res = await axios.get("http://localhost:8082/bodies")
          this.bodies = res.data;
        } catch (error) {
          console.log(error);
        }
      },
    },
    mounted(){
      this.getMarksWithModels()
      this.getFuels()
      this.getBodies()
    }
}
</script>

<style>
  .home-wrapper{
    min-height: 70%;
    width: 100%;
    
  }
</style>