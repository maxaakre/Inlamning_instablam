<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  min-width: 380px;
  border: 1px solid black;
  border-radius: 5px;
}
canvas {
  width: 400px;
}
@media screen and (min-width: 768px) {
  .wrapper {
    max-width: 800px;
  }
}

@media screen and (min-width: 1024px) {
  .wrapper {
    max-width: 1200px;
  }
}
</style>
