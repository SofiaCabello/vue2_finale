<template>
  <div class="trends-container">
    <van-nav-bar title="热点" class="app-nav-bar" />
    <van-cell v-for="(item, index) in hotSearchList" :key="item.id" @click="goToDetail(item.id)">
      <span class="hot-number">{{ index + 1 }} </span>
      <span v-html="getHotSearchText(item)"></span>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'TrendsIndex',
  components: {},
  props: {},
  data() {
    return {
      hotSearchList: [
      { id: 1, keyword: '美众议长庆祝特朗普赢得党内首场初选', count: '1243434' },
        { id: 2, keyword: '伊朗向伊叙境内目标发射导弹', count: '1200114' },
        { id: 3, keyword: '冷冰雪如何撬动热经济', count: '1083024' },
        { id: 4, keyword: '美国大选首战 特朗普党内遥遥领先', count: '632945' },
        { id: 5, keyword: '伊朗袭击恐怖组织 美国为何紧张', count: '601872' },
        { id: 6, keyword: '女孩在731部队罪证陈列馆哭喊妈妈', count: '558937' },
        { id: 7, keyword: '中方建议菲律宾总统多读读书', count: '538934' },
        { id: 8, keyword: '香港客机与韩国客机在日本机场相撞', count: '503481' },
        { id: 9, keyword: '伊朗公布打击以色列摩萨德画面', count: '478927' },
        { id: 10, keyword: '警方辟谣重庆璧山出现新型背债人', count: '452983' },
        { id: 11, keyword: '雷佳音托举贾玲笑拥了', count: '448920' },
        { id: 12, keyword: '朝鲜废除祖国和平统一委员会', count: '428927' },
        { id: 13, keyword: '胡海峰任民政部副部长', count: '402893' },
        { id: 14, keyword: '伊朗向伊拉克发射导弹 中方回应', count: '378012' },
        { id: 15, keyword: '心理学家谈张新伟自杀悲剧', count: '359283' },
        { id: 16, keyword: '女子吃席偶遇前夫热情打招呼', count: '303527' },
        { id: 17, keyword: '小土豆在哈尔滨机场推着行李狂奔', count: '289034' },
        { id: 18, keyword: '路面结冰一家三口摔得整整齐齐', count: '281082' },
        { id: 19, keyword: '女子撞死外婆 家属谅解或可免刑罚', count: '279304' },
        { id: 20, keyword: '游本昌为了好剧本卖房', count: '259304' },
        { id: 21, keyword: 'MongoDB', count: '293063' },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
  addRandomText() {
    const randomNumber = Math.floor(Math.random() * 15);

    switch (randomNumber) {
      case 5:
        return '<span style="color: red; font-size: smaller;"> 热</span>';
      case 6:
        return '<span style="color: blue; font-size: smaller;">' + this.getDynamicIcon() + ' 直播中</span>';
      case 7:
        return '<span style="color: red; font-size: larger; font-weight: bold;"> &#8593;</span>';
      default:
        return '';
    }
  },
  getHotSearchText(item) {
    return `${item.keyword} ${item.count} ${this.addRandomText()}`;
  },
  getDynamicIcon() {
    return '<svg width="20" height="10" xmlns="http://www.w3.org/2000/svg">' +
           '<rect x="0" y="0" width="3" height="10" style="fill: blue; animation: bar1 1s infinite alternate;"></rect>' +
           '<rect x="7" y="0" width="3" height="10" style="fill: blue; animation: bar2 1s infinite alternate;"></rect>' +
           '<rect x="14" y="0" width="3" height="10" style="fill: blue; animation: bar3 1s infinite alternate;"></rect>' +
           '</svg>';
  },
  goToDetail(id) {
    this.$router.push({ name: 'trendsDetail', params: { id } });
  },
  },
};
</script>

<style lang="less">
  /* Add custom styling for the hot number */
  .hot-number {
    font-family: '华文中宋', sans-serif;
    font-weight: bold;
    color: red;
    margin-right: 5px;
  }
</style>
