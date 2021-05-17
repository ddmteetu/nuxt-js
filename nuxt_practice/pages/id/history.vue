<template>
  <div class="description">
    {{$store.state.list[$route.params.id].history}}
  </div>
</template>

<script>
  export default {
    middleware: 'lock',
    head() {
      return {
        title: 'History',
        meta: [
          { hid: 'description', name: 'description', content: 'History of Toyota Land Cruiser' }
        ]
      }
    }
  }
</script>

<style>

</style>
