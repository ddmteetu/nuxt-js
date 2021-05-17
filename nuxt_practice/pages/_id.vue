<template>
  <div class="container">
    <gallery />
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
  import gallery from '~/components/gallery.vue'

  export default {
    components: {
      gallery
    }
  }
</script>

<style>

</style>
