<template>
	<div class="aboutBox">
		<bannerView :imgUrl="this.img" :titleName="this.title" ref="banner"></bannerView>
		<div class="mainBox">
			<div class="contentBox">
				<div class="contentTitle">
					<div class="markdown-body">
						<markdown />
					</div>
				</div>
			</div>
			<div :class="locked ? 'asideBoxFix' : 'asideBox'">
				<div class="asideImg">
					<!-- 头像 -->
					<el-avatar
						src="https://agnw.me:1220/avatar/avatar-1706688562898.jpg"
						:size="size"
						class="asidePic"
					></el-avatar>
				</div>
				<div class="asideTile">鱼鱼</div>
				<div class="asideTile1">老爷保佑！前途无量！</div>
				<el-divider>🌴</el-divider>
				<!-- 侧边栏底部图片 -->
				<img src="@/assets/huli.gif" alt class="bottomImg" />
			</div>
			<div v-if="btnFlag" class="go-top" @click="backTop">
				<!-- 返回顶部图标 -->
				<img src="@/assets/backTop.png" alt class="backTopbtn" />
			</div>
		</div>
		<footerView></footerView>
	</div>
</template>

<script>
	import bannerView from "@/components/bannerView/index";
	import footerView from "@/components/footerView/index.vue";
	// md文件地址
	import markdown from "../home.md";
	import "./css/FirstView.scss";
	import "highlight.js/styles/github.css";
	import "github-markdown-css";
	export default {
		name: "FirstView",
		components: { bannerView, markdown, footerView },
		mounted() {
			window.addEventListener("scroll", this.scrollToTop);
			this.$nextTick(() => {
				let $ele = this.$refs.banner;
				this.bannerH = $ele.$el.offsetHeight;
			});
		},
		destroyed() {
			window.removeEventListener("scroll", this.scrollToTop);
		},
		data() {
			return {
				//侧边栏头像大小
				size: 90,
				bannerH: 0,
				locked: false,
				btnFlag: false,
				//导航背景图片
				img: "https://agnw.me:1220/avatar/ED-9.jpg",
				// 导航文字说明
				title: "首页",
			};
		},
		methods: {
			backTop() {
				const that = this;
				let timer = setInterval(() => {
					let ispeed = Math.floor(-that.scrollTop / 5);
					document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
					if (that.scrollTop === 0) {
						clearInterval(timer);
					}
				}, 16);
			},
			scrollToTop() {
				const that = this;
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				that.scrollTop = scrollTop;
				that.locked = that.btnFlag = that.scrollTop > that.bannerH;
				if (that.scrollTop > that.bannerH) {
					that.locked = true;
					that.btnFlag = true;
				} else {
					that.locked = false;
					that.btnFlag = false;
				}
			},
		},
	};
</script>
