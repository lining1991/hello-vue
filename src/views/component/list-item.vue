<template>
    <div>
        <!-- 绑定class style -->
        <!-- 绑定对象 -->
        <!-- <div class="black" :class="{active: isActive}">这是一段语法</div>
        <div :class="{active: isActive}">渲染出来的类名是active</div>
        <div :class="{active: isActive, 'fs-bigger': fsBig}">渲染出来的类名是active fs-bigger</div>
        <div :class="styleObj">渲染出来的类名是fs-bigger</div> -->
        <!-- 对象语法常常结合对象的计算属性使用 -->
        <!-- <div :class="classObject">结合计算属性使用</div>  -->
        <!-- 绑定数组 -->
        <!-- <div :class="[activeClass, errorClass]">渲染出来的类名是active fs-bigger</div>
        <div :class="[isActive ? 'active' : '', errorClass]">渲染出来的类名是active fs-bigger</div>
        <div v-bind:class="[{ active: isActive }, errorClass]">p渲染出来的类名是active fs-bigger</div> -->
        <!-- 用在组件上 class将被添加到该组件的根元素上面，且这个元素上已经存在的class不会被覆盖 -->
        <!-- 绑定内联样式 css属性名可用驼峰或短横线分割，短横线分割的要用单引号括起来-->
        <!-- 对象语法 -->
        <!-- <div :style="{color: activeColor, fontSize: fontSize + 'px', 'background-color': 'red'}">新的咯</div> -->
        <!-- 直接绑定到一个样式对象通常更好，这会让模板更清晰 -->
        <!-- <div :style="styleObject">又一个新的咯</div> -->
        <!-- 自动添加前缀：当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。 -->
        <!-- 多重值 从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：-->
        <!-- <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }">哈哈哈哈哈</div> -->
        <div class="item-wrapper">
            <div class="item" v-for="item in userList" @click="modify">
                <i class="iconfont icon-check" @click.stop="done"></i>
                {{item.isdone}}
                <span class="text">{{item.title}}</span>
                <span class="time">{{item.date}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';

// https://vuex.vuejs.org/zh/guide/state.html
export default {
    data () {
        return {
            // isActive: true,
            // fsBig: true,
            // styleObj: {
            //     active: false,
            //     fsBig: true
            // },
            // activeClass: 'active',
            // errorClass: 'fs-bigger',
            // activeColor: 'yellow',
            // fontSize: 25,
            // styleObject: {
            //     color: 'yellow',
            //     'font-size':  25,
            //     backgroundColor: 'blue'

            // },
            // error: true
            // list: [{
            //     title: '这是一条TODO记录',
            //     date: '今天'
            // }, {
            //     title: '这是第二条记录',
            //     date: '昨天'
            // }, {
            //     title: '这是第三天记录',
            //     date: '2019-2-1'
            // }]
        }
    },
    props: {
        status: {
            type: Boolean
        }
    },
    computed: {
        classObject () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error
            }
        },
        userList () {
            return this.list.filter((item) => {
                return item.isdone === this.status;
            })
        },
        ...mapState([
            'count',
            'list'
        ])
    },
    created () {
        
    },
    mounted () {
        console.log('abahah', this.list);
    },
    // computed: {
    //     count () {
    //         return this.$store.state.count;
    //     }, 
    //     list () {
    //         return this.$store.state.list;
    //     }
    // }
    // 换一种写法试试
    // computed: {
    //     s () {},
    //     ...mapState([
    //         'count',
    //         'list'
    //     ])
    // },
    // computed: mapState([
    //     'count',
    //     'list'
    // ]),
    methods: {
        done () {
            // 移除到已完成tab里边
            // vuex 删除某条信息
            console.log('done');
        },
        modify () {
            // 修改当前待办事项
            console.log('modify');
            this.$router.push({name: 'Detail'});
        }
    }
    
}
</script>
<style lang="scss">
    @import 'src/css/mixin.scss';
    .black {
        color: #000;
    }
    .active {
        color: #f04848;
    }
    .fs-bigger {
        font-size: 24px;
    }
    .item-wrapper {
        background: #fff;
        border-radius: 5px;
        .item {
            font-size: 12px;
            color: #333;
            padding: 5px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #eee;
            .iconfont {
                margin-right: 5px;
                font-size: 10px;
            }
            .text {
                flex: 1;
                @include ellipsis;
                line-height: 20px;
                height: 20px;
                margin-right: 14px;
            }
            .time {
                flex-basis: 10em;
                text-align: right;
            }
        }
    }
</style>


