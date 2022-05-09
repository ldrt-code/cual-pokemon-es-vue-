<template>
      <div class="pokeImg" :class="status"> 
          <section v-html="imgSRC"> </section>
     </div>
</template>

<script>
import getPokemonSvg from "@/api/pokemonSvgApi.js"; 
export default {
    props: [
        'pokemon', 
        'status'
    ], 
    data(){
        return{
            svg : null, 
        }
    },
    methods : {
        async getPokemonSvg(id = 1){
            this.svg = await getPokemonSvg(this.pokemon);
            this.$emit('isLoad', this.svg);
        }
    },
    computed:{
        imgSRC(){
            this.getPokemonSvg(this.pokemon);
            return this.svg;
            //return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon}.svg`
        }
    }
}
</script>

<style>

</style>