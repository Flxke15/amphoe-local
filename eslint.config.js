import vuetify from 'eslint-config-vuetify'
import vue from 'eslint-plugin-vue'
import vueA11y from 'eslint-plugin-vuejs-accessibility'

export default [
  // Vuetify base rules
  ...vuetify,

  // Vue files
  {
    files: ['**/*.vue'],
    plugins: {
      vue,
      'vuejs-accessibility': vueA11y,
    },
    rules: {
      // Accessibility rules (แนะนำ)
      'vuejs-accessibility/alt-text': 'error',
      'vuejs-accessibility/label-has-for': 'error',
      'vuejs-accessibility/aria-role': 'error',
      'vuejs-accessibility/tabindex-no-positive': 'error',

      // Vuetify friendly (ลด false positive)
      'vuejs-accessibility/form-control-has-label': 'off',
    },
  },
]
