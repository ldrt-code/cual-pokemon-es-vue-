<template>
    <div> 
    <section v-if="loaded">
      <ul class="pokeSelect" :class="status">
        <li v-for="{name, id, pclass = 'no'} in options" @click="select(id)" :id="id" :class="((status == 'show' && pclass== 'yes') || pokemon == id) ? pclass + ' active' : '' "><img src="@/assets/pokeball.png" class="pokeball" alt=""><span class="name">{{name}}</span></li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
    props: [
        "options", "status", "loaded"
    ], 
    data(){
      return{
        pokemon : null
      }
    },
    methods:{
      select(id){
        if(this.status != "show"){
          this.$emit("select", id);
          this.pokemon = id;
        }
      }
    }
}
</script>

<style>

</style>