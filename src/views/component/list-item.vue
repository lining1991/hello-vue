<template>
    <div class="item-wrapper">
        <div class="item">
            <i class="iconfont icon-check"></i>
            <span class="text">好姐姐</span>
            <span class="time">今天</span>
        </div>
        <div class="item">
            <i class="iconfont icon-check"></i>
            <span class="text">好姐姐好姐姐好姐姐好姐姐好姐姐好姐姐好姐姐好姐姐好姐姐</span>
            <span class="time">12月31日</span>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            list: {
                type: Array,
                default: []
            }
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


