<template>
  <div class="wrappe">
    <div class="content">
      <h1>Take a photo and add some filter!</h1>
      <hr />
      <Camera />
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
.content {
  display: flex;
  flex-flow: column;
}
#me {
  width: 380px;
  margin: auto;
}
canvas {
  max-width: 400px;
  max-height: 200px;
  padding: 0.5 auto;
}
button {
  padding: 2rem;
  width: 200px;
  // margin: 1rem auto;
  margin: 0.5rem;
  border-radius: 5px;
  color: white;
  background: black;
  font-size: 14px;
  &:hover {
    background: white;
    color: black;
  }
}
.filters {
  width: 80%;
  margin: auto;
  label {
    margin: auto;
    padding: 1.5rem;
  }
  filter {
    width: 200px;
  }
}
@media screen and (min-width: 768px) {
  #me {
    width: 700px;
    height: 400px;
  }
  button {
    margin: auto;
  }
}
@media screen and (min-width: 1024px) {
  #me {
    width: 800px;
    height: 500px;
  }
  canvas {
    margin: 1rem auto;
  }
}
</style>
