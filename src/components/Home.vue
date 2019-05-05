<template>
  <div class="home">
    <div>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        controls
        indicators
        img-width="1024"
        img-height="480">
        <b-carousel-slide
          caption="First slide"
          img-src="../assets/FalconHeavy.jpg"
          ></b-carousel-slide>
        <b-carousel-slide
          caption="Second Slide"
          img-src="https://picsum.photos/1024/480/?image=12"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="Third Slide"
          img-src="https://picsum.photos/1024/480/?image=22"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <br><br>
  </div>
</template>

<script src="https://sdk.amazonaws.com/js/aws-sdk-2.283.1.min.js"></script>
<script>
  export default {
    name: 'home',
    data() {
      return {
        slide: 0,
        sliding: null,
        msg: 'Home!'
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
