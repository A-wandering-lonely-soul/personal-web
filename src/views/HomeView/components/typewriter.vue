<template>
  <div>
    <span class="font" v-for="(v,k) in words" :key="k">{{v}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      words: [],
      strArr: [],
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      //将获取到的字符串切割成数组
      this.strArr = this.str.split("");
      //循环将单个的文字 延时追加到 words数组中
      for (var i = 0; i < this.strArr.length; i++) {
        var res = setTimeout(this.write(i), i * 150);
      }
    },
    write(i) {
      return () => {
        this.words.push(this.strArr[i]);
      };
    },
  },
  //接收父组件传递过来的 str
  props: ["str"],
};
</script>

<style lang="scss">
.font {
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 2px;
  //英文样式
  text-transform: uppercase;
  font-weight: 900;
}
</style>
