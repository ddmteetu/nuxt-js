<template>
  <div id="navi">
    <nuxt-link :class="{'active-link': $route.path == '/'}" to='/'>Home</nuxt-link>
    <nuxt-link :class="{'active-link': $route.path == '/resource'}" :to="{name: 'resource'}">Resource</nuxt-link>
    <nuxt-link :class="{'active-link': $route.path == '/ui'}" to='/ui'>UI</nuxt-link>
    <nuxt-link :class="{'active-link': $route.path == '/vuex'}" to='/vuex'>VueX</nuxt-link>
    <nuxt-link :class="{'active-link': $route.path == '/route'}" to='/route'>Route</nuxt-link>
    <nuxt-link :class="{'active-link': $route.path == '/route/my_route'}" :to="{name: 'route-my_route'}">Route: my_route</nuxt-link>
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

  #navi a:hover, .active-link {
    background-color: #007bff;
    color: white;
    border-radius: 4px;
  }
</style>
