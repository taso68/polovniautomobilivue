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
                    <label for="title">Mark: </label>
                    <select v-model="markIndex" @change="setSelectedMarkId($event)">
                        <option value="" selected>Marks</option>
                        <option v-for="(mark,index) in this.marks" :key="mark.id" :value="index">
                            {{mark.name}}
                        </option>
                    </select>
                    <label for="title">Model: </label>
                    <select @change="selectedModel($event)">
                        <option value="">Models</option>
                        <option v-for="model in this.currentModels" :key="model.id" :value="model.id">{{model.name}}
                        </option>
                    </select>
                </div>
                <div class="group">
                    
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
                <div class="group">
                    <label for="fuel">Fuel: </label>
                    <select name="fuel" v-model="fuelId">
                        <option value="">Fuel</option>
                        <option v-for="fuel in this.fuels" :value="fuel.id" :key="fuel">{{fuel.name}}
                        </option>
                    </select>
                    <label for="body">Body: </label>
                    <select name="body"  v-model="bodyId">
                        <option value="">Body</option>
                        <option v-for="body in this.bodies" :value="body.id" :key="body">{{ body.name}}
                        </option>
                    </select>
                </div>
                <div class="group">
                    <label for="seats">Seats: </label>
                    <select name="seats">
                        <option value="">count</option>
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="4">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                    <label for="power">Power ps:</label>
                    <input type="power" id="power" name="power" pattern="[0-9\/]*">
                </div>
                <div class="group">
                    <label for="country">Coountry: </label>
                    <select name="country" v-model="countryIndex" @change="setSelectedCountryId($event)">
                        <option value="" selected>Countries</option>
                        <option v-for="(country,index) in this.countries" :key="country.id" :value="index">
                            {{country.name}}
                        </option>
                    </select>
                </div>
                <div class="group">
                    <label for="city">City: </label>
                    <select v-model="selectedCityId">
                        <option value="">City</option>
                        <option v-for="city in this.currentCities" :key="city.id" :value="city.id">{{city.name}}
                        </option>
                    </select>
                </div>
            </div>
            <div id="ad-photos">
                <div id="photo-container">
                    <input type="file" multiple :change="photos" @change="loadFilesFromInput($event)">
                    <div class="photo-box">
                        <img src="" alt="">
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{

            currentCities: null,
            marks: null,
            fuels: null,
            bodies: null,
            countries: null,
            currentModels: null,

            markIndex: "",
            countryIndex: "",

            fuelId: "",
            bodyId: "",
            selectedMarkId: null,
            selectedCountryId: null,
            selectedCityId: "",
            photos: [],
            displayPhotoUrls:[]

        }
    },
    methods: {
        loadFilesFromInput(event){
            for (let i = 0; i < event.target.files.length; i++){
                this.photos.push(event.target.files[i])
            }
            console.log(this.photos);
        },
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
        async getCountriesWithCities(){
            try{
                const res = await axios.get("http://localhost:8082/countries")
                this.countries = res.data;

            }catch(error){
                console.log(error);
            }
        },
        setSelectedMarkId(event) {
            if (!event.target.value) {
                this.currentModels = null
                return
            }
            this.selectedMarkId = this.marks[event.target.value].id
            this.currentModels = this.marks[event.target.value].models
        },
        setSelectedCountryId(event) { //TODO
            if (!event.target.value) {
                this.currentCities = null
                return
            }
            this.selectedCountryId = this.countries[event.target.value].id
            this.currentCities = this.countries[event.target.value].cities
            console.log(this.currentCities)
            
        },
        selectedModel(event) {
            this.selectedModelId = event.target.value;
        },
    },
    mounted() {
        this.getMarksWithModels()
        this.getFuels()
        this.getBodies()
        this.getCountriesWithCities()
    },
    computed: {
        years() {
            const year = new Date().getFullYear()
            return Array.from({ length: year - 1933 }, (value, index) => year - index)
        },
    },
    created() {
        document.title = "New ad";
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
    width: 30%;
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
#power{
    width: 5rem;
}
.group{
    text-align: left;
}
#photo-container{
    width: 90%;
    height: 70%;
    border: 1px solid white;
}
.photo-box{
    width: 200px;
    height: 200px;
    border: 1px solid white;
}
input{
    margin: 10px;
}
textarea {
    resize: none;
}
select{
    margin-top: 10px
}
label{
    margin: 0 0 0 5px;
}
</style>