<template>
  <div class="home-container">
    <van-search 
      class="search" 
      v-model="value" 
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel" />

    <van-tabs v-model="active" color="#39c5bb">
      <van-tab
        v-for="item in channels"
        :key="item.index"
        :title="item.name"
      >
      <ArticleList :channel="item"/>
    </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ArticleList from './components/article-list.vue';

export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  props: {},
  data() {
    return {
      value: '',
      active: 0,
      channels: [
        {
          index: 0,
          name: '推荐'          
        },
        {
          index: 1,
          name: '初音未来'
        },
        {
          index: 2,
          name: 'VOCALOID'
        },
        {
          index: 3,
          name: 'Miku39'
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() { 
  },
  mounted() {},
  methods: {
    onSearch(value) {
      this.$router.push({
        path: '/search',

      })
    },
    onCancel() {
      console.log('cancel');
    }
  }
}
</script>

<style lang="less">
.home-container {
  height: 100%;
  background-color: #f7f8fa;
  .search {
    background-color: #39c5bb;
  }
}
</style>