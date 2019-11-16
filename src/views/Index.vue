<template>
	<div class="xun-row">
		<div class="xun-col-8">
			<div class="grid">
				<div class="card card1"><img :src="this.hotArticles[1].cover" alt="" /></div>
				<div class="card card2"></div>
				<div class="card card3"></div>
				<div class="card card4"></div>
				<div class="card card5"></div>
				<div class="card card6"></div>
			</div>

			<div class="row">
				<div class="article" v-for="(article, index) in hotArticles.splice(0, 10)" :key="index">
					<div class="text">
						<h class="title">{{ article.title }}</h>
						<p class="content">{{ article.content }}</p>
						<div class="number">
							<span class="meta">{{ article.diamond }}</span>
							<span class="meta">{{ article.nickname }}</span>
							<span class="meta">{{ article.comments }}</span>
							<span class="meta">{{ article.likes }}</span>
						</div>
					</div>
					<div class="img"><img :src="getImage(article.cover)" :alt="article.nickname" /></div>
				</div>
			</div>
		</div>

		<div class="blank"><h></h></div>

		<div class="xun-col-2"><h1></h1></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			hotArticles: []
		};
	},

	created() {
		this.axios.get('http://localhost:8080/api/article/hot').then(res => {
			this.hotArticles = res.data.data;
		});
	},

	methods: {
		getImage(url) {
			return 'http://images.weserv.nl/?url=' + url;
		}
	},

	computed: {}
};
</script>

<style scoped>
.number {
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
}
.content {
	margin-top: 10px;
}

.text {
	width: 78%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

img {
	height: 80%;
}
.img {
	width: 20%;
	height: 100%;
	display: flex;
	align-items: center;
}

.article {
	border-radius: 20px;
	width: 100%;
	/* height: 240px; */
	border: 5px solid aqua;
	margin: 0 auto;
	margin-bottom: 20px;
	display: flex;
	padding: 10px;
	justify-content: space-between;
}

.row {
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	background-color: #ffff00;
}

.grid {
	background-color: #00bbdd;
	display: grid;
	grid-template-columns: 31% 31% 31%;
	grid-template-rows: 40% 40%;
	grid-column-gap: 3.5%;
	grid-row-gap: 3%;
	height: 800px;
}

.blank {
	background-color: #42b983;
	flex: 1 1 auto;
}
.xun-col-2 {
	background-color: beige;
}
.card {
	border: 10px solid #333333;
}
.card1 {
	grid-column-start: 1;
	grid-column-end: 3;
}
.card3 {
	grid-row-start: 2;
	grid-row-end: 4;
}
.card4 {
	grid-column-start: 2;
	grid-column-end: 4;
}
</style>
