<template>
  <!-- Make a div wrapped slider,set height and width -->
   <div style="width:100%;margin:20px auto;height:400px">
        <!-- Using the slider component -->
        <slider ref="slider" :options="options">
            <!-- slideritem wrapped package with the components you need -->
            <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">{{item.html}}</slideritem>
            <!-- Customizable loading -->
            <div slot="loading">loading...</div>
        </slider>
   </div>
  </template>
  <script>
  // import slider components
  import { slider, slideritem } from 'vue-concise-slider'
  export default {
     data () {
        return {
          //data list [array]
          someList:[
            {
              html: 'slide1',
              style: {
                'background': '#1bbc9b'
              }
            },
            {
              html: 'slide2',
              style: {
                'background': '#4bbfc3'
              }
            },
            {
              html: 'slide3',
              style: {
                'background': '#7baabe'
              }
            }
          ],
          //Slider configuration [obj]
          options: {
            currentPage: 0
          },
          timer:null,
        }
      },
      components: {
        slider,
        slideritem
      },
      mounted(){
     this.timer= setInterval(()=> {
        const lastItem = this.someList.pop();
        this.someList.unshift(lastItem);
    }, 2000);
      },
      beforeDestroy(){
        clearInterval(this.timer)
      }
  }
  </script>
  