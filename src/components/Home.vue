<template>
  <div class="wrapper">
    <div class="content">
      <h1>Take a photo and add some filter!</h1>
      <Camera />
      <footer>
        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </footer>
    </div>
  </div>
</template>

<script>
import Camera from "@/components/Camera.vue";

export default {
  name: "home.vue",
  components: {
    Camera
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.wrapper {
  width: 100%;
  height: 100vh;
  h1 {
    margin: auto;
  }
}
.content {
  display: flex;
  flex-flow: column;
}
footer {
  background: black;
  height: 30px;
  padding: 2rem;
  margin: auto;
  width: 100%;

  a {
    color: white;
  }
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 1024px) {
}
</style>
