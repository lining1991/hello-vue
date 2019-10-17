<template>
    <div class="main">
        <div class="input-box">
            <span class="label"><i class="iconfont icon-check"></i></span>
            <input type="text" @focus="handleFocus" @input="handleInput" :placeholder="placeHolder">
            <span class="go"> <i class="iconfont icon-delete"></i></span>
        </div>
        <div class="filter-tab">
            <div class="left">
                分类 <select name="" id="" class="select-tab"><option value="默认">默认</option><option value="学习">学习</option></select>
            </div>
            <div class="right">
                日期 <select name="" id="" class="select-tab"><option value="2019年11月25日">2019年11月25日</option></select>
            </div>
        </div>
        <div class="bottom">
            <textarea name="" id="" cols="30" rows="10" placeholder="描述"></textarea>
        </div>
    </div>   
</template>
<script>
// import topInput from './component/input'
// import filterTab from './component/filter-tab'
// import listItem from './component/list-item'
export default {
   data () {
       return {
           placeHolder: '请输入描述内容'
       }
   },
   methods: {
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

