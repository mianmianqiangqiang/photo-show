// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//----组件页面引入
import Home from './components/Home'
import HelloWorld from './components/HelloWorld'
import Message from './components/Message'
import Columns from './components/Columns'
//----路由引入
import Router from 'vue-router'
//css---导入
import './assets/css/bootstrap.min.css'
import './assets/css/hero-slider-style.css'
import './assets/css/magnific-popup.css'
import './assets/css/templatemo-style.css'

//js ---引入
import $ from 'jquery'
//import './assets/js/tether.min.js'
//import './assets/js/bootstrap.min.js'
//import './assets/js/hero-slider-main.js'
//import './assets/js/jquery.magnific-popup.min.js'

// vue-resource---引入
import VueResource from 'vue-resource'

Vue.use(Router)
Vue.use(VueResource)
Vue.config.productionTip = false
//-----配置路由
const router = new Router({
	routes: [{
			path: '/',
			component: Home
		},
		{
			path: '/helloworld',
			component: HelloWorld
		},
		{
			path: '/message',
			component: Message
		},
		{
			path: '/columns',
			component: Columns
		}
	],
	mode: "history"
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})