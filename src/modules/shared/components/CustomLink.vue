<template>
  <!-- COMPONENTE CREADOR DE LINKS PERSONALIZADOS -->

  <a
    v-if="isExternalLink"
    :href="link.to"
    target="_blank"
    class="external-link link"
    >{{ link.name }}</a
  >

  <router-link v-else :to="route" v-slot="{ isActive }">
    <!--El v-slot sirve para extraer propiedades del routerlink,
     ej: href y isActive 
     Luego validamos si el link es el activo y le agregamos una clase de css-->

    <a :class="isActive ? 'active-link link' : 'normal-link link'"
      >{{ link.name }}
    </a></router-link
  >
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      //VALIDAMOS SI ES UN LINK EXTERNO
      return this.link.to.startsWith("http");
    },

    route() {
      //Validamos y devovemos la ruta del routerlink
      return this.link.id != undefined
        ? { name: this.link.to, params: { id: this.link.id } }
        : { name: this.link.to };
    },
  },
};
</script>


<style scoped>
a {
  text-decoration: none !important;
}

.link {
  font-weight: bold;
  margin: 5px;
  color: gray;
  padding: 10px;
  border: solid 1px gray;
  border-radius: 30px;
}

.external-link {
  background-color: blue;
  color: white;
}

.active-link {
  background-color: gray;
  color: white;
}
</style>
