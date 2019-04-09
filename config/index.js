const en = require('../lang/en-US.js')
const es = require('../lang/es-ES.js')
const fr = require('../lang/fr-FR.js')

// const API_ROOT = 'https://jsonplaceholder.typicode.com/'

const I18N = {
    locales: [
        {
            code: 'en',
            iso: 'en-US',
            name: 'English'
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          name: 'Français'
        },
        {
          code: 'es',
          iso: 'es-ES',
          name: 'Español'
        }
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, fr, es }
    }
}

module.exports = {
    // API_ROOT,
    I18N
}