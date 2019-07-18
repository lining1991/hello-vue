<template>
    <div class="main">
        <top-input></top-input>
    </div>   
</template>
<script>
import topInput from './component/input.vue'
export default {
    components: {
        topInput
    }
}
</script>
<style lang="scss" scoped>
    .main {
        padding: 4px 5px 0;
    }
</style>
