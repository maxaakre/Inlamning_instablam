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


<style lang="scss">
.wrapper {
  width: 100%;
  height: 100vh;
  margin: auto;
  h1 {
    margin: auto;
    padding: 1rem;
  }
}
.content {
  display: flex;
  flex-flow: column;
  width: 100%;
}
footer {
  background: black;

  padding: 2rem;
  margin: auto;
  width: 100%;

  a {
    height: 30px;
    color: white;
    text-decoration: none;
    font-size: 30px;
  }
}
</style>
