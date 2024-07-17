<template>
	<div class="blogBox">
		<div class="titleBox">
			<div class="titleName">Vue专区</div>
			<div class="bannerBox">
				<slider ref="slider" :options="options" @slide="slider">
					<slideritem
						v-for="(item, index) in someList"
						:key="index"
						:style="item.style"
						@click="clickSlider(item, index)"
					>
						{{ item.html }}
						<br />
						{{ item.athuer }}
						<br />
						{{ item.creatTime }}
					</slideritem>
				</slider>
			</div>
		</div>
		<div class="contentBox">
			<div class="contentTile">
				<i class="el-icon-s-flag"></i>
				todolist+blog管理后台
			</div>
			<div class="describe">
				<div class="describe">
					<p>基于VUE 3开发</p>
					<p>UI层使用Element plus</p>
					<p>数据请求使用axios</p>
					<p>数据储存使用pinia</p>
					<p>解析markdown采用 md-editor-v3</p>
				</div>
			</div>
			<div class="contentTag">
				<span style="font-size: 20px; margin-right: 5px"> <i class="el-icon-collection-tag"></i>标签： </span>
				<span class="tag">vue3</span>
				<span class="tag">express</span>
				<span class="tag">MySql</span>
				<span class="tag">javaScript</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { slider, slideritem } from "vue-concise-slider";

	export default {
		components: { slider, slideritem },
		data() {
			return {
				someList: [
					{
						html: "Vue入门到入土",
						athuer: "yuyu",
						creatTime: "2021-10-19",
						style: {
							background: 'url("https://agnw.me:1220/avatar/ココア.png")',
							backgroundSize: "cover",
						},
					},
					{
						html: "Vue框架详解",
						athuer: "yuyu",
						creatTime: "2021-10-19",
						style: {
							background: 'url("https://agnw.me:1220/avatar/シャロ.png")',
							backgroundSize: "cover",
						},
					},
					{
						html: "Vue个人博客案例",
						athuer: "yuyu",
						creatTime: "2021-10-19",
						style: {
							background: 'url("https://agnw.me:1220/avatar/チノ.png")',
							backgroundSize: "cover",
						},
					},
				],
				options: {
					pagination: true, // 底部小圆点是否隐藏（true显示，false隐藏）
					currentPage: 0, // 当前页码
					thresholdDistance: 500, // 滑动判定距离
					thresholdTime: 100, // 滑动判定时间
					autoplay: 3000, // 自动滚动[ms]
					loop: true, // 是否循环滚动
					direction: "vertical", // 滚动方向
					infinite: 1, // 无限滚动前后遍历数
					slidesToScroll: 1, // 滚动行数
					timingFunction: "ease",
					duration: 300,
				},
			};
		},
		methods: {
			slider(data) {
				// console.log(data, "silder1");
			},
		},
	};
</script>

<style lang="scss">
	.blogBox {
		display: flex;
		flex-wrap: nowrap;
		width: 100%;
		height: 800px;
		box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
		margin-bottom: 20px;
		.titleBox {
			width: 35%;
			height: 100%;
			text-align: center;
			.titleName {
				margin: 0 auto;
				letter-spacing: 2px;
				width: 80%;
				font-size: 22px;
				height: 50px;
				line-height: 50px;
				font-weight: 550;
			}

			.bannerBox {
				width: 100%;
				height: 750px;
				.slider-item {
					color: rgb(255, 255, 255);
					font-weight: 550;
					line-height: 100px;
					text-shadow: 2px 2px 2px #000;
					font-size: 30px;
				}
			}
		}
		.contentBox {
			width: 65%;
			height: 100%;
			background: skyblue;
			display: flex;
			flex-direction: column;
			.contentTile {
				font-size: 25px;
				color: red;
				line-height: 40px;
			}
			.describe {
				flex: 1;
				font-size: 20px;
				font-weight: bold;
			}
			.contentTag {
				height: 60px;
				display: flex;
				align-items: center;
				.tag {
					padding: 0 10px;
					position: relative;
					font-size: 25px;
					&::before {
						content: "";
						width: 12px;
						height: 12px;
						position: absolute;
						left: 0;
						top: 50%;
						transform: translate(-50%, -50%);
						background-color: green;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
