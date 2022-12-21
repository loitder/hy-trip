<template>
    <div class="tab-bar">
        <!-- <div class="tab-bar-item">
            <img src="src/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">首页</span>
        </div>
        <div class="tab-bar-item">
            <img src="src/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">收藏</span>
        </div>
        <div class="tab-bar-item">
            <img src="src/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">订单</span>
        </div>
        <div class="tab-bar-item">
            <img src="src/assets/img/tabbar/tab_home.png" alt="">
            <span class="text">消息</span>
        </div> -->

        <!-- <template v-for="(item,index) in tabBarData">
            <div class="tab-bar-item" :class="{active : currentIndex === index}" @click="itemClick(index,item)">
                <img v-if="currentIndex !== index" :src="item.image" alt="">
                <img v-else :src="item.imageActive" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template> -->

        <van-tabbar v-model="active" active-color="#ff9854">
            <template v-for="(item,index) in tabBarData">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="active !== index" :src="item.image" alt="">
                        <img v-else :src="item.imageActive" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>

    </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabbar.js"
import { ref } from "vue"
// import {useRouter} from "vue-router"

// const currentIndex = ref(0)
// const router = useRouter()
// const itemClick = (index,item) => {
//     currentIndex.value = index
//     router.push(item.path)
// }



const active = ref(0);

</script>

<style lang="less" scoped>
// .tab-bar {
    //     position: fixed;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     height: 50px;
    //     display: flex;
    //     border-top: 1px solid #f3f3f3;
        
    //     .tab-bar-item {
    //         flex: 1;
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: center;

    //         &.active {
    //             color: var(--primary-color);
    //         }

    //         .text {
    //             font-size: 12px;
    //             margin-top: 2px;
    //         }

    //         img {
    //             width: 32px;
    //         }
    //     }
    // }
    /**
    修改第三方UI组件库样式
    1. 使用插槽，插入自己的元素，自己在作用域中直接修改这个元素
    2.全局定义一个变量，覆盖其默认变量的值
    3.局部定义，覆盖其默认变量的值
    4.找到对应组建的选择器，deep修改
    */

    // --van-tabbar-item-icon-size: 30px !important;

    //找到子组件的类使之生效
    .tab-bar {
        :deep(.van-tabbar-item__icon) {
            font-size: 50px;
        }
        img {
            height: 27px;
        }
    }
</style>