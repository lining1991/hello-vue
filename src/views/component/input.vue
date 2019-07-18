<template>
    <div class="input-box">
        <span class="label"><i class="iconfont icon-plus"></i></span>
        <input type="text" v-model="inputText" @focus="handleFocus">
        <span class="go"> <i class="iconfont icon-arrow-r"></i></span>
       
    </div>
</template>
<script>
export default {
    data () {
        return {
            inputText: '输入待办事项...'
        }
    },
    methods: {
        handleFocus () {
           this.inputText = ''; 
        }
    },
}
</script>
<style lang="scss" scoped>
    .input-box {
        background: #fff;
        border-radius: 4px;
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #666;
        padding: 4px 0;
        input {
            flex: 1;
            color: #666;
            border: none;
            outline: none;
        }
        // input:w
        .label {
            width: 25px;
        }
        .go {
            width: 30px;
        }
        .label, .go {
            text-align: center;
        }
    }
</style>
