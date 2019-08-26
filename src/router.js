import Vue from 'vue'
import Router from 'vue-router'
/*  components */
import Header from './components/pagesParts/Header.vue'
import Footer from './components/pagesParts/Footer.vue'

/* views */
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: Header,
        default: Home,
        footer: Footer
      }
    }
  ]
})
