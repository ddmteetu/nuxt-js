export default function(context) {
  if (context.app.$cookies.get('is_login')) {

  } else {
    if (process.server) {
       // user visit spec or history page directly
       context.redirect('/'+context.params.id) // redirect to the 'introduction page'
    } else {
      alert('Please login first...')
      context.redirect('/') // redirect to the homepage
    }
  }
}
