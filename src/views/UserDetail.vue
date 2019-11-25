<template>
	<div>
		<div class="container">
			<div class="header">
				<div class="img-box">
					<div class="img">
						<img :src="user.avatar" alt="">
					</div>
				</div>
				<div class="info">
					<div class="nickname">
						<p class="xun-title">
							{{ user.nickname }}
						</p>
					</div>
					<div class="details">
						<div class="box">
							<span class="number">{{ user.follows }}</span>
							<br>
							<span class="xun-meta text">关注></span>
						</div>
						<div class="box">
							<span class="number">{{ user.fans }}</span>
							<br>
							<span class="xun-meta text">粉丝></span>
						</div>
						<div class="box">
							<span class="number">{{ user.articles }}</span>
							<br>
							<span class="xun-meta text">文章></span>
						</div>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="side-bar">
					<div class="function">
						<div class="fun-card xun-content">
							<router-link to="/user/information">个人资料</router-link>
						</div>
						<div class="fun-card xun-content">
							<router-link to="/user/article">个人文章</router-link>
						</div>
						<div class="fun-card xun-content">
							<router-link to="">个人收藏</router-link>
						</div>
						<div class="fun-card xun-content">
							<router-link to="">通讯录</router-link>
						</div>
						<div class="fun-card xun-content">
							<router-link to="">系统消息</router-link>
						</div>
					</div>
					<div class="other">
						<div class="fun-card xun-content">
							<router-link to="">在线服务</router-link>							
						</div>
						<div class="fun-card xun-content">
							<router-link to="">官方邮箱</router-link>
						</div>
						<div class="fun-card xun-content">
							<router-link to="">问题解答</router-link>
						</div>
					</div>
				</div>
				<router-view class="main"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: JSON.parse(localStorage.getItem('user'))
			};
		},
	
		created() {
			
		},
	
		methods: {
			
		},
	
		computed: {}
	};
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 1000px;
		/* 灰色背景图片 */
		background-color: #9B9B9B;
	}
	.header {
		width: 100%;
		height: 20%;
		display: flex;
		/* 头部的绿色背景 */
		background-color: #42B983;
	}
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		/* 青蓝色的主体颜色背景 */
		background-color: lightblue;
	}
	.side-bar {
		height: 100%;
		width: 15%;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* 黄色的侧边栏 */
		background-color: #FFFF00;
	}
	/* 对header区域的设计 */
	.img-box {
		width: 15%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* 粉色的头像姓名区域 */
		background-color: lightpink;
	}
	.info {
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* 个人资料区域设计 */
		background-color: lemonchiffon;
	}
	.nickname {
		width: 80%;
		margin-bottom: 2%;
	}
	.details {
		width: 80%;
		display: flex;
	}
	.img {
		width: 130px;
		height: 130px;
	}
	img {
		border-radius: 50%;
	}
	.box {
		width: 15%;
		margin-right: 10px;
		border-right: 1px solid rgb(199, 199, 179);
	}
	.number, .text {
		font-size: 15px;
		color: rgb(199, 199, 179);
	}
	/* 对侧边栏的设计 */
	.function {
		width: 100%;
		height: 40%;
		padding-top: 10%;
		/* 功能区的浅红色背景 */
		background-color: lavenderblush;
	}
	.other {
		width: 100%;
		height: 30%;
		padding-top: 10%;
		/* 其它区域的浅绿色背景 */
		background-color: lightgreen
	}
	.fun-card {
		margin-bottom: 10%;
	}
	.main {
		width: 85%;
		height: 100%;
	}
</style>