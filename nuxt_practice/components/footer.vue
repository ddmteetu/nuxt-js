<template>
  <div id="footer">
    Footer by comp./footer.vue + layout/default.vue
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  #footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    height: 55px;
    width: 100%;
    font-size: 18px;
    line-height: 55px;
    text-align: center;
    color: white;
    background-color: green;
  }
</style>
