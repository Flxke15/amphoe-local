// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import '@/assets/fonts/Kanit-Regular.woff'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          'app-color': process.env.APP_COLOR,
        },
      },
    },
  },
})
