<template>
  <div class="wrappe">
    <div class="content">
      <h1>Take a photo and add som filter!</h1>
      <hr />
      <Camera />

      <button id="test">Tillåt Nortiser</button>
      <div class="filters">
        <div class="filter">
          <label for="brightness">Brightness</label>
          <input type="range" min="-100" max="100" step="1" value="0" data-filter="brightness" />
        </div>
        <div class="filter">
          <label for="contrast">Contrast</label>
          <input type="range" min="-100" max="100" step="1" value="0" data-filter="contrast" />
        </div>
        <div class="filter">
          <label for="saturaction">Saturaction</label>
          <input type="range" min="-100" max="100" step="1" value="0" data-filter="saturation" />
        </div>
        <div class="filter">
          <label for="vibrance">Vibrance</label>
          <input type="range" min="-100" max="100" step="1" value="0" data-filter="vibrance" />
        </div>
        <div class="filter">
          <label for="exposure">Exposure</label>
          <input type="range" min="-100" max="100" step="1" value="0" data-filter="exposure" />
        </div>
      </div>
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
  width: 500px;
  margin: auto;
}
img {
  max-width: 400px;
  margin: 1rem auto;
}
button {
  padding: 2rem;
  width: 200px;
  margin: 1rem auto;
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
