<template>
    <div class="main">
        <div class="input-box">
            <span class="label"><i class="iconfont icon-check"></i></span>
            <input type="text" @focus="handleFocus" @input="handleInput" :placeholder="placeHolder" v-model="item.title">
            <span class="go"> <i class="iconfont icon-delete"></i></span>
        </div>
        <div class="filter-tab">
            <div class="left">
                分类 <select name="" id="" class="select-tab"><option :value="item.category">{{item.category}}</option><option :value="item.category">{{item.category}}</option></select>
            </div>
            <div class="right">
                <!-- 日期 <select name="" id="" class="select-tab"><option :value="item.date">{{item.date}}</option></select> -->
                日期<input type="date" v-model="item.date">
            </div>
        </div>
        <div class="bottom">
            <textarea name="" id="" cols="30" rows="10" placeholder="请输入描述内容" v-model="item.content"></textarea>
        </div>
    </div>   
</template>
<script>
// import topInput from './component/input'
// import filterTab from './component/filter-tab'
// import listItem from './component/list-item'
import axios from 'axios';
export default {
    data () {
        return {
            placeHolder: '请输入描述内容',
            item: {
                content: '',
                title: '',
                category: '',
                date: '',
                uid: '',
                idDone: ''
            }
        }
    },
    // beforeRouteEnter (to, from, next) {
    //     // console.log(to, from, next);
    // },
    // 路由改变前，组件就已经渲染完了
    // 逻辑稍稍不同
    // beforeRouteUpdate (to, from, next) {
        // console.log('beforeRouteUpdate', to, from, next);
        // this.post = null
        // getPost(to.params.id, (err, post) => {
        // this.setData(err, post)
        // next()
        // })
    // },
    beforeRouteLeave (to, from, next) {
        let updateData = this.item;
        axios.post('/mock/update', updateData)
        .then(response => {
            let res = response.data;
            if (res.error_code === 0) {
                this.$store.commit('update', updateData)
                next();
            }
        });
    },
    beforeDestory () {
        alert('你将要离开吗');
        console.log('组件将被销毁');
        // 离开页面时  这个钩子并不会发生
    },
    created () {
       this.fetchData();
    },
    methods: {
        fetchData () {
            let uid = this.$route.params.uid;
            console.log('uid', uid);
            axios.post('/mock/get_detail', {uid})
            .then(response => {
                let res = response.data;
                let data = res.data;
                if (res.error_code === 0) {
                //    let title, item.category, date, content;
                //    {title, item.category, date, content} = data;
                // {this.title, this.item.category, this.date, this.content} = data;
                // console.log('detail', res.data);
                    // this.title = data.title;
                    // this.content = data.content;
                    // this.item.category = data.item.category;
                    // this.date = data.date;
                    // this.uid = data.uid;
                    this.item = data;
                }
            });
        },
        handleFocus () {

        },
        handleInput () {

        }
    }
}
</script>
<style lang="scss" scoped>
    // todo需要弄一个日历的控件
    @import 'src/css/input.scss';
    .main {
        padding: 10px 10px 0;
    }
    .filter-tab {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .select-tab {
        background: #fff;
        font-size: 16px;
        border-radius: 2px;
        outline: none;
        border: none;
        text-align: center;
        text-align-last: center;
        width: auto;
        line-height: 1.4;
    }
    .bottom textarea {
        padding: 5px;
        display: block;
        width: 100%;
        box-sizing: border-box;
    }
</style>

