<template>
  <div style="padding: 15px;">
    <b-card
      border-variant="primary"
      footer-bg-variant="primary"
      text-variant="primary"
    >
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/id/_id.vue</span>
      </p>
      <b-alert show variant="primary">
        <i class="fas fa-map-marked-alt"></i>
        <b>ID: </b>
        <b>{{$route.params.id}}</b>
      </b-alert>
      <div slot="footer">
        <span style="color: white;">Dynamic Route</span>
      </div>
    </b-card>
    <hr>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  export default {
    // transition: {
    //  name: 'prefix'
    // },
    head() {
      return {
        title: 'Dynamic Route'
      }
    }
  }
</script>

<style scoped>

</style>
