<template>
  <div class="wrapper">
    <div class="content">
      <p class="hide">
        <a class="fav" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </p>
      <img src="../../public/images/icons/icon192x192.png" class="camera" alt />
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
p {
  display: none;
}
.wrapper {
  width: 100%;
  height: 100vh;
  margin: auto;
}
.content {
  display: flex;
  flex-flow: column;
  width: 100%;
}
.hide {
  display: none;
}
h1 {
  margin: auto;
  padding: 1rem;
}
.camera {
  width: 70px;
  margin: auto;
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
@media screen and (min-width: 768px) {
  .hide {
    display: unset;
  }
  .fav {
    font-size: 30px;
    display: block;
    text-decoration: none;
    color: black;
  }
  h1 {
    padding: 0;
  }
  footer {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  .fav {
    display: block;
  }
  .controll {
    margin: 0.5rem 0;
  }
  footer {
    display: none;
  }
}
</style>
