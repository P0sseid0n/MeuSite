export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
   head: {
      htmlAttrs: {
         lang: 'pt',
      },
      meta: [
         { charset: 'utf-8' },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
   },

   target: 'static',

   // Global CSS: https://go.nuxtjs.dev/config-css
   css: [],

   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
   plugins: [],

   // Auto import components: https://go.nuxtjs.dev/config-components
   components: true,

   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
   buildModules: ['@nuxtjs/google-fonts'],

   googleFonts: {
      families: {
         'Source+Code+Pro': [400, 600, 700],
      },
   },

  // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
      // https://go.nuxtjs.dev/axios
      '@nuxtjs/axios',
      'vue-scrollto/nuxt',
      '@nuxtjs/robots',
      ['nuxt-social-meta', {
         locale: 'pt_BR',
         site_name: "P0sseid0n",
         img: "/Logo-128.png",
         img_size: { width: "128px", height: "128px" },
         twitter: "@p0sseid0n",
         theme_color: "#E94560"
      }]
   ],

   // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {},

   // Build Configuration: https://go.nuxtjs.dev/config-build
   build: {},

   generate: {
      fallback: true,
   },
}
