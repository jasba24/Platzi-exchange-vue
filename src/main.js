import Vue from "vue"
import Chartkick from "vue-chartkick"
import Chart from "highcharts"
import { VueSpinners } from "@saeris/vue-spinners"
import App from "./App.vue"
import "@/assets/css/tailwind.css"

import router from "@/router"
import { dollarFilter, percentFilter } from "./filters"

Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))
Vue.filter("dollar", dollarFilter)
Vue.filter("percent", percentFilter)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount("#app")
