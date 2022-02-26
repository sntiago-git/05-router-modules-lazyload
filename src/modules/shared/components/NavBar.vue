<template>
  <div>
    <!-- 
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'PokemonById', params: { id: 82 } }"
      >Pokemon</router-link
    >
    <router-link :to="{ name: 'About' }">About</router-link> -->

    <!-- COMPONENTE Creador de links personalizados -->
    <custom-link
      v-for="link in links"
      :key="link.to"
      :link="link"
    ></custom-link>
  </div>
</template>
<script>
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  name: "NavBar",
  data() {
    return {
      //links que enviaremos al CustomLink
      links: [
        { to: "pokemon", name: "Pokemon" },
        { to: "dbz", name: "Dragon Ball Z" },
        { to: "https://www.google.com/", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() =>
      import(/* webpackChunkName: "NavBar"*/ "./CustomLink.vue")
    ),
  },
};
</script>
<style scoped>
div {
  padding: 0 30px;
  margin-bottom: 10px;
}

/* div a {
  font-weight: bold;
  margin: 5px;
  color: gray;
  padding: 10px;
  text-decoration: none;
  border: solid 1px gray;
  border-radius: 30px;
} */

/* a.router-link-exact-active {
  background-color: gray;
  color: white;
} */
</style>>
    