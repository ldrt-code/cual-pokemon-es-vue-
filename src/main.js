// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import "./assets/css/styles.css"
import "./assets/css/pokemon.css"

import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { faRepeat, faHand, faSpinner } from '../node_modules/@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'

library.add(faRepeat, faHand, faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
