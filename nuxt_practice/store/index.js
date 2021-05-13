export const state = () => ({
  brand: 'Toyota',
  model: 'Land Cruiser',
  spec: {
    engine: 'petrol',
    gearbox: 'automatic',
    acceleration: 6,
    displacement: 5.7,
    turbo: 'no'
  },
  introduction: "The Toyota Land Cruiser (Japanese: トヨタ・ランドクルーザー, Toyota Rando-Kurūzā) (also sometimes spelled as LandCruiser) is a series of four-wheel drive vehicles produced by the Japanese automobile manufacturer Toyota. It is Toyota's longest running series of models and the second longest-running SUV in production behind the Chevrolet Suburban. As of 2019, the sales of the Land Cruiser totalled more than 10 million units worldwide. Production of the first generation of the Land Cruiser began in 1951 as Toyota's version of a Jeep-like vehicle. The Land Cruiser has been produced in convertible, hardtop, station wagon and cab chassis body styles. The Land Cruiser's reliability and longevity have led to huge popularity, especially in Australia, where it is the best-selling body-on-frame, four-wheel drive vehicle. Toyota also extensively tests the Land Cruiser in the Australian outback – considered to be one of the toughest operating environments in both temperature and terrain. In Japan, the Land Cruiser is exclusive to Toyota Japanese dealerships called Toyota Store. As of 2018, the Land Cruiser (J200) is available in many markets. Exceptions include Canada, Malaysia (which receives the Lexus LX instead), Hong Kong, Macau, Singapore, South Korea, Brazil, Thailand, and large parts of Europe. In Europe, the only countries where the Land Cruiser is officially sold are Gibraltar, Moldova, Russia, and Ukraine. The Land Cruiser is also hugely popular in Africa, where it is used by farmers, NGO's, UN and humanitarian organizations, by national armies (often the pickup version) as well as by irregular armed groups who turn them into 'technicals' by mounting machine guns in the rear.",
  history: "When the Imperial Japanese Army occupied the Philippines in 1941, they found an American Jeep and promptly sent it to Japan. The Japanese military authorities ordered Toyota to produce a similar vehicle but to alter the appearance. The resulting Model AK prototype led to the Yon-Shiki Kogata Kamotsu-Sha (四式小型 貨物 車 type 4 compact cargo-truck). The Imperial Army was already using the Kurogane Type 95 four wheel drive reconnaissance car starting in 1936. Later in 1941, the Japanese government instructed Toyota to produce a light truck for Japan's military. In 1942, Toyota developed the AK10 prototype by reverse-engineering a Bantam GP. The half-ton truck features an upright front grille, flat front wheel arches that angled down and back like the FJ40, headlights mounted above the wheel arches on either side of the radiator, and a folding windshield. The AK10 is powered by the 2,259 cc (2.3 L), 4-cylinder Type C engine from the Toyota Model AE sedan coupled to a three-speed manual transmission and a two-speed transfer gearbox. Unlike the U.S. Jeep, the AK10 had limited use and photographs of it in the battlefield are rare. In June 1954, responding to claims of trademark violation by the Willys Company that produced the original Jeep, then Director of Technology Hanji Umehara renamed the vehicle 'Land Cruiser.' The postwar Toyota 'Jeep' BJ is completely different from the AK10 and inherits no mechanical parts from it. However, a lot of lessons learned while developing the AK10 were applied when developing the BJ."
})

export const getters = {
  capital_brand(state) {
    return state.brand.toUpperCase()
  }
}
