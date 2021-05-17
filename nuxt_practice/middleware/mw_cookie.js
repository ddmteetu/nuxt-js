export default function(context) {
  if (process.server) {
    console.log(context.req.headers.cookie)
  } else {
    console.log(document.cookie)
  }
}
