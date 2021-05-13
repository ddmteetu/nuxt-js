<template>
  <div id="resource">
    <img src="~/assets/asset.jpg" />
    <hr />
    <img src="/static.jpg" />
    <!-- <hr />
    <div id="frame"></div> -->
    <hr />
    <img :src="image[0]" />
    <hr />
    <img :src="image[1]" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        image: [
          '~/assets/asset.jpg',
          '/static.jpg'
        ]
      }
    }
  }
</script>

<style scoped>
  #resource {
    text-align: center;
  }

  /* #frame {
    margin: 0 auto;
    width: 300px;
    height: 255px;
    background-image: url('/static.jpg'); using static files
    background-image: url('~assets/asset.jpg'); using assets files (~/, @/, ~ only, but not @ only will work)
  } */
</style>
