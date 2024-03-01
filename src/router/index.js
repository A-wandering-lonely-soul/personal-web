import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		meta: {
			title: "个人简历",
		},
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/FirstView/FirstView.vue"),
		meta: {
			title: "简介",
		},
	},
	{
		path: "/experience",
		name: "experience",
		component: () => import("../views/Experience/Experience.vue"),
		meta: {
			title: "经历",
		},
	},
	{
		path: "/test",
		name: "test",
		component: () => import("../views/Test/index.vue"),
		meta: {
			title: "测试页",
		},
	},
	{
		path: "/404",
		name: "404",
		component: () => import("../views/404View.vue"),
		meta: {
			title: "404 | 技术宅-改变未来",
		},
	},

	{ path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});

export default router;
