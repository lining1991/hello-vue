<template>
    <div class="wrapper">
        <!-- <list-item :list = "list"></list-item>     -->
    </div>   
</template>
<script>
import listItem from './component/list-item';
// vue组件的三种方式
// 箭头函数如果要返回一个对象需要在对象外部加圆括号 因为语句的开始也是以花括号开始的
export default {
    components: {
        listItem
    },
    data: () => ({
        list: [{
            status: 'done',
            content: '吃饭',
            date: '11月25日'
        },{
            status: 'done',
            content: '喝水',
            date: '11月26日'
        }]
    }),
    mounted () {
        console.log(this.list);
    }
    // data: function () {
    //     return {
    //         list: [{
    //             status: 'done',
    //             content: '吃饭',
    //             date: '11月25日'
    //         },{
    //             status: 'done',
    //             content: '喝水',
    //             date: '11月26日'
    //         }]
    //     }
    // }
}
</script>
