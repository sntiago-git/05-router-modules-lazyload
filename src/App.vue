<template>
  <!-- NAVBAR PADRE-->
  <nav-bar></nav-bar>

  <br />
  <img alt="Vue logo" width="200" src="./assets/ari.jpg" />

  <router-view></router-view>
</template>

<script>
import { defineAsyncComponent } from "vue";
//import NavBar from "./modules/shared/components/NavBar.vue";
export default {
  name: "App",
  components: {
    //Cargando componente de forma lazy
    NavBar: defineAsyncComponent(() =>
      import(
        /* webpackChunkName: "NavBar"*/ "@/modules/shared/components/NavBar.vue"
      )
    ),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
