<template>
  <div id="vuex">
    {{$store.state.msg}}
    <hr />
    {{$store.state.module_1.msg}}
    <hr />
    <b-button @click="$store.commit('reset_msg', 'new msg value')">
      Reset MSG
    </b-button>
    <b-button @click="$store.commit('module_1/reset_msg', 'new module one msg value')">
      Reset Module ONE MSG
    </b-button>
  </div>
</template>

<script>
  export default {
    middleware: 'mw_vuex',
    head() {
      return {
        title: 'pages/vuex/index.vue'
      }
    }
  }
</script>

<style scoped>
  #vuex {
    font-size: 22px;
    padding: 10px;
  }
</style>
