<template>
  <div style="padding: 15px;">
    <b-card
      border-variant="info"
      footer-bg-variant="info"
      text-variant="info"
    >
      <p>
        <i class="fas fa-file-code"></i>
        <span>pages/_id/index.vue</span>
      </p>
      <b-alert show variant="info">
        <i class="fas fa-map-marked-alt"></i>
        <b>ID: </b>
        <b>{{$route.params.id}}</b>
        <hr>
        <nuxt-link :to="{name: 'id-detail', params: {id: $route.params.id}}">
          Detail Page
        </nuxt-link>
      </b-alert>
      <div slot="footer">
        <span style="color: white;">Dynamic Route</span>
      </div>
    </b-card>
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
