<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-info justify-content-md-center mb-2">
			<span class="navbar-brand mb-0 h2 text-white" v-if="lang === 'EN'">Education</span>
			<span class="navbar-brand mb-0 h2 text-white" v-else>Educación</span>
		</nav>
		<div class="card mb-2" v-for="item in currentItems" :key="item.key">
			<div class="card-body">
				<h5 class="card-title">{{item.degree}}</h5>
				<h6 class="card-subtitle mb-2 text-muted">{{item.school}}</h6>
				<h6 class="card-subtitle mb-2 text-muted">{{item.start}} - {{item.end}}</h6>
				<p class="card-text">{{item.description}}</p>
				<p class="card-text"><span v-if="lang === 'EN'">Average: </span> <span v-else>Promedio: </span> {{item.average}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import education from './json/education.json'

	export default {
		name: 'Education',
		props: {
			lang: {
				type: String,
				default: 'EN'
			}
		},
		data(){
			return{
				items: education
			}
		},
		computed: {
			currentItems: function () {
				return this.items.filter(c => c.lang.indexOf(this.lang) > -1);
			}
		}
	}
</script>