<template>
    <div class="layout-container">
    <router-view/>
    
    <van-tabbar route>
        <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="fire-o" replace to="/trends">热点</van-tabbar-item>
        <van-tabbar-item icon="location-o" replace to="/weather">天气</van-tabbar-item>
        <van-tabbar-item icon="user-o" replace to="/profile">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'LayoutIndex',
    components: {},
    props: {},
    data() {
        return {
            active: 0,
        };
    },
    computed: {},
    watch: {},
    created() { },
    mounted() { },
    methods: { }
}
</script>

<style lang="less"></style>