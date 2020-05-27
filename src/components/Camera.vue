<template>
  <div>
    <div class="button">
      <button @click="captureImage" class="button">Take a screenshoot!</button>
      <button id="test">Tillåt Nortiser</button>
      <button @click="downloadImg">Download photo</button>
      <button @click="clearButton">Clear</button>
    </div>
    <video id="me" class="camera"></video>
    <canvas id="photo" v-show="imgUrl"></canvas>
    <a class="download" id="download"></a>
    <Filters :imgUrl="imgUrl" />
  </div>
</template>

<script>
import Filters from "@/components/Filters.vue";
export default {
  components: {
    Filters
  },
  data() {
    return {
      stream: {},
      imgUrl: "",
      oldValue: ""
    };
  },
  mounted() {
    this.getMedia();
  },
  methods: {
    clearButton() {
      if (document.querySelector("canvas") !== null) {
        document.querySelector("#photo").removeAttribute("data-caman-id");
        this.renderCaman("#photo", this.imgUrl);
      }
    },
    renderCaman() {
      this.Caman("#photo", this.imgUrl, function() {
        this.render();
      });
    },
    downloadImg() {
      const canvas = document.querySelector("canvas");
      const img = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const link = document.getElementById("download");
      link.setAttribute("download", "FiltredImg.png");
      link.setAttribute("href", img);
      link.click();
    },

    async captureImage() {
      console.log(this.stream);
      const mediaTrack = this.stream.getVideoTracks()[0];
      console.log(mediaTrack);
      const captureImg = new ImageCapture(mediaTrack);
      const photo = await captureImg.takePhoto();
      console.log(photo);
      const imgUrl = URL.createObjectURL(photo);
      console.log(imgUrl);
      this.imgUrl = imgUrl;

      document.querySelector("#photo").src = imgUrl;
      this.$refs.setTimeout(() => {
        this.renderCaman();
      }, 2000);
    },

    async getMedia() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        const videoElem = document.querySelector("#me");
        videoElem.srcObject = this.stream;
        videoElem.addEventListener("loadedmetadata", () => {
          videoElem.play();
        });
        console.log(this.stream);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" >
#me {
  width: 300px;
  padding: 1rem;
  margin: auto;
}
canvas {
  max-width: 380px;
  max-height: 200px;
  padding: 1rem auto;
}
button {
  padding: 1rem;
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
  width: 100%;
  margin: auto;
  padding: 1rem;
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
    height: 300px;
  }
  button {
    margin: auto;
  }
}
@media screen and (min-width: 1024px) {
  #me {
    width: 800px;
    height: 400px;
  }
  canvas {
    margin: 1rem auto;
  }
}

canvas[style] {
  max-width: 300px;
  margin: auto;
}
</style>