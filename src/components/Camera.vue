<template>
  <div>
    <video id="me" class="camera"></video>
    <img src id="photo" style="width: 100%;" />
    <button @click="captureImage" class="button">Take a screenshoot!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stream: {},
      imgUrl: ""
    };
  },
  mounted() {
    this.getMedia();
  },
  methods: {
    async captureImage() {
      console.log(this.stream);
      const mediaTrack = this.stream.getVideoTracks()[0];
      console.log(mediaTrack);
      const captureImg = new ImageCapture(mediaTrack);
      const photo = await captureImg.takePhoto();
      console.log(photo);
      const imgUrl = URL.createObjectURL(photo);
      console.log(imgUrl);
      document.querySelector("#photo").src = imgUrl;
      // setTimeout(() => {
      //     document.querySelector("#photo").src = this.imgUrl;
      //     // renderCaman();
      //   }, 2000);
    },
    // async captureImage(stream) {
    //   const mediaTrack = stream.getVideoTracks()[0];
    //   const captureImg = new ImageCapture(mediaTrack);
    //   const photo = await captureImg.takePhoto();
    //   //Gör om den från en blob (binär data) till en url
    //   this.imgUrl = URL.createObjectURL(photo);
    //   setTimeout(() => {
    //     document.querySelector("#photo").src = this.imgUrl;
    //     // renderCaman();
    //   }, 2000);
    // },

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

<style lang="scss" scoped>
</style>