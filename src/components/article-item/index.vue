<template>
  <div class="article-item">
    <van-cell class="item-container" :to="{name:'article', params:{articleId:article.id}}">
      <div class="title" slot="title">{{ article.title }}</div>
      <div slot="label" class="label">
        <div class="label-wrapper">
          <span>{{ article.author }} </span>
          <span>{{ article.coment }}条评论 </span>
          <span>发布于{{ article.created_at }} </span>
        </div>
      </div>
      <van-image class="right-cover" fit="cover" :src="require('@/assets/miku.jpg')" />
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  components: {},
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() { },
  methods: {}
}
</script>

<style lang="less" scoped>
.article-item {
  .item-container {
    .van-cell__title {
      padding: 3px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .title {
      font-size: 16px;
      color: #3a3a3a;
    }

    .van-cell__value {
      flex: unset;
      width: 113px;
      height: 76px;
      margin-left: 12px;
    }
    .label-wrapper {
      font-size: 11px;
    }
  }
}
</style>