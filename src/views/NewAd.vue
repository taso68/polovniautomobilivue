<template>
    <div id="new-ad-wrapper">
        <div id="new-ad-container">
            <div id="ad-data">
                <div class="group">
                    <label for="title">Title: </label>
                    <input type="text" id="title" name="title">
                </div>
                <div class="group">
                    <label for="description">Description: </label><br />
                    <textarea name="description" id="description" cols="35" rows="5"></textarea>
                </div>
                <div class="group">
                    <label for="price">Price:</label>
                    <input type="number" id="price" name="price" pattern="[0-9\/]*">
                </div>
                <div class="group">
                    <label for="price">Cm3:</label>
                    <input type="number" id="cm3" name="cm3" pattern="[0-9\/]*">
                </div>
                <div class="group">
                    <label for="year">Production year : </label>
                    <select name = "year">
                        <option value="">Production year</option>
                        <option v-for="year in years" :value="year" :key="year">{{year}}. y</option>
                    </select>
                </div>
            </div>
            <div id="ad-photos">
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    methods: {
        async getMarksWithModels() {
            try {
                const res = await axios.get("http://localhost:8082/marks")
                this.marks = res.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getFuels() {
            try {
                const res = await axios.get("http://localhost:8082/fuels")
                this.fuels = res.data;
            } catch (error) {
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
    mounted() {
        this.getMarksWithModels()
        this.getFuels()
    },
    computed: {
        years() {
            const year = new Date().getFullYear()
            return Array.from({ length: year - 1900 }, (value, index) => year - index)
        },
    }
    
}
</script>

<style scoped>
#new-ad-wrapper{
    padding: 1rem;
    min-width: 70vw;
}
#new-ad-container{
    border: 1px solid white;
    min-height: 50vw;
    min-width: 400px;
    display: flex;
    flex-wrap: wrap;
}
#ad-data{
    margin: 1rem;
    padding: 0.5rem;
    padding-left: 3rem;
    width: 50%;
    border: 1px solid white;
    display: block;
    align-items: left;
}
#ad-photos{
    margin: 1rem;
    padding: 0.5rem;
    min-width: 35%;
    border: 1px solid white;
}
.group{
    text-align: left;
}
input{
    margin: 10px;
}
textarea {
    resize: none;
}
</style>