<template>
    <div class="input-box">
        <span class="label" @click="isInput = !isInput"><i class="iconfont" :class="iconObj"></i></span>
        <input type="text" @focus="handleFocus" @input="handleInput" @keyup.enter="addList" :placeholder="placeHolder" v-model="message" ref="inputBox">
        <span class="go" @click="addList"> <i class="iconfont icon-arrow-r"></i></span>
    </div>
</template>
<script>
// const PlaceHolder:string = '请输入'
import axios from 'axios';
export default {
    data () {
        return {
            inputText: '',
            placeHolder: '请输入待办事项...',
            isInput: {
                type: Boolean,
                default: true
            },
            message: ''
        }
    },
    computed: {
        iconObj: function () {
            // return this.isInput ? 'icon-plus' : 'icon-search';
            return {
                'icon-plus': this.isInput,
                'icon-search': !this.isInput
            }
        }
    },
    methods: {
        handleFocus () {
            console.log('focus');
        },
        toggle () {
            this.isInput = !this.isInput;
        },
        addList () {
            let inputStr = this.$refs.inputBox.value;
            // let s = [234, 12];
            // let t = [...s, 34];
            // console.log('hahah', this.$store);
            if (inputStr.trim()) {
                let ajaxData = {
                    title: inputStr,
                    isdone: false,
                    content: '',
                    category: 'default',
                    date: new Date()
                };
                axios.post('/mock/add', ajaxData).then(res => {
                    this.$store.commit('add', ajaxData);
                    this.$refs.inputBox.value = '';
                });
            } else {
                // ui表示
                alert('请输入代办事项');
            }
            // todo:添加的时间应该都是为今天可以写死，ps:这个地方需要调用接口后才这样执行
            console.log('输入字符串', inputStr);
        },
        handleInput (e) {
            console.log(e);
        }
    },
}
</script>
<style lang="scss" scoped>
   @import 'src/css/input.scss';
</style>
