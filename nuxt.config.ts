// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'fr', language: 'fr-FR', name: 'Français' },
      { code: 'es', language: 'es-ES', name: 'Español' },
      { code: 'de', language: 'de-DE', name: 'Deutsch' },
      { code: 'it', language: 'it-IT', name: 'Italiano' },
      { code: 'zh', language: 'zh-CN', name: '中文' },
      { code: 'ja', language: 'ja-JP', name: '日本語' },
      { code: 'ru', language: 'ru-RU', name: 'Русский' },
    ],
    strategy: 'no_prefix', //disables routes to have /en or /zh in the url
  },
  
})
