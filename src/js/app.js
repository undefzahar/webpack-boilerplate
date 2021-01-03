import '../scss/app.scss';

/* Your JS Code goes here */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.component('header-component', require('./components/header.vue').default)
Vue.component('footer-component', require('./components/footer.vue').default)

import Foo from './components/foo.vue'
import Bar from './components/bar.vue'

const router = new VueRouter({
	mode: 'history',
	routes: [
		// { path: '/', component: Home },
		{ path: '/foo', component: Foo },
		{ path: '/bar', component: Bar }
	]
})

const app = new Vue({
	router
}).$mount('#app')

// /* JS */
import './demo.js';
