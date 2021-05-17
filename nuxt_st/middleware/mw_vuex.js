export default function(context) {
  // console.log(context.store.state.msg)
  // console.log(context.store.state.module_1.msg)
  // context.store.commit('reset_msg', 'hi from mw')
  // context.store.commit('module_1/reset_msg', 'hi from mw')
  context.app.head.title = 'Title by MW'
}
