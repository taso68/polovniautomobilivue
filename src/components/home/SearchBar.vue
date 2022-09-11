<template>
    <div class="search-wrapper">
        <!-- <p v-for="mark in this.srcBarMarks.marks" :key="mark.id">TEST</p> -->
        <div class="src-element group-wrapper">
            <div id="mark-wrapper" class="src-element">
                <select v-model="markIndex" @change="setSelectedMarkId($event)">
                    <option value="" selected>Marks</option>
                    <option v-for="(mark,index) in this.srcBarMarks.marks" :key="mark.id" :value="index">
                        {{mark.name}}
                    </option>
                </select>
            </div>
            <div id="model-wrapper" class="src-element">
                <select @change="selectedModel($event)" class="inputsstyle">
                    <option value="">Models</option>
                    <option v-for="model in this.currentModels" :key="model.id" :value="model.id">{{model.name}}
                    </option>
                </select>
            </div>
        </div>
        <div class="src-element group-wrapper">
            <div id="price-from" class="src-element">
                <label for="price-from">Price from: </label>
                <input class="inputsstyle price" id="price-from" name="price-from" type="number" min=0
                    pattern="[0-9\/]*" v-model="priceFrom">
            </div>
            <div id="price-to" class="src-element">
                <label for="price-to">Price to: </label>
                <input class="inputsstyle price" id="price-to" name="price-to" type="number" pattern="[0-9\/]*"
                    v-model="priceTo">
            </div>
        </div>
        <div id="year-wrapper" class="src-element group-wrapper">
            <div class="src-element">
                <select v-model="yearFrom">
                    <option value="">From year</option>
                    <option v-for="year in years" :value="year" :key="year">{{year}}. y</option>
                </select>
            </div>
            <div class="src-element">
                <select v-model="yearTo">
                    <option value="">To year</option>
                    <option v-for="year in years" :value="year" :key="year">{{year}}. y</option>
                </select>
            </div>
        </div>
        <div id="cm3-wrapper" class="src-element group-wrapper">
            <div class="src-element">
                <select v-model="cm3From">
                    <option value="">cm3 From</option>
                    <option v-for="cm3value in cm3Values" :value="cm3value" :key="cm3value">{{ cm3value }} cm3</option>
                </select>
            </div>
            <div class="src-element">
                <select v-model="cm3To">
                    <option value="">cm3 To</option>
                    <option v-for="cm3value in cm3Values" :value="cm3value" :key="cm3value">{{ cm3value }} cm3</option>
                </select>
            </div>
        </div>
        <div id="fuel-wrapper" class="src-element">
            <select v-model="fuel">
                <option value="">Fuel</option>
                <option v-for="fuel in this.srcBarFuels.fuels" :value="fuel.id" :key="fuel">{{fuel.name}}
                </option>
            </select>
        </div>
        <div id="bodies-wrapper" class="src-element">
            <select v-model="body">
                <option value="">Body</option>
                <option v-for="body in this.srcBarBodies.bodies" :value="body.id" :key="body">{{ body.name}}
                </option>
            </select>
        </div>
        <div id="src-buttons">
            <button id="src-button" class="button-edged">SEARCH</button>
            <button id="clr-button" class="button-edged" @click="clear()">CLEAR</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['srcBarMarks', 'srcBarFuels', 'srcBarBodies'],
    data: function(){
        return{
            currentModels: null,
            markIndex: "",

            selectedMarkId: null,
            selectedModelId: null,
            priceFrom: "",
            priceTo: "",
            yearFrom: "",
            yearTo: "",
            fuel: "",
            cm3From: "",
            cm3To: "",
            body: ""
        }
    },
    methods:{
        check(){
            // console.log("Mark id: " + this.selectedMarkId)
            // console.log("Model id: " + this.selectedModelId)
            // console.log("priceFrom: " + this.priceFrom)
            // console.log("priceTo: " + this.priceTo)
            // console.log("yearFrom: " + this.yearFrom)
            // console.log("yearTo: " + this.yearTo)
            // console.log("Fuel id: " + this.fuel)
            // console.log( this.srcBarBodies)
            // console.log("Mark index: " + this.markIndex);
            // console.log("Selected Mark id: " + this.selectedMarkId);
            // console.log("Selected models: " + this.currentModels);   
            // console.log("Selected model id: : " + this.selectedModelId);            
        },
        setSelectedMarkId(event){
            if (!event.target.value) {
                this.currentModels = null
                return
            }
            this.selectedMarkId = this.srcBarMarks.marks[event.target.value].id
            this.currentModels = this.srcBarMarks.marks[event.target.value].models
        },
        selectedModel(event){
            this.selectedModelId = event.target.value;
        },
        clear(){
            this.currentModels = null
            this.markIndex = ""
            this.selectedMarkId = null
            this.selectedModelId = null
            this.priceFrom = ""
            this.priceTo = ""
            this.yearFrom = ""
            this.yearTo = ""
            this.fuel = ""
            this.cm3From = ""
            this.cm3To = ""
            this.body = ""
        }
    },
    computed: {
        years(){
            const year = new Date().getFullYear()
            return Array.from({ length: year - 1900 }, (value, index) => year - index )
        },
        cm3Values(){
            return [700,1000,1200,1300,1400,1500, 1600, 1700,1800, 1900, 2000, 2200, 2500, 2800, 3000, 3500, 4000, 5000, 6000, 8000]
        }
    }
}
</script>

<style scoped>
.search-wrapper {
    width: 60vw;
    min-width: 280px;
    border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
    box-shadow: 10px 10px 5px rgb(0, 63, 45);
    border-radius: 12px;
    display: flex;
    flex-wrap: wrap;
}
.src-element{
    padding: 0.5rem;
    max-height: 2.5rem;
}
.price{
    width: 5rem;
}
.group-wrapper{
    display: inline-flex;
    padding: 0 !important;
}

#src-buttons{
    display: inline-flex;
    height: 2rem;
    width: 100%;
    justify-content: space-around;
}
#src-button{
width: 50%;
background-color: #4CAF50;
}
#clr-button {
background-color:#206ec1;
}

</style>