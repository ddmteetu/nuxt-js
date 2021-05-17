<template>
  <div class="description">
    {{$store.state.history}}
  </div>
</template>

<script>
  export default {
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
