<template>
    <div id="new-ad-wrapper">
        <div id="new-ad-container">
            <div id="ad-data">
                <div class="group">
                    <label for="title">Title: </label>
                    <input type="text" id="title" name="title" v-model="title">
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
                <label id="custom-file-upload" class="button-edged" for="file-input">Chose photos
                    <font-awesome-icon class="icon" :icon="['fas', 'image']"  />
                    <input id="file-input" name="file-input" type="file" multiple :change="photos" @change="loadFilesFromInput($event)">
                </label>
                <div id="photo-container">
                    <div class="photo-box" v-for="(photo, index) in photos" :key="photo" :value="index">
                        <button class="remove-image-btn" @click="removePhoto(index)">X</button>
                        <img :src="this.displayPhotoUrls[index]" alt="">
                    </div>

                </div>
                <button class="button-edged" id="post-btn">
                    <font-awesome-icon class="icon" :icon="['fas', 'upload']" />
                    POST
                    <font-awesome-icon class="icon" :icon="['fas', 'upload']" />
                </button>
                <button class="button-edged" id="reset-btn" @click="resetAll()">RESET
                    <font-awesome-icon class="icon" :icon="['fas', 'refresh']" />
                </button>
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
export default {
    data(){
        return{
            //STATIC DATA
            marks: null,
            fuels: null,
            bodies: null,
            countries: null,
            
            //DINAMIC DATA
            markIndex: "",
            countryIndex: "",
            currentCities: null,
            currentModels: null,
            displayPhotoUrls:[],

            
            //DATA FOR SEND
            userId: 1,
            title: null,
            description: null,
            selectedMarkId: null,
            selectedModelId: null,
            price: null,
            cm3: null,
            productionYear: "",
            fuelId: null,
            bodyId: null,
            seats: null,
            selectedCountryId: null,
            selectedCityId: null,
            photos: [],

        }
    },
    methods: {
        resetAll(){
            // this.$forceUpdate();
            this.$router.go(0);
        },
        removePhoto(index){
            this.photos.splice(index, 1)
            this.displayPhotoUrls.splice(index, 1)
        },
        loadFilesFromInput(event){
            for (let i = 0; i < event.target.files.length; i++){
                this.photos.push(event.target.files[i])
                this.displayPhotoUrls.push(URL.createObjectURL(event.target.files[i]))
            }
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
    min-height: 50vw;
    min-width: 400px;
    display: flex;
    flex-wrap: wrap;
}
#ad-data{
    padding: 0.5rem;
    padding-left: 3rem;
    min-width: 20%;
    max-height: 50%;
    display: block;
    align-items: left;
}
#ad-photos{
    padding: 0.5rem;
    max-width: 50%;
    min-width: 400px;
    max-height: 55vh;
}
#power{
    width: 5rem;
}
.group{
    text-align: left;
}
#photo-container{
    max-width: 100%;
    max-height: 100%;
    min-height: 30%;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    justify-content: space-around;
}
.photo-box{
    max-width: 200px;
    max-height: 200px;
    margin: 10px;
    position: relative;
}
.photo-box img{
    max-width: 200px;
    max-height: 200px;
    
}
input{
    margin: 10px;
}
#file-input{
    background-color: #206ec1;
    cursor: pointer;
    display: none;
}
#custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 12px 12px 0 0;
    cursor: pointer;
    background-color: #4CAF50;
    font-size:1rem;
}
#post-btn{
    background-color: #4CAF50;
    width: 13rem;
    height: 4rem;
    font-size: x-large;
    
}
.remove-image-btn{
    position: absolute;
    right: 0;
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