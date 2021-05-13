<template>
  <div class="container">
    <h1 class="heading">History:</h1>
    <gallery />
    <div class="description">
      {{$store.state.history}}
    </div>
  </div>
</template>

<script>
  import gallery from '~/components/gallery.vue'

  export default {
    head() {
      return {
        title: 'History',
        meta: [
          { hid: 'description', name: 'description', content: 'History of Toyota Land Cruiser' }
        ]
      }
    },
    components: {
      gallery
    }
  }
</script>

<style>

</style>
