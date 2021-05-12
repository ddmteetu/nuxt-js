<template>
  <div id="spec">
    <gallery />
    <ul id="list">
      <li v-for="(value, key, index) in $store.state.car_info.spec">
        <b>{{key}}</b> : <i>{{value}}</i>
      </li>
    </ul>
  </div>
</template>

<script>
  import gallery from '@/components/gallery'

  export default {
    components: {
      gallery
    }
  }
</script>

<style scoped>
  #list {
    font-size: 16px;
  }
</style>
