<template>
  <div class="wrappe">
    <div class="content">
        <h1>Take a photo and add som filter!</h1>
        <hr/>
        <video id="me" class="camera"></video>
    <img src="" id="photo"  style="width: 100%;" />
      <button id="addImage" class="button">Take a screenshoot!</button>
      <button id="test">Tillåt Nortiser</button>
      <div class="filters">
      <div class="filter">
        <label for="brightness">Brightness</label>
        <input type="range" min="-100" max="100" step="1" value="0" data-filter="brightness">
      </div>
      <div class="filter">
        <label for="contrast">Contrast</label>
        <input type="range" min="-100" max="100" step="1" value="0" data-filter="contrast">
      </div>
      <div class="filter">
        <label for="saturaction">Saturaction</label>  
        <input type="range" min="-100" max="100" step="1" value="0" data-filter="saturation">
      </div>
      <div class="filter">
        <label for="vibrance">Vibrance</label>
        <input type="range" min="-100" max="100" step="1" value="0" data-filter="vibrance">
      </div>
      <div class="filter">
        <label for="exposure">Exposure</label>
        <input type="range" min="-100" max="100" step="1" value="0" data-filter="exposure">
      </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'home.vue',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content{
  display: flex;
  flex-flow: column;

}
#me{
  
  width: 400px;
  margin: auto;
}
img{
max-width: 400px;
margin: 1rem auto;

}
button{
  padding: 2rem;
  width: 200px;
  margin: 1rem auto;
  border-radius: 5px;
  color: white;
  background: black;
  font-size: 14px;
  &:hover{
    background: white;
    color: black;
  }
}
.filters{
  width: 80%;
  margin: auto;
  label{
    margin: auto;
    padding: 1.5rem; 
  }
  filter{
    width: 200px;
 
  }

}
@media screen and (min-width: 768px){
#me{
  width: 700px;
  height: 400px;
}

}
@media screen and (min-width: 1024px){
#me{
  width: 800px;
  height: 500px;
}
}

</style>
