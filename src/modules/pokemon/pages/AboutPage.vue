<template>
  <h1>About Page</h1>

  <div>
    <h2>{{ name }}</h2>
    <button @click="changeName">Probar ciclo de vida Updated</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Ariana",
    };
  },
  methods: {
    changeName() {
      this.name = "Melisa";
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
    //Peticiones HTTP
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
    //Sucede cuando se actualiza alguna variable que afecte el DOM
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
    //Limpieza de observables o flags
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>
<style >
</style>