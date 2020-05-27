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
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  // min-width: 320px;
  border-radius: 5px;
  height: 100vh;
}
canvas {
  width: 400px;
}
@media screen and (min-width: 768px) {
  .wrapper {
    max-width: 800px;
    height: 100vh;
  }
}

@media screen and (min-width: 1024px) {
  .wrapper {
    max-width: 1200px;
    height: 100vh;
  }
}
</style>
