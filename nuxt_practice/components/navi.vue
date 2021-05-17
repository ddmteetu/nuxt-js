<template>
  <div id="navi_bar">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link :to="'/'+$route.params.id">Introduction</nuxt-link>
    <nuxt-link :to="'/'+$route.params.id+'/spec'"><i class="fas fa-lock"></i> Tech Spec</nuxt-link>
    <nuxt-link :to="'/'+$route.params.id+'/history'"><i class="fas fa-lock"></i> History</nuxt-link>
  </div>
</template>

<style scoped>
  .active {
    background-color: green;
    color: white;
  }
  #navi_bar {
    text-align: center;
  }

  a {
    text-decoration: none;
    display: inline-block;
    width: 150px;
    margin: 10px;
    background-color: white;
    color: green;
    border: 1px solid green;
    font-size: 20px;
    line-height: 32px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    border-radius: 4px;
  }

  #navi_bar a:hover {
    background-color: green;
    color: white;
    border: 1px solid green;
  }

  #navi_bar a:active {
    background-color: green;
    color: white;
    border: 1px solid green;
    text-decoration: underline;
  }
</style>
