import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store';
import Education from './components/Education.vue'
import Project from './components/Project.vue'
import Profile from './components/Profile.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
			{ path: '/', name: "Profile", component: Profile, props: true},
			{ path: '/Education/:lang', name: "Education", component: Education, props: true},
			{ path: '/WorkExperience/:lang', name: "Work Experience", component: Project, props: true},
			{ path: '/MajorSchoolProjects/:lang', name: "Major School Projects", component: Project, props: true},
			{ path: '/AwardsAndLeadership/:lang', name: "Awards and Leadership", component: Project, props: true},
			{ path: '/TeachingExperience/:lang', name: "Teaching Experience", component: Project, props:true},
			{ path: '/Publications/:lang', name: "Publications", component: Project, props:true},
			{ path: '/Conferences/:lang', name: "Conferences", component: Project, props:true}
		],
	scrollBehavior: function (to) {
		if (to.hash) {
			return {
				selector: to.hash
			}
		}
	},
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')