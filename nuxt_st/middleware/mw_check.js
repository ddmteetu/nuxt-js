export default function(context) {
  if (/^\d+$/.test(context.params.id)) {
    if (context.params.id > 0 && context.params.id < 100) {
      return true
    } else {
      context.redirect('/id/1') // to redirect all ID values > 99 to ID = 1
      // context.error({
      //   message: 'ID must be between 1 and 99',
      //   statusCode: 555
      // })
    }
  } else {
    context.error('ID must be a number!') // context.error to trigger the 'error page'
  }
}
