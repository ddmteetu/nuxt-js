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
    },
    validate({params, query, store}) {
      if(/^\d+$/.test(params.id) && params.id < store.state.list.length) {
        return true
      } else {
        // return false
        throw new Error('Illegal ID Value...')
      }
    }
  }
</script>

<style>

</style>
