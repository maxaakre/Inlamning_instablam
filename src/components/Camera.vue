<template>
  <div>
    <video id="me" class="camera"></video>
    <canvas id="photo"></canvas>
    <a class="download" id="download"></a>
    <div class="button">
      <button @click="captureImage" class="button">Take a screenshoot!</button>
      <button id="test">Tillåt Nortiser</button>
      <button @click="downloadImg">Download photo</button>
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
        <input
          type="range"
          min="-100"
          max="100"
          step="1"
          value="0"
          data-filter="contrast"
          v-on:change="changeContrast"
        />
      </div>
      <div class="filter">
        <label for="saturaction">Saturaction</label>
        <input
          type="range"
          min="-100"
          max="100"
          step="1"
          value="0"
          data-filter="saturation"
          v-on:change="changeSaturaction"
        />
      </div>
      <div class="filter">
        <label for="vibrance">Vibrance</label>
        <input
          type="range"
          min="-100"
          max="100"
          step="1"
          value="0"
          data-filter="vibrance"
          v-on:change="changeVibrance"
        />
      </div>
      <div class="filter">
        <label for="exposure">Exposure</label>
        <input
          type="range"
          min="-100"
          max="100"
          step="1"
          value="0"
          data-filter="exposure"
          v-on:change="changeExposure"
        />
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
    changeContrast(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.contrast(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeSaturaction(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.saturation(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeVibrance(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.vibrance(value - this.oldValue);
        this.oldValue = value;
        this.render();
      });
    },
    changeExposure(event) {
      const value = parseInt(event.target.value);
      console.log(event.target.value);
      this.Caman("#photo", this.imgUrl, function() {
        if (value < -10 && value < 10) {
          this.revert();
        }
        this.exposure(value - this.oldValue);
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
      setTimeout(() => {
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
  width: 80%;
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

canvas[style] {
  max-width: 300px;
  margin: auto;
}
</style>