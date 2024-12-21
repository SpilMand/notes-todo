export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],
  components: {
    global: true,
    dirs: ['~/components/sections', '~/components/molecules', '~/components/atoms'],
  },
  modules: [
    '@pinia/nuxt',
  ]
})