<template>
  <div>
    <video id="me" class="camera"></video>
    <!-- <canvas id="photo" style="width:400px;height:400px"></canvas> -->
    <img src id="photo" />
    <div class="button">
      <button @click="captureImage" class="button">Take a screenshoot!</button>
      <button id="test">Tillåt Nortiser</button>
    </div>
    <div class="filters">
      <div class="filter">
        <label for="brightness">Brightness</label>
        <input
          type="range"
          min="-100"
          max="100"
          step="1"
          :value="0"
          id="brightness"
          data-filter="brightness"
          v-on:change="changeBrightness"
        />
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
</template>

<script>
export default {
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
    renderCaman() {
      this.Caman("#photo", this.imgUrl, function() {
        this.render();
      });
    },
    changeBrightness(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.brightness(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
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
      document.querySelector("#photo").style.width = "400px";
      setTimeout(() => {
        // document.querySelector("#photo").src = this.imgUrl;
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
          // randomiseHue(videoElem);
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
canvas {
  width: 400px;
  margin: auto;
}
</style>