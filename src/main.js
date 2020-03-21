import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
//Step 1 -- Import and use VueRouter
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
//Step 3 - Register Routes
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')
