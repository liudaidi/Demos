import Vue from 'vue'
import Router from "vue-router"
import home from "../views/home.vue"
import sortment from "../views/sortment.vue"
import shopCar from "../views/shopCar.vue"
import my from "../views/my.vue"
import search from "../views/search.vue"
import shopdetail from "../views/shopdetail.vue"
import run from "../views/run.vue"
import address from "../views/address.vue"
import user from "../views/user.vue"
import pay from "../views/pay.vue"
import preferential from "../views/preferential.vue"
import tabdetail from "../views/tabdetail.vue"
import register from "../views/register.vue"
import login from "../views/login.vue"
import config from "../views/config.vue"
import write from "../views/write.vue"
import count from "../views/count.vue"
import code from "../views/code.vue"
Vue.use(Router)
export default new Router({
	routes:[
		{
			path:"*",
			redirect:"/home"

		},
		{
			path:"/home",
			component:home

		},
		{
			path:"/sortment",
			component:sortment

		},
		{
			path:"/shopCar",
			component:shopCar

		},
		{
			path:"/my",
			component:my

		},
		{
			path:"/search",
			component:search

		},
		{
			path:"/shopdetail/:id",
			component:shopdetail

		},
		{
			path:"/run",
			component:run

		},
		{
			path:"/address",
			component:address

		},
		{
			path:"/user/:index",
			name:"user",
			component:user

		},
		{
			path:"/pay",
			component:pay

		},
		{
			path:"/preferential/:id",
			component:preferential

		},
		{
			path:"/tabdetail/:id",
			component:tabdetail

		},
		{
			path:"/register",
			component:register

		},
		{
			path:"/login",
			component:login

		},
		{
			path:"/config",
			component:config

		},
		{
			path:"/write",
			component:write

		},
		{
			path:"/count",
			component:count

		},
		{
			path:"/code",
			component:code

		},
	]
})