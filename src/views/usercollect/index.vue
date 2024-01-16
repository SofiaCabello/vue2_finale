<template>
  <div class="user-collect">
    <van-nav-bar
      class="app-nav-bar" 
      title="收藏" 
      left-arrow 
      @click-left="$router.back()" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <div v-for="(item, index) in collectList" :key="index">
        <van-swipe-cell :before-close="beforeClose" :name="index">
          <article-item :article="item" />
          <template #right>
            <van-button class="button" square type="danger" text="移除" @click="onDelete" />
          </template>
        </van-swipe-cell>
      </div>
    </van-list>
    <div class="tips">左滑以删除</div>
  </div>
</template>

<script>
import ArticleItem from "@/components/article-item/index.vue";

export default {
  name: "UserCollectIndex",
  components: {
    ArticleItem
  },
  props: {},
  data() {
    return {
      collectList: [
      {
            id: 1,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 5,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
            
          },
          {
            id: 2,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 2,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 3,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 12,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          }
      ],
      loading: false,
      finished: false,
      page: 1,
      per_page: 10,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    onDelete() {
      this.collectList.splice(this.index, 1);
      this.$toast.success('移除成功');
    }
  }
};
</script>

<style lang="less" scoped>
@keyframes opt {
  0% {
    opacity: 0;
    transform: scaleX(0) scaleY(0);
  }

  50% {
    opacity: 1;
    transform: scaleX(100%) scaleY(100%);
  }

  100% {
    opacity: 0;
    transform: scaleX(0) scaleY(0);
  }
}

.button {
  height: 100%;
}

.tips {
  width: 150px;
  height: 30px;
  font-size: 10px;
  line-height: 30px;
  text-align: center;
  background-color: rgb(248, 45, 96);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  color: rgb(255, 255, 255);
  position: fixed;
  bottom: 20%;
  opacity: 0;
  animation: opt 4s ease forwards;
  animation-delay: 1s;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>