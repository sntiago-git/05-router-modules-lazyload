<template>
  <div class="dbz-layout">
    <h1>DBZ Layout</h1>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "DbzLayout",
  components: { NavBar },
};
</script>
<style scoped>
.dbz-layout {
  background-color: deepskyblue;
}
</style>