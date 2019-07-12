<template>
    <div>
        <label for="dabinge666">你喜欢彬哥哪一点</label>
        <input name="dabinge666" placeholder="edit me" @input="changed">
        <div>{{ message }}</div>
    </div>
</template>
<script>
export default {
    data(){
       return {
           message: '这里是个什么呢'
       };
    },
    methods: {
        changed (event) {
            this.$store.commit('change', event.target.value);
        }
    },
};
</script>

