<template>
  <div class="container">
    <h1>Introduction:</h1>
    <gallery />
    <div class="description">
      The Toyota Land Cruiser (Japanese: トヨタ・ランドクルーザー, Toyota Rando-Kurūzā) (also sometimes spelled as LandCruiser) is a series of four-wheel drive vehicles produced by the Japanese automobile manufacturer Toyota. It is Toyota's longest running series of models and the second longest-running SUV in production behind the Chevrolet Suburban. As of 2019, the sales of the Land Cruiser totalled more than 10 million units worldwide. Production of the first generation of the Land Cruiser began in 1951 as Toyota's version of a Jeep-like vehicle. The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis body styles. The Land Cruiser's reliability and longevity have led to huge popularity, especially in Australia, where it is the best-selling body-on-frame, four-wheel drive vehicle. Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store. As of 2018, the Land Cruiser (J200) is available in many markets. Exceptions include Canada, Malaysia (which receives the Lexus LX instead), Hong Kong, Macau, Singapore, South Korea, Brazil, Thailand, and large parts of Europe. In Europe, the only countries where the Land Cruiser is officially sold are Gibraltar, Moldova, Russia, and Ukraine. The Land Cruiser is also hugely popular in Africa, where it is used by farmers, NGO's, UN and humanitarian organizations, by national armies (often the pickup version) as well as by irregular armed groups who turn them into 'technicals' by mounting machine guns in the rear.
    </div>
  </div>
</template>

<script>
  import gallery from '~/components/gallery.vue'

  export default {
    head() {
      return {
        title: 'Introduction',
        meta: [
          { hid: 'description', name: 'description', content: 'Toyota Land Cruiser' }
        ]
      }
    },
    components: {
      gallery
    }
  }
</script>

<style>
  h1 {
    font-family: impact;
    color: green;
  }

  .description {
    font-size: 16px;
    line-height: 24px;
    margin: 10px;
  }
</style>
