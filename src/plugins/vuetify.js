import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#9652ff',
        secondary: '#3cd1c2',
        accent: '#ffaa2c',
        error: '#f83e70',
      },
    },
  }
});
