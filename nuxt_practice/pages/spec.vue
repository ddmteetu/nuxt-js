<template>
  <div class="container">
    <h1 class="heading">Technical Specifications:</h1>
    <gallery />
    <ul class="tech-specs">
      <li><b>engine</b> : <i>Petrol</i></li>
      <li><b>gearbox</b> : <i>Automatic</i></li>
      <li><b>acceleration</b> : <i>6.0</i></li>
      <li><b>displacement</b> : <i>5.7</i></li>
      <li><b>turbo</b> : <i>No</i></li>
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
