<template>
  <div class="search-container">
    <van-nav-bar
      class="app-nav-bar"
      title="搜索"
      left-arrow
      @click-left="onClickLeft"
    />
    <ArticleList class="article-list"/>
  </div>  
</template>

<script>
import ArticleList from '@/views/home/components/article-list.vue';

export default {
  name: 'SearchIndex',
  components: {
    ArticleList
  },
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  created() { 
  },
  mounted() {},
  methods: {
    onSearch(value) {

    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less">
.article-list {
  top: 5px;
}
</style>