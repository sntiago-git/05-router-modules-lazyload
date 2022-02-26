<template>
  <div>
    <!-- COMPONENTE Creador de links personalizados -->
    <custom-link
      v-for="link in links"
      :key="link.to"
      :link="link"
    ></custom-link>
  </div>
</template>
<script>

//NAVBAR DBZ
import { defineAsyncComponent } from "@vue/runtime-core";

export default {
  name: "DbzNavBar",
  data() {
    return {
      //links que enviaremos al CustomLink
      links: [
        { to: "dbz-about", name: "Characters",},
        { to: "dbz-characters", name: "About" },
        { to: "https://www.google.com/", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() =>
      import(/* webpackChunkName: "CustomLink"*/ "@/modules/shared/components/CustomLink.vue")
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
    