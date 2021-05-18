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
    },
    fetch(context) {
      return context.$axios.get('http://localhost:9000/image/'+context.params.id)
        .then((res) => {
          if (res.data[0]) {
            context.store.commit('set_image', [context.params.id, res.data[1]])
          } else {
            context.store.commit('set_image', [context.params.id, '/error.gif'])
          }
        })
        .catch((err) => {
          context.store.commit('set_image', [context.params.id, '/error.gif'])
        })
    }
  }
</script>

<style>

</style>
