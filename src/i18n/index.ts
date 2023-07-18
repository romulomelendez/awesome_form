import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locale/en.json'
import ptBRTranslations from './locale/ptBR.json'

void i18n.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false
    },
    resources: {
        en: {...enTranslations},
        // es: {},
        // fr: {},
        ptBR: {...ptBRTranslations},
    }
    
})


export default i18n