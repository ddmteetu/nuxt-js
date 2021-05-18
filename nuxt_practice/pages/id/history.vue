<template>
  <div class="description">
    {{history}}
  </div>
</template>

<script>
  export default {
  asyncData(context) {
    return context.$axios.get('http://localhost:9000/history/'+context.params.id)
      .then((res) => {
        if(res.data[0]) {
          return {history: res.data[1]}
        } else {
          return {history: 'History not available...'}
        }
      })
      .catch((err) => {
        return {history: 'History not available...'}
      })
  },
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
