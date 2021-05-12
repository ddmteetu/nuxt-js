<template>
  <div id="error_page">
    <li v-for="(value, key, index) in error" :key="index">
      <b>{{key}}: </b>{{value}}
    </li>
    <hr>
    <a href="/">Return to Home</a>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error_layout'
  }
</script>

<style scoped>
  #error_page {
    border: 2px dashed blue;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    font-size: 22px;
    line-height: 36px;
  }

  #error_page a {
    font-size: 24px;
    color: green;
    text-decoration: none;
  }

  #error_page a:hover {
    text-decoration: underline;
  }
</style>
