<template>
  <ul class="tech-specs">
    <li v-for="(value, key, index) in $store.state.list[$route.params.id].spec" :key="index">
      <b>{{key}}</b> : <span>{{value}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
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
