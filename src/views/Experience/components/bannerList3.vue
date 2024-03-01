<template>
  <div class="blogBox">
    <div class="titleBox">
      <div class="titleName">后端服务</div>
      <div class="bannerBox">
        <slider ref="slider" :options="options" @slide="slider">
          <slideritem v-for="(item, index) in someList" :key="index" :style="item.style">
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
        todolist+blog服务
      </div>
      <div class="describe">
        <p>基于express + MySQL开发</p>
        <p>使用nginx反向代理获取储存文件</p>
        <p>登录使用jwk校验</p>
        <p>后台服务通过nginx部署</p>
        <p>数据库MySQL通过宝塔一键部署</p>
      </div>
      <div class="contentTag">
        <span style="font-size:20px;margin-right:5px">
          <i class="el-icon-collection-tag"></i>标签：
        </span>
        <span class="tag">express</span>
        <span class="tag">MySQL</span>
        <span class="tag">jwt</span>
        <span class="tag">nginx</span>
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
          html: "动画效果抖动解决",
          athuer: "yuyu",
          creatTime: "2021-10-19",
          style: {
            background:
              'url("https://winterfinale.com:1220/avatar/リゼ.png")',
            backgroundSize: "cover",
          },
        },
        {
          html: "Hover盒子抖动",
          athuer: "yuyu",
          creatTime: "2021-10-19",

          style: {
            background:
              'url("https://winterfinale.com:1220/avatar/usagi-42.png")',
            backgroundSize: "cover",
          },
        },
        {
          html: "自定义右键菜单无法关上",
          athuer: "yuyu",
          creatTime: "2021-10-19",

          style: {
            background:
              'url("https://winterfinale.com:1220/avatar/千夜.png")',
            backgroundSize: "cover",
          },
        },
      ],
      options: {
        pagination: true, // 底部小圆点是否隐藏（true显示，false隐藏）
          currentPage: 0, // 当前页码
          thresholdDistance:500, // 滑动判定距离
          thresholdTime:100, // 滑动判定时间
          autoplay:3000, // 自动滚动[ms]
          loop:true, // 是否循环滚动
          direction:'vertical', // 滚动方向
          infinite:1, // 无限滚动前后遍历数
          slidesToScroll:1, // 滚动行数
          timingFunction: 'ease',
          duration: 300
      },
    };
  },
  methods: {
    slider(data) {
      // console.log(data, "silder3");
    },
  },
};
</script>

<style lang='scss'>
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
      width: 80%;
      font-size: 24px;
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