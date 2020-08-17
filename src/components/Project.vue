<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light rounded justify-content-md-center mb-2">
			<span class="navbar-brand mb-0 h2" v-if="lang === 'EN'">{{this.$route.name}}</span>
			<span class="navbar-brand mb-0 h2" v-else>{{switchLang(this.$route.name)}}</span>
		</nav>
		<div class="card mb-2" v-for="item in currentProject.items" :key="item.key">
			<div class="card-body">
				<h5 class="card-title">{{item.title}}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{item.organization}}</h6>
				<h6 class="card-subtitle mb-2 text-muted">{{item.period}}</h6>
				<p class="card-text">{{item.description}}</p>
				<span class="badge badge-pill badge-dark mr-1 mb-2" v-for="tech in item.technologies" :key="tech">{{tech}}</span>
				<div class="card-footer bg-transparent">
					<a :href="item.link" class="btn btn-outline-dark float-right" v-if="item.link!=''" target="_blank"><span v-if="lang === 'EN'">More</span>
					<span v-else>Más</span></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import project from './json/project.json'

	export default {
		name: 'Project',
		props: {
			name: {
				type: String,
				default: 'Work Experience'
			},
			lang: {
				type: String,
				default: 'EN'
			},
			value: {
				type: Array,
				default: () => []
			}
		},
		data(){
			return{
				items: project
			}
		},
		methods: {
			switchLang: function (title) {
				switch(title) {
					case "Work Experience":
						return "Experiencia Profesional";
					case "Major School Projects":
						return "Proyectos Académicos";
					case "Awards and Leadership":
						return "Logros";
					case "Volunteer Experience":
						return "Proyectos Sociales";
				}
			},
		},
		computed: {
			currentProject: function () {
				return this.items.filter(c => {
					return c.section.indexOf(this.$route.name) > -1 && c.lang.indexOf(this.lang) > -1;
				})[0]
			}
		}
	}
</script>