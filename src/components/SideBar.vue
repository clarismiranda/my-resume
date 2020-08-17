<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light rounded justify-content-md-center mb-2">
			<ul v-if="current_lang === 'EN'" class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link active" v-on:click="changeLang('EN')">EN</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" v-on:click="changeLang('ES')">ES</a>
				</li>
			</ul>
			<ul v-else class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" v-on:click="changeLang('EN')">EN</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" v-on:click="changeLang('ES')">ES</a>
				</li>
			</ul>
		</nav>
		<div class="text-center">
			<h1 class="font-weight-bold">Ana Clarissa Miranda Peña</h1>
			<p v-if="current_lang === 'EN'">Masters Student in Computer Science</p>
			<p v-else>Estudiante de Maestría en Ciencias Computacionales</p>
		</div>
		<div class="navbar navbar-expand-lg navbar-light rounded justify-content-md-center">
			<ul class="navbar-nav">
				<li class="nav-item"><a class="mr-2" href="mailto:clarissamirandap@gmail.com"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
				</svg></a></li>
				<li class="nav-item"><a class="mr-2" href="https://github.com/clarismiranda" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
				</svg></a></li>
			</ul>
		</div>
		<ul class="nav nav-tabs flex-column mb-2" v-if="current_lang === 'EN'">
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Education', params: { lang: 'EN' }}">Education</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Work Experience', params: { lang: 'EN' }}">Work Experience</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Major School Projects', params: { lang: 'EN' }}">Major School Projects</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Awards and Leadership', params: { lang: 'EN' }}">Awards and Leadership</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Volunteer Experience', params: { lang: 'EN' }}">Volunteer Experience</router-link></li>
		</ul>
		<ul class="nav nav-tabs flex-column mb-2" v-else>
			<li class="nav-item active"><router-link class="nav-link" :to="{ name: 'Education', params: { lang: 'ES' }}">Educación</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Work Experience', params: { lang: 'ES' }}">Experiencia Profesional</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Major School Projects', params: { lang: 'ES' }}">Proyectos Académicos</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Awards and Leadership', params: { lang: 'ES' }}">Logros</router-link></li>
			<li class="nav-item"><router-link class="nav-link" :to="{ name: 'Volunteer Experience', params: { lang: 'ES' }}">Proyectos Sociales</router-link></li>
		</ul>
		<p class="h5" v-if="current_lang === 'EN'">Programming Languages</p>
		<p class="h5" v-else>Lenguajes de Programación</p>
		<ul class="list-group mb-2">
			<li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in justPl" :key="item.title">
				{{item.title}} 
				<span class="badge badge-dark badge-pill"> {{item.years}} <span v-if="current_lang === 'EN'"> y</span>
				<span v-else> a</span>
				</span>
			</li>
		</ul>
		<p class="h5" v-if="current_lang === 'EN'">Technologies</p>
		<p class="h5" v-else>Tecnologías</p>
		<ul class="list-group mb-2">
			<li class="list-group-item" v-for="item in justSk" :key="item.title">
				{{item.title}}
			</li>
		</ul>
	</div>
</template>

<script>
	import technology from './json/technology.json'

	export default {
		name: 'SideBar',
		props: {
			lang: {
				type: String,
				default: 'EN'
			}
		},
		data(){
			return{
				items: technology,
				current_lang: this.lang
			}
		},
		methods: {
			changeLang: function (lang) {
				this.current_lang = lang;
				this.$router.replace({ name: this.$route.name, params: { lang: lang} });
			}
		},
		computed: {
			justPl: function () {
				return this.items.filter(c => c.description.indexOf("pl") > -1);
			},
			justSk: function () {
				return this.items.filter(c => c.description.indexOf("sk") > -1);
			}
		}
	}
</script>