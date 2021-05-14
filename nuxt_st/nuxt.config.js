module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt_st',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: ['@/assets/page_structure.css', '@/assets/transition.css', '@/assets/animate.css'],
  // plugins: ['@/plugins/bootstrap.js']
  modules: [
    'bootstrap-vue/nuxt'
  ],
  router: {
    // linkExactActiveClass: 'active'
    // linkActiveClass: 'active'
  }
}
