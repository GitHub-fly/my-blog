<template>
	<div class="caontainer">
		<div class="col-8">
			<div class="row">
				<div class="card" v-for="s in size" :key="s">
					<h1>我是卡片{{ s }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			size: 4
		};
	},

	created() {},

	methods: {},

	computed: {}
};
</script>

<style scoped>	

.container {
	width: 800px;
	background-color: #FFFF00;
}

.col-8 {
	flex: 1 1 8%;
	margin: 1 auto;
	width: 80%;
	height: 50px;
	background-color: #008B8B;
}
	
.row {
	display: flex;
	flex-wrap: wrap;
}

.card {
	flex: 1 1 25%;
}
</style>
