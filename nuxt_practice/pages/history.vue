<template>
  <div class="container">
    <h1>History:</h1>
    <gallery />
    <div class="description">
      When the Imperial Japanese Army occupied the Philippines in 1941, they found an American Jeep and promptly sent it to Japan. The Japanese military authorities ordered Toyota to produce a similar vehicle but to alter the appearance. The resulting Model AK prototype led to the Yon-Shiki Kogata Kamotsu-Sha (四式小型 貨物 車 type 4 compact cargo-truck). The Imperial Army was already using the Kurogane Type 95 four wheel drive reconnaissance car starting in 1936. Later in 1941, the Japanese government instructed Toyota to produce a light truck for Japan's military. In 1942, Toyota developed the AK10 prototype by reverse-engineering a Bantam GP. The half-ton truck features an upright front grille, flat front wheel arches that angled down and back like the FJ40, headlights mounted above the wheel arches on either side of the radiator, and a folding windshield. The AK10 is powered by the 2,259 cc (2.3 L), 4-cylinder Type C engine from the Toyota Model AE sedan coupled to a three-speed manual transmission and a two-speed transfer gearbox. Unlike the U.S. Jeep, the AK10 had limited use and photographs of it in the battlefield are rare. In June 1954, responding to claims of trademark violation by the Willys Company that produced the original Jeep, then Director of Technology Hanji Umehara renamed the vehicle 'Land Cruiser.' The postwar Toyota 'Jeep' BJ is completely different from the AK10 and inherits no mechanical parts from it. However, a lot of lessons learned while developing the AK10 were applied when developing the BJ.
    </div>
  </div>
</template>

<script>
  import gallery from '~/components/gallery.vue'

  export default {
    head() {
      return {
        title: 'History',
        meta: [
          { hid: 'description', name: 'description', content: 'History of Toyota Land Cruiser' }
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
