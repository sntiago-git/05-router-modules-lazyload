<template>
  <!-- OTRO COMPONENTE/PAGE, LO UNICO DIFERENTE ES QUE SERÁ EL PADRE
    DE LAS RUTAS HIJAS QUE TENGAN QUE VER CON POKEMON-->
  <div class="pokemon-layout">
    <!--Todas las rutas hijas tendrán este titulo-->
    <h1>Pokemon layout</h1>
    <nav-bar></nav-bar>

    <!-- En esta parte se cargarán todas las rutas hijas que definamos en el router-->
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "PokemonLayout",
  components: { NavBar },
};
</script>
<style scoped>
.pokemon-layout {
  background-color: lightpink;
}
</style>