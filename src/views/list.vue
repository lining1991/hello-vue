<template>
    <div class="main">
        <top-input></top-input>
        <filter-tab></filter-tab>
        <list-item :list="true"></list-item>
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
