<template>
  <div>
    <Header />
    <Main>
      <Nuxt />
    </Main>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Main from '@/components/main'
  import Footer from '@/components/footer'

  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>
