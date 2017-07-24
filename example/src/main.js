import Vue from 'vue'
import App from './App.vue'

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

import { Button } from 'vue-multiple-button'
import 'vue-multiple-button/lib/button.css'
Vue.component('vm-button', Button)

import Notification from '../../src/index.js'
Vue.component(Notification.name, Notification)
Vue.prototype.$notify = Notification

Notification.config({})

new Vue({
  el: '#app',
  render: h => h(App)
})
