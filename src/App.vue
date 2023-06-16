<template>
  <div id="app">
    <NavBarComponents />
    <ListadoComponent />
    <FooterComponent />
  </div>
</template>

<script>
import NavBarComponents from "./components/NavBarComponents.vue";
import ListadoComponent from "./components/ListadoComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavBarComponents,
    ListadoComponent,
    FooterComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
</style>
