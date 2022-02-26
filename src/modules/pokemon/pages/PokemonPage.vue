<template>
  <div v-if="pokemon">
    <h1>
      Pokemon Page <span>#{{ pokemonId }}</span>
    </h1>
    <img :alt="pokemon.name" width="200" :src="pokemonImg" />
    <h2>Pokemon Name: {{ pokemon.name }}</h2>
  </div>
  <div v-else>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //id: null,
      pokemon: null,
      msg: "Espera...",
    };
  },
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
  },
  created() {
    //const { id } = this.$route.params;

    //console.log(id);
    //this.id = id;

    this.getPokemon();
  },

  methods: {
    async getPokemon() {
      try {
        //Peticion
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`
        ).then((res) => res.json());

        console.log(response);
        this.pokemon = response;
      } catch (error) {
        console.log("No hay nada que hacer aqui");
        this.$router.push({ name: "pokemon-home" });
      }
    },
  },

  computed: {
    pokemonImg() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon.id}.svg`;
    },
  },

  //hacemos una peticion cada vez que se actualice la prop que pasamos por url.
  watch: {
    pokemonId() {
      this.pokemon = null;
      this.getPokemon();
    },
  },
};
</script>

<style>
</style>