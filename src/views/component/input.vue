<template>
    <div class="input-box">
        <span class="label" @click="isInput = !isInput"><i class="iconfont" :class="iconObj"></i></span>
        <input type="text" @focus="handleFocus" @input="handleInput" :placeholder="placeHolder" v-model="message" ref="inputBox">
        <div>{{message}}</div>
        <span class="go" @click="addList"> <i class="iconfont icon-arrow-r"></i></span>
    </div>
</template>
<script>
// const PlaceHolder:string = '请输入'
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
            // this.inputText = ''; 
        },
        toggle () {
            this.isInput = !this.isInput;
        },
        addList () {
            let inputStr = this.$refs.inputBox.value;
            console.log('输入字符串', inputStr);
            // this.inputText
        },
        handleInput (e) {
            console.log(e);
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
        padding: 6px 0;
        margin-bottom: 15px;
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
