<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-white justify-content-md-center mb-2">
			<span class="navbar-brand mb-0 h2 text-white" v-if="$store.getters.lang === 'EN'">Space</span>
			<span class="navbar-brand mb-0 h2 text-white" v-else>Space</span>
		</nav>

		<div class="profileinfo">
			<p  v-if="$store.getters.lang === 'EN'"> Hello! My name is Clarissa, and I am a passionate Computer Scientist. I am challenged to solve real-world problems through computational methods, primarily in sports and natural language processing. I think these two have a lot in common, from which we can learn and expand to other fields. Currently, I am pursuing my PhD in Engineering at the School of Computer Science at the University of Sydney. Under the guidance of Dr. Jonathan Kummerfeld and Dr. Josiah Poon, we are working in the exciting task of text-to-code for data visualization.</p>
			
			<p v-else>Hola! Mi nombre es Clarissa, y me apasionan las Ciencias Computacionales. Me reto a resolver problemas del mundo real por medio de métodos computacionales, particularmente en deportes y procesamiento del lenguaje natural. Creo que estos dos tienen mucho en común, de lo cual podemos aprender y usar en otras áreas. Actualmente, me encuentro cursando mi Doctorado en Ingeniería en la Escuela de Ciencias de la Computación en la Universidad de Sídney. Mis supervisores son el Dr. Jonathan Kummerfeld y el Dr. Josiah Poon, y trabajamos en la emocionante tarea de texto a código para la visualización de datos.</p>

			<p v-if="$store.getters.lang === 'EN'"><strong>Past Research</strong></p>
			<p v-else><strong>Investigación Previa</strong></p>
			
			<p v-if="$store.getters.lang === 'EN'"><strong>Win Probability in Soccer/ML:</strong> I developed the framework FootballMLP to predict previous and future soccer matches using various machine learning models. I gained hands-on experience in statistical analysis. This paper was accepted in ICDATA’21 <a href="https://www.researchgate.net/publication/365964661_The_Winning_Mining_Formula_for_Football_Competitions" class="text-info">[1]</a>.

			<p v-else><strong>Probabilidad de Ganar en el Fútbol/ML:</strong> Desarrollé FootballMLP, un framework para predecir partidos de fútbol en el pasado y a futuro, usando varios modelos de aprendizaje automático. Gané experiencia práctica en el análisis estadístico. Este paper fue aceptado en ICDATA'21 <a href="https://www.researchgate.net/publication/365964661_The_Winning_Mining_Formula_for_Football_Competitions" class="text-info">[1]</a>.

			<p v-if="$store.getters.lang === 'EN'"><strong>Social Network Analysis:</strong> I built a model to predict soccer matches by leveraging the wisdom of the English Premier League’s crowds on Twitter through sentiment analysis. The novelty of this paper lies in the weighting of tweets based on network size, likes, and retweets. It was accepted at ICCS’21 <a href="https://link.springer.com/chapter/10.1007/978-3-030-77980-1_32" class="text-info">[2]</a>.</p>

			<p v-else><strong>Análisis de Redes Sociales:</strong> Construí un modelo para predecir partidos de fútbol cuantificando la sabiduría de los fans de la Liga Premier de Inglaterra en Twitter. La novedad de este paper se encuentra en la atribución de pesos a los tuits basada en el tamaño de la red, likes y retuits. Fue aceptado en ICCS'21 <a href="https://link.springer.com/chapter/10.1007/978-3-030-77980-1_32" class="text-info">[2]</a>.</p>	

			<p v-if="$store.getters.lang === 'EN'"><strong>Computational Social Science in Sports:</strong> I explored the relationship between bookmakers' odds, social media, and team performance to demonstrate weak form efficiency in betting markets. This paper is currently under revision at the Journal of Computational Social Sciences <a href="https://www.researchgate.net/publication/365964881_The_relationship_between_betting_markets_and_Social_Media" class="text-info">[3]</a>. I also published "Social Networks As Room For Improvement In Football" <a href="https://revistas.pucp.edu.pe/index.php/summa_humanitatis/article/view/24040" class="text-info">[4]</a> in the Summa Humanitatis Journal.</p>

			<p v-else><strong>Ciencias Sociales Computacionales en el Deporte:</strong> Exploré la relación entre las probabilidades de apuestas, las redes sociales y el rendimiento del equipo. Este paper actualmente se encuentra en revisión para el Journal of Computational Social Sciences <a href="https://www.researchgate.net/publication/365964881_The_relationship_between_betting_markets_and_Social_Media" class="text-info">[3]</a>. También publiqué "Las redes sociales un área de oportunidad en el fútbol" <a href="https://revistas.pucp.edu.pe/index.php/summa_humanitatis/article/view/24040" class="text-info">[4]</a> en la revista Summa Humanitatis.</p>

			<p v-if="$store.getters.lang === 'EN'"><strong>Future Research Interests/Direction</strong></p>
			<p v-else><strong>Intereses de Investigación/Dirección</strong></p>

			<p v-if="$store.getters.lang === 'EN'">I embrace real-life uncertainty and want to improve AI oracles' capacities and interpretability. I am interested in a variety of topics, including natural language processing, statistical machine learning, decision and game theory, probabilistic Bayesian inference, explainable and interpretable AI, graph mining + knowledge graphs, and Computational Social Science.</p>
			<p  v-else>Me gusta enfrentar la incertidumbre y quiero mejorar la habilidad de la IA para predecir e interpretar. Estoy interesada en bastantes temas incluyendo el procesamiento del lenguaje natural, aprendizaje estadístico, teoría de decisiones, inferencia bayesiana, explicabilidad e interpretabilidad, minería de grafos + grafos de conocimiento y Ciencias Sociales Computacionales.</p>

			<p v-if="$store.getters.lang === 'EN'"><strong>Informal Research</strong></p>
			<p v-else><strong>Investigación casual</strong></p>

			<p v-if="$store.getters.lang === 'EN'">During my free time, I've been working on projects such as MCMC for Over/Under in Football <a href="https://github.com/clarismiranda/OUBayesian/" class="text-info">[5]</a>.</p>
			<p v-else>En mi tiempo libre he estado trabajado en proyectos como el Método de Monte Carlo basado en cadenas de Markov para estimar Over/Under en el fútbol <a href="https://github.com/clarismiranda/OUBayesian/" class="text-info">[5]</a>.</p>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'Profile',
			props: {
				lang: {
					type: String,
					default: 'EN'
				}
			},
		data(){
			return{
				current_lang: this.lang
			}
		},
		methods: {
			changeLang: function (lang) {
				this.current_lang = lang;
				this.$router.replace({ name: this.$route.name, params: { lang: lang} });
			}
		}
	}
</script>