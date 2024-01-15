<template>
  <div class="article-list-container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleItem 
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
      />
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/components/article-item/index.vue';
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data() { 
    return {
      articles: [],
      loading: false,
      finished: false
    };
  },
  computed: {},
  watch: {},
  created() { 
  },
  mounted() {},
  methods: {
    onLoad() {
      const article_list = {
        articles: [
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
          },
          {
            id: 4,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 1,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 5,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 4,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id:6,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 6,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 7,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 7,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 8,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 8,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 9,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 9,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 10,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 10,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },{
            id: 11,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 11,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 12,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 12,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          },
          {
            id: 13,
            title: '初音未来',
            author: '初音未来',
            content: '初音未来',
            coment: 13,
            image: '@/assets/images/miku.jpg',
            created_at: '2024-01-01 ',
          }
        ]
      }
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.articles.push(...article_list.articles);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.articles.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
}
</script>

<style lang="less">
.article-list-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  top: 90px;
  overflow-y: auto;
}
</style>