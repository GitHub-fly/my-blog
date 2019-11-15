<template>
	<div>
		<div class="nav">
			<ul>
				<li><router-link to="/index">主页</router-link></li>
				<li><router-link to="/c">专题</router-link></li>
				<li><router-link to="/p">文章</router-link></li>
				<li><router-link to="/u">作者</router-link></li>
			</ul>
			<div class="changeBox">
				<router-link to="/sign" v-if="this.user === null">去登录</router-link>
				<img :src="this.user.avatar" v-if="this.user !== null">
				<h1 @click="logout()" v-if="this.user !== null">退出</h1> 
			</div>
		</div>
		<router-view class="container" />
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				user: JSON.parse(localStorage.getItem('user'))
			} 
		},
		
		created() {
		},
		
		methods: {
			logout() {
				this.user = null
			}
		},
		
		computed: {
			
		}
	}
</script>

<style></style>
