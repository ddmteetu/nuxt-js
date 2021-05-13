<template>
  <div class="container">
    <h1 class="heading">Introduction:</h1>
    <gallery />
    <div class="description">
      {{$store.state.introduction}}
    </div>
  </div>
</template>

<script>
  import gallery from '~/components/gallery.vue'

  export default {
    head() {
      return {
        title: 'Introduction',
        meta: [
          { hid: 'description', name: 'description', content: 'Toyota Land Cruiser' }
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
