<template>
  <ul class="tech-specs">
    <li v-for="(value, key, index) in spec" :key="index">
      <b>{{key}}</b> : <span>{{value}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
  asyncData(context) {
    return context.$axios.get('http://localhost:9000/spec/'+context.params.id)
      .then((res) => {
        if(res.data[0]) {
          return {spec: res.data[1]}
        } else {
          return {spec: 'Technical Specifications not available...'}
        }
      })
      .catch((err) => {
        return {spec: 'Technical Specifications not available...'}
      })
  },
  middleware: 'lock',
    head() {
      return {
        title: 'Technical Specifications',
        meta: [
          { hid: 'description', name: 'description', content: 'Technical Specification of Toyota Land Cruiser' }
        ]
      }
    }
  }
</script>

<style>
  .tech-specs {
    list-style: none;
    text-align: center;
    font-size: 18px;
  }
</style>
