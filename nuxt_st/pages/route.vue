<template>
  <div style="padding: 15px;">
    <b-card
      border-variant="primary"
      footer-bg-variant="primary"
      text-variant="primary"
    >
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/route.vue</span>
      </p>
      <b-alert show variant="primary">
        <i class="fas fa-map-marked-alt"></i>
        <span>http://localhost:3000/route</span>
        <b>{{$route.query.msg}}</b>
      </b-alert>
      <div slot="footer">
        <span style="color: white;">Nested Route</span>
      </div>
    </b-card>
    <hr>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  export default {
    middleware: 'mw1',
    // transition: {
    //   name: 'prefix'
    // },
    head() {
      return {
        title: 'pages/route.vue'
      }
    }
  }
</script>

<style scoped>

</style>
