<template>
  <div class="article-container">
    <van-nav-bar class="app-nav-bar" title="文章详情" left-arrow @click-left="$router.back()" />

    <h1 class="title">初音未来</h1>

    <van-cell center class="user-info">
      <div slot="title" class="author">初音未来</div>
      <van-image class="avatar" slot="icon" width="35px" height="35px" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <div slot="label" class="pubdate">39小时前</div>
      <van-button class="follow-btn" :type="isFollowing ? 'default' : 'info'" :color="isFollowing ? '#aaa' : '#39c5bb'"
        fit="cover" round :icon="isFollowing ? 'cross' : 'plus'" size="small" @click="onFollow">{{ this.isFollowing ?
          '已关注' : '关注' }}</van-button>
    </van-cell>
    <div class="markdown-body">
      <p>初音未来（日语：初音（はつね） ミク，平文式罗马字：Hatsune Miku）是Crypton Future
        Media株式会社企划、开发、贩售的，使用YAMAHA的VOCALOID引擎和Crypton自主研发的NT歌声合成引擎的声音库软件及其拟人化形象。

        初音未来与镜音铃·连、巡音流歌、MEIKO、KAITO共称为“Piapro角色”[2]，或“初音未来和她的伙伴们”。初音未来也是Crypton“角色主唱系列”（Character Vocal
        Series）的第一作，代号为CV01。[注 1]

        初音未来的日文与英文简称分别为“ミク”与“Miku”（两者读音基本相同(注)同一个音位在不同语言中的音值必定略有差异，不会完全相同），而中文社区则经常简称为“初音”。

        “初音未来”“初音ミク”“雪未来”“樱花未来”“赛车未来”等为Crypton在中国大陆地区的注册商标。

        2014年末至今（2024年1月），上海新创华文化发展有限公司是初音未来等Crypton旗下虚拟歌姬角色形象、IP在中国大陆地区的版权总代理。

        自发行以来，初音未来、Crypton公司与广大创作者和受众们逐渐建立着“向未来无限延续的「初音未来」创作文化”。[3][4]</p>
      <p>初音未来（日语：初音（はつね） ミク，平文式罗马字：Hatsune Miku）是Crypton Future
        Media株式会社企划、开发、贩售的，使用YAMAHA的VOCALOID引擎和Crypton自主研发的NT歌声合成引擎的声音库软件及其拟人化形象。

        初音未来与镜音铃·连、巡音流歌、MEIKO、KAITO共称为“Piapro角色”[2]，或“初音未来和她的伙伴们”。初音未来也是Crypton“角色主唱系列”（Character Vocal
        Series）的第一作，代号为CV01。[注 1]

        初音未来的日文与英文简称分别为“ミク”与“Miku”（两者读音基本相同(注)同一个音位在不同语言中的音值必定略有差异，不会完全相同），而中文社区则经常简称为“初音”。

        “初音未来”“初音ミク”“雪未来”“樱花未来”“赛车未来”等为Crypton在中国大陆地区的注册商标。

        2014年末至今（2024年1月），上海新创华文化发展有限公司是初音未来等Crypton旗下虚拟歌姬角色形象、IP在中国大陆地区的版权总代理。

        自发行以来，初音未来、Crypton公司与广大创作者和受众们逐渐建立着“向未来无限延续的「初音未来」创作文化”。[3][4]</p>
      <p>初音未来（日语：初音（はつね） ミク，平文式罗马字：Hatsune Miku）是Crypton Future
        Media株式会社企划、开发、贩售的，使用YAMAHA的VOCALOID引擎和Crypton自主研发的NT歌声合成引擎的声音库软件及其拟人化形象。

        初音未来与镜音铃·连、巡音流歌、MEIKO、KAITO共称为“Piapro角色”[2]，或“初音未来和她的伙伴们”。初音未来也是Crypton“角色主唱系列”（Character Vocal
        Series）的第一作，代号为CV01。[注 1]

        初音未来的日文与英文简称分别为“ミク”与“Miku”（两者读音基本相同(注)同一个音位在不同语言中的音值必定略有差异，不会完全相同），而中文社区则经常简称为“初音”。

        “初音未来”“初音ミク”“雪未来”“樱花未来”“赛车未来”等为Crypton在中国大陆地区的注册商标。

        2014年末至今（2024年1月），上海新创华文化发展有限公司是初音未来等Crypton旗下虚拟歌姬角色形象、IP在中国大陆地区的版权总代理。

        自发行以来，初音未来、Crypton公司与广大创作者和受众们逐渐建立着“向未来无限延续的「初音未来」创作文化”。[3][4]</p>
    </div>

    <div class="bottom-content">
      <van-button class="comment-btn" type="default" round size="small">写评论</van-button>
      <van-icon name="comment-o" info="10" color="#777" />
      <van-icon color="#777" name="star-o" />
      <van-icon color="#777" name="good-job-o" />
      <van-icon color="#777" name="share" />
    </div>
  </div>
</template>

<script>
import './github-markdown.css'
export default {
  name: 'ArticleIndex',
  components: {},
  props: {
    articleId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      isFollowing: undefined
    };
  },
  computed: {},
  watch: {},
  created() {
    this.isFollowing = this.$store.state.isFollowing
  },
  mounted() { },
  methods: {
    onFollow() {
      if (this.isFollowing) {
        this.isFollowing = !this.isFollowing
        this.$store.commit('setFollow', false)
        this.$toast('取消关注成功')
      } else {
        this.isFollowing = !this.isFollowing
        this.$store.commit('setFollow', true)
        this.$toast('关注成功')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 20px;
  color: #000;
  padding: 14px;
}

.user-info {
  .author {
    font-size: 12px;
    color: #333333;
  }

  .pubdate {
    font-size: 12px;
    color: #999999;
  }

  .avatar {
    width: 35px;
    height: 35px;
    margin-right: 8px;
  }

  .follow-btn {
    width: 85px;
    height: 30px;
    background-color: #39c5bb;
  }
}

.markdown-body {
  padding: 14px;
  background-color: #fff;
}

.bottom-content {
  position: fixed;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 44px;
  background-color: white;

  .comment-btn {
    width: 141px;
    height: 23px;
    font-size: 15px;
  }
}
</style>