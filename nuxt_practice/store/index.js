export const state = () => ({
  list: [

  ]
})

export const mutations = {
  set_list(state, arg) {
    state.list = arg
  },
  set_image(state, arg) {
    state.list[arg[0]].image = arg[1]
  }
}

export const actions = {
  async nuxtServerInit(store, context) {
    try {
      const response = await context.$axios.get('http://localhost:9000/home')
      if (response.data[0]) {
        store.commit('set_list', response.data[1])
      } else {
        context.error({
          message: 'database error...'
        })
      }
    } catch(e) {
      context.error({
        message: e.message
      })
    }
  }
}
