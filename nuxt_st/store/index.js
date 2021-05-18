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
