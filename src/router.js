import Vue from "vue"
import Router from "vue-router"

import Home from "@/views/Home"
import About from "@/views/About"
import Error from "@/views/Error"
import CoinDetail from "@/views/CoinDetail"

Vue.use(Router)

export default new Router({
	mode: "history",
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			const position = {}

			if (to.hash) {
				position.selector = to.hash

				if (to.hash === "#footer") {
					position.offset = { y: 100 }
				}

				if (document.querySelector(to.hash)) {
					return position
				}

				return false
			}
		}
	},

	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/about",
			name: "about",
			component: About,
		},
		{
			path: "*",
			name: "Error",
			component: Error,
		},
		{
			path: "/coin/:id",
			name: "coin-detail",
			component: CoinDetail,
		},
	],
})
