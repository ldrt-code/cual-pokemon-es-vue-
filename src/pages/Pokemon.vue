<template>
  <div>
    <div class="pokeBlock pokeIU" >
      <div v-show="load">
        <PokemonImage   :pokemon="pokemon.id" :status="status" @isLoad="loaded" ></PokemonImage>
        <SelectPokemon  
            :options="options" 
            :status="status" 
            @select="selectPokemon" 
            :loaded="load"
            :selected="selected"> 
        </SelectPokemon>
      </div>
      <div class="loading" id="loadingPokemonUi" v-show="!load">
        <font-awesome-icon  icon="spinner" />
      </div>
    </div>
      
      <div class="reload" @click="reload">
        <font-awesome-icon icon="repeat" />
      </div>
    <div class="pokeBlock pokeBackground"><img src="../assets/svg/spiral.svg" alt="" /></div> 
  </div>
</template>

<script>
import getPokemonOptions from "@/helpers/pokemonmanage.js"

import SelectPokemon from "../components/SelectPokemon.vue";
import PokemonImage from "../components/PokemonImage.vue";
export default {
  name:'Pokemon',
  data(){
    return {
      options : [], 
      pokemon : null, 
      selected : null,
      load : false,
      status : "hidde"
    }
  },
   methods:{
    async getOptions(){
      this.options = await getPokemonOptions();
      let y = Math.floor( Math.random() * 4 );
      this.options[y].pclass="yes";
      this.pokemon = this.options[y];
      console.log(this.pokemon);
    }, 
    selectPokemon(id){
      this.status = "show";
      this.selected = id;
    }, 
    reload(){
      this.selected= null; 
      this.load = false;
      this.status = "hidde"; 
      this.getOptions();
    }, 
    loaded(x){
      if(x){
        this.load = true;
      }
    }
  }, mounted(){
    this.getOptions();  
  }, 
  components: {
    SelectPokemon, PokemonImage
  }


}
</script>

<style>

</style>