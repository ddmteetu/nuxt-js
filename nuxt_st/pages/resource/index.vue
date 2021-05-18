<template>
  <div id="resource">
    <b-alert show variant="info">
      {{data_msg}}
    </b-alert>
    <hr />
    <b-alert show variant="success">
      {{msg}}
      <hr />
      {{id}}
    </b-alert>
    <hr />
    <b-alert show variant="primary">
      {{$store.state.msg}}
      <hr />
      {{$store.state.id}}
    </b-alert>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'RESOURCE: pages/resource/index.vue',
        meta: [
          { hid: 'description', name: 'description', content: 'RESOURCE PAGE' }
        ]
      }
    },
    data() {
      return {
        data_msg: "msg in data..."
      }
    },
    /* async fetch(context) {
      console.log(context)
      try{
        const response = await context.$axios.get('http://localhost:9000/retrieve')
        context.store.commit('reset_both', response.data)
      } catch(err){
        context.error({
          message: err.message
        })
      }
    }, */
    asyncData(context) {
      return context.$axios.get('http://localhost:9000/retrieve')
        .then((res) => {
          return res.data
        })
        .catch((error) => {
          // context.error(), context.redirect()
          /* context.error({
            message: 'ajax problem, sorry...'
          }) */
          context.redirect('/')
        })
    }
  }
</script>

<style scoped>
  #resource {
    text-align: center;
  }

  /* #frame {
    margin: 0 auto;
    width: 300px;
    height: 255px;
    background-image: url('/static.jpg'); using static files
    background-image: url('~assets/asset.jpg'); using assets files (~/, @/, ~ only, but not @ only will work)
  } */
</style>
