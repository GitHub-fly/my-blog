<template>
	<div>
		<div class="nav">
			<ul>
				<li><router-link to="/index" class="xun-a">主页</router-link></li>
				<li><router-link to="/c" class="xun-a">专题</router-link></li>
				<li><router-link to="/p" class="xun-a">文章</router-link></li>
				<li><router-link to="/u" class="xun-a">作者</router-link></li>
			</ul>
			<div class="changeBox">
				<router-link to="/sign" v-if="this.user === null" class="sgin">去登录</router-link>
				<div class="img">
					<img :src="getImage(user.avatar)" :alt="user.nickname" v-if="this.user !== null">
				</div>
				<h3 @click="logout()" v-if="this.user !== null" style="cursor:  pointer;">退出</h3> 
			</div>
		</div>
		<router-view class="xun-container"/>
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
			
			getImage(url) {
				return 'http://images.weserv.nl/?url=' + url
			},
			
			logout() {
				// localStorage.setItem('user', this.user)
				this.user = null
				alert("退出")
			}
		},
		
		computed: {
			
		}
	}
</script>

<style scoped>
	
	.changeBox {
		width: 13%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.img {
		height: 35px;
		width: 35px;
	}
	
	img {
		border-radius: 50%;
	}
	
	.sgin {
		letter-spacing: 0px;
		font-size: 20px;
	}
	
</style>
