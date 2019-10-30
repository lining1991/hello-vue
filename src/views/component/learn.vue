<template>
    <div>
        <!-- 绑定class style -->
        <!-- 绑定对象 -->
        <div class="black" :class="{active: isActive}">这是一段语法</div>
        <div :class="{active: isActive}">渲染出来的类名是active</div>
        <div :class="{active: isActive, 'fs-bigger': fsBig}">渲染出来的类名是active fs-bigger</div>
        <div :class="styleObj">渲染出来的类名是fs-bigger</div>
        <!-- 对象语法常常结合对象的计算属性使用 -->
        <div :class="classObject">结合计算属性使用</div> 
        <!-- 绑定数组 -->
        <div :class="[activeClass, errorClass]">渲染出来的类名是active fs-bigger</div>
        <div :class="[isActive ? 'active' : '', errorClass]">渲染出来的类名是active fs-bigger</div>
        <div v-bind:class="[{ active: isActive }, errorClass]">p渲染出来的类名是active fs-bigger</div>
        <!-- 用在组件上 class将被添加到该组件的根元素上面，且这个元素上已经存在的class不会被覆盖 -->
        <!-- 绑定内联样式 css属性名可用驼峰或短横线分割，短横线分割的要用单引号括起来-->
        <!-- 对象语法 -->
        <div :style="{color: activeColor, fontSize: fontSize + 'px', 'background-color': 'red'}">新的咯</div>
        <!-- 直接绑定到一个样式对象通常更好，这会让模板更清晰 -->
        <div :style="styleObject">又一个新的咯</div>
        <!-- 自动添加前缀：当 v-bind:style 使用需要添加浏览器引擎前缀的 CSS 属性时，如 transform，Vue.js 会自动侦测并添加相应的前缀。 -->
        <!-- 多重值 从 2.3.0 起你可以为 style 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：-->
        <div :style="{ display: ['flex', '-webkit-box', '-ms-flexbox'] }">哈哈哈哈哈</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isActive: true,
            fsBig: true,
            styleObj: {
                active: false,
                fsBig: true
            },
            activeClass: 'active',
            errorClass: 'fs-bigger',
            activeColor: 'yellow',
            fontSize: 25,
            styleObject: {
                color: 'yellow',
                'font-size':  25,
                backgroundColor: 'blue'

            },
            error: true
        }
    },
    beforeRouterUpdate (to, from, next) {

    },
    computed: {
        classObject () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error
            }
        },
        username () {
            return this.$route.params.username; 
        }
    },
    methods: {
        goBack () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>
<style lang="scss">
    .black {
        color: #000;
    }
    .active {
        color: #f04848;
    }
    .fs-bigger {
        font-size: 24px;
    }
</style>


