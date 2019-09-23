<template>
    <div class="item-wrapper">
        <div class="item" v-for="item in list" @click="modify">
            <i class="iconfont icon-check" @click.stop="done"></i>
            <span class="text">{{item.text}}</span>
            <span class="time">{{item.date}}</span>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
// https://vuex.vuejs.org/zh/guide/state.html
export default {
    data () {
        return {
            // list: [{
            //     text: '这是一条TODO记录',
            //     date: '今天'
            // }, {
            //     text: '这是第二条记录',
            //     date: '昨天'
            // }, {
            //     text: '这是第三天记录',
            //     date: '2019-2-1'
            // }]
        }
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
    computed: mapState([
        'count',
        'list'
    ]),
    methods: {
        done () {
            // 移除到已完成tab里边
            // vuex 删除某条信息
            console.log('done');
        },
        modify () {
            // 修改当前待办事项
            console.log('modify');
        }
    }
    
}
</script>
<style lang="scss">
    @import 'src/css/mixin.scss';
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
                flex-basis: 5em;
                text-align: right;
            }
        }
    }
</style>


