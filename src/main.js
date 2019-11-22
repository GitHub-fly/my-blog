import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
// 定义服务器地址前缀为全局变量
Vue.prototype.baseUrl = 'http://localhost:8080/api'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

