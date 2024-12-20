export default {
  target: 'static',
  router: {
    base: '/test-2/'
  },

  css: ['@/assets/styles/main.scss'],
  components: {
    global: true,
    dirs: ['~/components/sections', '~/components/molecules', '~/components/atoms'],
  },
}