<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light rounded justify-content-center mb-2">
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
		<div class="navbar navbar-expand-lg navbar-light rounded justify-content-center">
			<ul class="navbar-nav">
				<li class="nav-item"><a class="mr-2 text-info" href="mailto:clarissamirandap@gmail.com"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
				</svg></a></li>
				<li class="nav-item"><a class="mr-2 text-info" href="https://github.com/clarismiranda" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
				</svg></a></li>
				<li class="nav-item"><a class="mr-2 text-info" href="https://www.researchgate.net/profile/Ana-Miranda-Pena" target="_blank"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-slash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
				</svg></a></li>
			</ul>
		</div>
		<ul class="nav nav-tabs flex-column" v-if="current_lang === 'EN'">
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Education', hash: '#view', params: { lang: 'EN' }}">Education</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Work Experience', hash: '#view', params: { lang: 'EN' }}">Work Experience</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Major School Projects', hash: '#view', params: { lang: 'EN' }}">Major School Projects</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Awards and Leadership', hash: '#view', params: { lang: 'EN' }}">Awards and Leadership</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Volunteer Experience', hash: '#view', params: { lang: 'EN' }}">Volunteer Experience</router-link></li>
		</ul>
		<ul class="nav nav-tabs flex-column" v-else>
			<li class="nav-item active"><router-link class="nav-link text-info" :to="{ name: 'Education', hash: '#view', params: { lang: 'ES' }}">Educación</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Work Experience', hash: '#view', params: { lang: 'ES' }}">Experiencia Profesional</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Major School Projects', hash: '#view', params: { lang: 'ES' }}">Proyectos Académicos</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Awards and Leadership', hash: '#view', params: { lang: 'ES' }}">Logros</router-link></li>
			<li class="nav-item"><router-link class="nav-link text-info" :to="{ name: 'Volunteer Experience', hash: '#view', params: { lang: 'ES' }}">Proyectos Sociales</router-link></li>
		</ul>
		<div class="accordion" id="tech">
			<div class="card">
				<div class="card-header bg-info border-info" id="headingOne">
					<h5 class="mb-0">
						<button class="btn btn-link btn-block text-left text-white text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" v-if="current_lang === 'EN'">
						Programming Languages
						</button>
						<button class="btn btn-link btn-block text-left text-white text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" v-else>
						Lenguajes de Programación
						</button>
					</h5>
				</div>
			<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#tech">
				<div class="card-body">
					<ul class="list-group">
						<li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in justPl" :key="item.title">
							{{item.title}} 
							<span class="badge badge-dark badge-pill"> {{item.years}} <span v-if="current_lang === 'EN'"> y</span>
							<span v-else> a</span>
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="card">
				<div class="card-header bg-info border-info" id="headingTwo">
					<h5 class="mb-0">
						<button class="btn btn-link btn-block text-left text-white text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" v-if="current_lang === 'EN'">
						Technologies
						</button>
						<button class="btn btn-link btn-block text-left text-white text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" v-else>
						Tecnologías
						</button>
					</h5>
				</div>
				<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#tech">
					<div class="card-body">
						<ul class="list-group">
							<li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in justSk" :key="item.title">
								{{item.title}} 
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		</div>
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