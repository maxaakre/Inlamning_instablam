import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

import { requestNotificationPermission} from '../src/js/notifications.js';
import push from '../src/js/push-notifications';

requestNotificationPermission();

let stream = {};

async function captureImage(stream) {
  const mediaTrack = stream.getVideoTracks()[0];
  console.log(mediaTrack);
  const captureImg = new ImageCapture(mediaTrack);
  const photo = await captureImg.takePhoto()
  console.log(photo)
  const imgUrl = URL.createObjectURL(photo);
  console.log(imgUrl);
  document.querySelector('#photo').src = imgUrl;
}


async function getMedia() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const videoElem = document.querySelector('#me');
    videoElem.srcObject = stream;
    videoElem.addEventListener('loadedmetadata', () => {
      videoElem.play();
      // randomiseHue(videoElem);
    })
    console.log(stream);
  } catch (error) {
      console.log(error);
  }
}

getMedia();

document.querySelector('#addImage').addEventListener('click', () => {
    //document.querySelector('.shakespeare').classList.toggle('hide');
    captureImage(stream);
})

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Registered service worker'))
      .catch((error) => console.log('Error register service worker ', error));
      push();
  }
}

registerServiceWorker();

