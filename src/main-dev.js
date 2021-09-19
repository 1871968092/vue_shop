import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

// 导入nprogress包对应的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
// 在request拦截器中展示进度条
NProgress.start()
Vue.prototype.$http = axios
axios.interceptors.request.use(config => {
  // console.log(config)
  // 在最后必须return config
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

// 在reponse拦截器中隐藏进度条
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
Vue.use(VueQuillEditor)

Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal * 1000)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d}-${hh}-${mm}-${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
