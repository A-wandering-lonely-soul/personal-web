<template>
  <div class="aboutBox">
    <bannerView :imgUrl="this.img" :titleName="this.title"></bannerView>
    <div class="mainBox">
      <bannerList1></bannerList1>
      <bannerList2></bannerList2>
      <bannerList3></bannerList3>
    </div>
    <footerView></footerView>
  </div>
</template>

<script>
import bannerView from "@/components/bannerView/index.vue";
import footerView from "@/components/footerView/index.vue";
import bannerList1 from "./components/bannerList1.vue";
import bannerList2 from "./components/bannerList2.vue";
import bannerList3 from "./components/bannerList3.vue";
export default {
  name: "BlogView",
  components: { bannerView, footerView, bannerList1, bannerList2, bannerList3 },
  data() {
    return {
      img: "https://winterfinale.com:1220/avatar/ED-12-3.jpg",
      title: "学习经历",
    };
  },
};
</script>

 <style lang="scss">
.aboutBox {
  height: 100%;
  // 背景图片
  background: url("@/assets/cover.jpg");
  background-repeat: no-repeat;
  background-size: 500px;
  background-position: 110% 100%;
  background-attachment: fixed;

  .mainBox {
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
  }
}
</style>

