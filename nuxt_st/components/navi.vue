<template>
  <div id="navi">
    <nuxt-link to='/'>Home</nuxt-link>
    <nuxt-link :to="{name: 'resource'}">Resource</nuxt-link>
    <nuxt-link to='/ui'>UI</nuxt-link>
    <nuxt-link to='/vuex'>VueX</nuxt-link>
    <nuxt-link to='/route'>Route</nuxt-link>
    <nuxt-link :to="{name: 'route-my_route'}">Route: my_route</nuxt-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #navi {
    margin: 10px 0 20px 0;
    text-align: center;
  }

  #navi a {
    text-decoration: none;
    display: inline-block;
    padding: 5px 10px 5px 10px;
    font-size: 20px;
    line-height: 24px;
  }

  #navi a:hover {
    background-color: #007bff;
    color: white;
    border-radius: 4px;
  }
</style>
