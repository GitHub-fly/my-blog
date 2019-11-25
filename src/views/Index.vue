<template>
	<div class="xun-row">
		<div class="xun-col-8">
			<div class="grid">
				<div class="card card1">
					<img src="http://r.photo.store.qq.com/psb?/V11Inv5a125WKz/fq1UdqO3I*w7NrOBzh6D9XcGFu9v7C5QlkWoExgl6E4!/r/dL8AAAAAAAAA" alt="" style="border-radius: 18px;">
				</div>
				<div class="card card2">
					<img src="http://r.photo.store.qq.com/psb?/V11Inv5a125WKz/ExSizy4qpBsICHhYf5CAf.DpmIQkH702XLW132YRZ7w!/r/dLgAAAAAAAAA" alt="" style="border-radius: 18px;">
				</div>
				<div class="card card3">
					<img src="http://r.photo.store.qq.com/psb?/V11Inv5a125WKz/Y*.iN.RxNMZoEJdh375bY4IpBEEBA6V*yg6mDCGXbgU!/r/dFMBAAAAAAAA" alt="" style="border-radius: 18px;">
				</div>
				<div class="card card4">
					<img src="http://r.photo.store.qq.com/psb?/V11Inv5a125WKz/3X56uOwskDDCBPYkEL1F5KFQtHGzdTypdz*nAOhzU8k!/r/dA8BAAAAAAAA" alt="" style="border-radius: 18px;">
				</div>
				<div class="card card5">
					<img src="http://r.photo.store.qq.com/psb?/V11Inv5a125WKz/wB*o4D3ZlidClBoPY5DRUpV5yGyPkdl0*ro5LqCHpUU!/r/dL8AAAAAAAAA" alt="" style="border-radius: 18px;">
				</div>
				<div class="card card6">
					<img src="http://r.photo.store.qq.com/psb?/V11Inv5a125WKz/cRMQrVy26*Lq3MzhnM8b9udJI.4Ohm9rOTo5h7NvfUg!/r/dDUBAAAAAAAA" alt="" style="border-radius: 18px;">
				</div>
			</div>

			<div class="row">
				<div class="article" v-for="(article, index) in hotArticles.slice(10, 20)" :key="index">
					<div class="text">
						<h class="xun-title" @click="toDetails(article.id)">{{ article.title }}</h>
						<p class="xun-content">{{ article.content }}</p>
						<div class="number">
							<span class="xun-meta">
								<i class="iconfont" style="color: rgb(216, 30, 6);">&#xe62c;</i>
								{{ article.diamond }}k
							</span>
							<span class="xun-meta">{{ article.nickname }}</span>
							<span class="xun-meta">
								<i class="iconfont">&#xe6a4;</i>
								{{ article.comments }}
							</span>
							<span class="meta">
								<i class="iconfont">&#xe631;</i>
								{{ article.likes }}
							</span>
						</div>
					</div>
					<div class="img"><img :src="getImage(article.cover)" :alt="article.nickname" /></div>
				</div>
			</div>
		</div>

		<div class="blank"><h></h></div>

		<div class="xun-col-2">
			<div class="side-box">
				<h class="side-title">精彩发现</h>
				<div class="discover-body">
					<div class="row">
						<div class="topic-box" v-for="(topic, index) in hotTopic" :key="index">
							<router-link to="" class="topic">
								{{topic.topicName}}
							</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="side-box">
				<h class="side-title">推荐文章</h>
				<div class="recommend-body">
					<div class="recommend-artile" v-for="(article, index) in hotArticles.slice(0, 9)" :key="index">
						<div class="side-text">
							<button class="btn">{{ index + 1 }}</button>
							<p class="xun-meta">{{ article.title.substring(0, 15) }}...</p>
						</div>
						<div class="side-img">
							<img :src="getImage(article.cover)">
						</div>
					</div>
				</div>
			</div>
			<div class="side-box">
				<h class="side-title">推荐作者</h>
				<div class="author-body">
					<div class="recommend-author" v-for="(user, index) in hotUser.slice(5, 10)" :key="index">
						<div class="side-user-img">
							<img :src="getImage(user.avatar)">
						</div>
						<div class="side-user-text">
							<div class="user-info">
								<h class="name">{{ user.nickname }}</h>
								<h class="info">{{ user.introduction }}</h>
							</div>
							<div class="icon">
								<span>关注</span>
								<span>{{ user.fans }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default {
	data() {
		return {
			hotArticles: [],
			hotUser:[],
			hotTopic: []
		};
	},

	created() {
		this.axios.get(this.baseUrl + '/article/hot')
		.then(res => {
			this.hotArticles = res.data.data
		})
		
		this.axios.get(this.baseUrl + '/user/hot')
		.then(res => {
			this.hotUser = res.data.data
		})
		
		this.axios.get(this.baseUrl + '/topic/hot')
		.then(res => {
			this.hotTopic = res.data.data
		})
	},

	methods: {
		getImage(url) {
			return 'http://images.weserv.nl/?url=' + url;
		},
		toDetails(id) {
			this.$router.push('/article/detail/' + id);
		}
		
	},

	computed: {}
}
</script>

<style scoped>
	
/* 精彩发现快的设计 */
.topic:hover {
	color: #DDDDDD;
}
.topic-box:hover {
	background-color: rgb(105, 107, 83);
}
.topic {
	font-size: 13px;
	line-height: 17px;
}
.topic-box {
	background-color: rgb(221, 222, 194);
	margin: 0px 10px 10px 0px;
	padding: 3px 15px 3px 15px;
	border-radius: 20px;
	transform: none;
	/* 两个时间参数,一个表示画多长时间完成动画,另一个表示多长时间后开始动画 */
	transition: all 0.3s ease 0s;
}
	
/* 推荐博主快的设计 */
.icon {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.info {
	font-size: 12px;
}
.name {
	font-size: 15px;
	font-weight: 700;
}
.user-info {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 80%;
}
.side-user-img {
	display: flex;
	justify-content: center;
	align-items: center;
}
.side-user-img img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}
.side-user-text {
	width: 83%;
	display: flex;
	justify-content: space-between;
}
.recommend-author {
	margin-bottom: 25px;
	display: flex;
	justify-content: space-between;
}


/* 推荐文章块的设计 */
.btn {
	width: 18px;
	height: 18px;
	border: #333333;
	background-color: #EEEEEE;
}

.side-img {
	width: 30%;
	height: 100%;
}
	
.side-text {
	width: 68%;
	display: flex;
}	

.recommend-artile {
	margin-bottom: 20px;
	display: flex;
	justify-content: space-between;
	height: 70px;
}


.author-body {
	width: 100%;
}
.discover-body {
	width: 100%;
}
.side-box {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
}
.side-title {
	font-size: 30px;
	font-weight: 700;
	font-family: "楷体";
	margin-bottom: 10px;
}
.xun-meta {
	margin-right: 5%;
}
.number {
	margin-top: 10px;
	display: flex;
}
.xun-title:hover {
	/* border-bottom: 2px solid #333333; */
	text-decoration: underline;
	color: rgb(229, 126, 101);
	/* opacity: 0.5; */
}
.xun-title {
	transform: none;
	/* 两个时间参数,一个表示画多长时间完成动画,另一个表示多长时间后开始动画 */
	transition: all 0.3s ease 0s;
}
.xun-content {
	margin-top: 10px;
}
.text {
	width: 78%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.img img {
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
	border: 2px dashed #DDDDDD;
	margin: 0 auto;
	margin-bottom: 20px;
	display: flex;
	padding: 10px;
	justify-content: space-between;
}
.row {
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
}
.grid {
	display: grid;
	grid-template-columns: 31% 31% 31%;
	grid-template-rows: 40% 40%;
	grid-column-gap: 3.5%;
	grid-row-gap: 3%;
	height: 900px;
}
.blank {
	flex: 1 1 auto;
}
.card {
	border: 5px solid #333333;
	border-radius: 25px;
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
