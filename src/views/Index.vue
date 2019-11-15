<template>
	<div>
		<div v-for="(article, index) in articles" :key="index">
		<p>
			<h3>{{article.title}}</h3>
			<span>{{article.comments}}</span>
		</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles:[]
			}
		},
		
		created() {
			this.axios.get('http://27z34d3886.wicp.vip:46912/api/articles/hot')
			.then(res => {
				console.log(res.data.data)
				this.articles = res.data.data
			})
		},
		
		methods: {
			
		},
		
		computed: {
			
		}
	}
</script>

<style>
</style>
