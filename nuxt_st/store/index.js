import Vuex from 'vuex'
// import Vue from 'vue'
//
// Vue.use(Vuex)

const store = {
  state: {
    msg: 'msg in store/index.js state'
  },
  getters: {},
  mutations: {},
  actions: {}
}

// export default new Vuex.Store(store)
export default function() {
  return new Vuex.Store(store)
}
