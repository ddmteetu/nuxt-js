<template>
  <div class="container">
    <h1 class="heading">Technical Specifications:</h1>
    <gallery />
    <ul class="tech-specs">
      <li v-for="(value, key, index) in $store.state.spec" :key="index">
        <b>{{key}}</b> : <span>{{value}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import gallery from '~/components/gallery.vue'

  export default {
    head() {
      return {
        title: 'Technical Specifications',
        meta: [
          { hid: 'description', name: 'description', content: 'Technical Specification of Toyota Land Cruiser' }
        ]
      }
    },
    components: {
      gallery
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
