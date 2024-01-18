<template>
  <div class="trends-detail-container">
    <van-nav-bar title="热搜详情" class="app-nav-bar" />
    <div class="trends-detail">
      <h2>{{ hotSearchDetail.keyword }}</h2>
      <p>{{ hotSearchDetail.description }}</p>
    </div>
    <van-button type="primary" @click="showCommentInput = true">发表评论</van-button>
    <van-popup v-model="showCommentInput" position="bottom">
      <van-field
        v-model="comment"
        label="评论"
        placeholder="请输入评论"
        type="textarea"
        rows="1"
        autosize
      />
      <van-button type="primary" @click="submitComment">提交</van-button>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'TrendsDetail',
  data() {
    return {
      hotSearchDetail: {}, // 需要从服务器获取热搜的详细信息,咱们直接写内容就行
      showCommentInput: false,
      comment: '',
    };
  },
  methods: {
    submitComment() {
      // 在这里提交你的评论
      this.showCommentInput = false;
      this.comment = '';
    },
    loadHotSearchDetail() {
      const hotSearchId = this.$route.params.id;
      switch (hotSearchId) {
        case '1':
          this.hotSearchDetail = { keyword: '热搜1', description: '详细介绍1' };
          break;
        case '2':
          this.hotSearchDetail = { keyword: '热搜2', description: '详细介绍2' };
          break;
        // 添加其他情况...
        default:
          this.hotSearchDetail = {}; // 默认情况下，清空详细信息
      }
    },
  },
  created() {
    this.loadHotSearchDetail();
  },
  watch: {
    '$route.params.id': 'loadHotSearchDetail',
  },
};
</script>

<style scoped>
.trends-detail-container {
  padding: 10px;
}
.trends-detail {
  margin-bottom: 20px;
}
</style>
