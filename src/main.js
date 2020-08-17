import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Education from './components/Education.vue'
import Project from './components/Project.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
			{ path: '/', name: 'Profile'},
			{ path: '/Education/:lang', name: "Education", component: Education, props: true},
			{ path: '/WorkExperience/:lang', name: "Work Experience", component: Project, props: true},
			{ path: '/MajorSchoolProjects/:lang', name: "Major School Projects", component: Project, props: true},
			{ path: '/AwardsAndLeadership/:lang', name: "Awards and Leadership", component: Project, props: true},
			{ path: '/VolunteerExperience/:lang', name: "Volunteer Experience", component: Project, props:true}
		]
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')