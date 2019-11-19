<template>
	<div>
		
		<div v-html="articleDetail">
			
		</div>
		
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			articleDetail: null,
		};
	},

	created() {
		// 获取网页地址url
		var query = window.location.href
		// 锁定到最后一个"/"的位置
		var begin = query.lastIndexOf('/') + 1
		// 取出地址中最后的id值
		var articleId = query.substring(begin)
		// 获取对应文章的详情内容
		this.axios.get('http://localhost:8080/api/article/detail/' + articleId)
		.then(res => {
			this.articleDetail = res.data.data
		})
	},

	methods: {},

	computed: {},
	
};
</script>

<style></style>
