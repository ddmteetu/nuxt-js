export const state = () => ({
  list: [

  ]
})

export const mutations = {
  set_list(state, arg) {
    state.list = arg
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    try {
      const response = await context.$axios.get('http://localhost:9000/home')
      store.commit('set_list', response.data)
    } catch(e) {
      context.error({
        message: e.message
      })
    }
  }
}
