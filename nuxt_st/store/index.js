export const state = () => ({
  msg: 'initial msg...',
  id: 0
})

export const mutations = {
  reset_both(state, arg) {
    state.msg = arg.msg
    state.id = arg.id
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    try{
      const response = await context.$axios.get('http://localhost:9000/retrieve')
      store.commit('reset_both', response.data)
    } catch(err){
      context.error({
        message: err.message
      })
    }
  }
}
