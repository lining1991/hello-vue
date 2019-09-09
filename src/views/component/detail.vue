<template>
    <div class="main">
        <div class="input-box">
            <span class="label"><i class="iconfont icon-check"></i></span>
            <input type="text" @focus="handleFocus" @input="handleInput" :placeholder="placeHolder">
            <span class="go"> <i class="iconfont icon-delete"></i></span>
        </div>
        <div class="middle">
            <div class="left">
                分类 <select name="" id=""><option value="默认">默认</option></select>
            </div>
            <div class="right">
                日期 <select name="" id=""><option value="2019年11月25日">2019年11月25日</option></select>
            </div>
        </div>
        <div class="bottom">
            <textarea name="" id="" cols="30" rows="10" placeholder="描述"></textarea>
        </div>
    </div>   
</template>
<script>
import topInput from './component/input'
import filterTab from './component/filter-tab'
import listItem from './component/list-item'
export default {
    components: {
        topInput,
        filterTab,
        listItem
    }
}
</script>
<style lang="scss" scoped>
    .main {
        padding: 10px 10px 0;
    }
</style>

