<template>
  <div class="trends-detail-container">
    <van-nav-bar title="热搜详情" class="app-nav-bar" />
    <div class="trends-detail">
      <h2>{{ hotSearchDetail.keyword }}</h2>
      <p v-html="hotSearchDetail.description"></p>
    </div>

    <!-- 评论按钮 -->
    <div class="comment-button-wrapper">
      <van-button
        type="primary"
        @click="showCommentInput = true"
        round
        block
      >
        发表评论
      </van-button>
    </div>

    <!-- 评论弹窗 -->
    <van-popup v-model="showCommentInput" position="bottom" :style="{ height: '50vh' }">
      <van-field
        v-model="comment"
        label="评论"
        placeholder="请输入评论"
        type="textarea"
        autosize
      />
      
      <!-- 提交按钮 -->
      <div class="submit-button-wrapper">
        <van-button
          type="primary"
          @click="submitComment"
          round
          block
        >
          提交
        </van-button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'TrendsDetail',
  data() {
    return {
      hotSearchDetail: {}, // 初始为空
      showCommentInput: false,
      comment: '',
      // 初始热搜详情信息
      hotSearchDetails: {
        '1': {
                keyword: '美众议长庆祝特朗普赢得党内首场初选',
                description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美国众议长欣然庆祝特朗普在党内首场初选中取得胜利。这一胜利标志着特朗普在党内的领先地位，为即将到来的大选奠定了基础。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;众议长表示，特朗普在初选中遥遥领先的成绩充分证明了他在党内的广泛支持和领导力。特朗普的竞选活动将继续备受关注，人们期待着他在未来的政治舞台上展现更多的领导力。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在接下来的日子里，特朗普的竞选活动进入了白热化阶段。他在各个州展开激烈的造势活动，吸引了大批支持者参与。他的演讲充满激情，强调国家的独立、经济的繁荣和国际地位的提升。特朗普的竞选团队制定了一系列政策纲领，包括经济复苏计划、社会改革和国家安全战略，引起了广泛的关注和讨论。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与此同时，其他党派的候选人也在紧锣密鼓地开展竞选活动。竞选辩论成为备受瞩目的焦点，候选人们在辩论台上展开激烈交锋，针对各自的政见进行辩护。选民们通过观看辩论，更加了解候选人的政策立场和领导风格，为自己的选票做出理性决策。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大选日临近，选情日益紧张。各方开始发布民调数据，试图预测选举结果。媒体对于每一个候选人的一举一动都进行了详细解读，舆论沸沸扬扬。社交媒体上充斥着关于大选的讨论和各种观点，选民们积极参与其中，表达自己的看法和立场。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最终，大选结果揭晓，特朗普成功连任。他在多个关键州取得胜利，确保了足够的选举人票。特朗普在胜选演讲中表示，将继续致力于推动国家发展，解决社会问题，加强国际合作。这一选举不仅影响着美国国内的政治格局，也在全球范围内引起广泛关注和反响。特朗普的连任引发了社会各界的不同反应，支持者为之欢呼，反对者则表达了不满。政治舞台上的变数仍然存在，未来的发展充满了不确定性。美国政治将继续经历新的变革和挑战，而选民们将继续关注国家的发展方向和政策走向。'
        },

        '2': { 
          keyword: '伊朗向伊叙境内目标发射导弹', 
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伊朗最近向伊拉克叙利亚边境地区发射导弹，引起国际社会的关切。这一举动被解读为伊朗在该地区地缘政治紧张局势中的回应。国际社会呼吁各方保持克制，避免升级冲突。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，各方正在密切关注事态的发展，希望通过对话和外交手段解决分歧，维护地区的和平与稳定。在此背景下，联合国积极介入，呼吁各方展开对话，通过和平方式解决争端。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时，一些地区和国家表示愿意扮演调解角色，推动各方坐下来共商解决方案。国际社会普遍认为，通过外交途径解决分歧是最理想的选择，有助于避免冲突扩大化。同时，一些国家强调了国际法和联合国相关决议的重要性，呼吁各方遵守相关规定，共同维护地区的和平与稳定。在这一紧张局势下，各方需要保持冷静，通过对话解决分歧，共同努力维护地区的和平局面。'

        },
        '4': {
          keyword: '美国大选首战 特朗普党内遥遥领先',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在美国大选的首场初选中，特朗普取得了显著的领先地位，成为备受关注的焦点。这一胜利不仅在党内稳固了他的地位，也为他在总统选战中赢得更多支持提供了助力。人们对于特朗普未来的政策和竞选策略充满期待，这场大选注定会成为国际社会关注的焦点。',
        },
        '5': {
          keyword: '伊朗袭击恐怖组织 美国为何紧张',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伊朗最近对恐怖组织发动袭击，引起了美国的紧张反应。这一事件再次引发了国际社会对于地区安全和反恐合作的关切。美国政府表示将密切监视事态的发展，并采取必要措施保护国家安全。同时，国际社会也呼吁各方通过对话解决分歧，共同应对恐怖主义威胁。',
        },
        '6': {
          keyword: '女孩在731部队罪证陈列馆哭喊妈妈',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一名女孩在731部队罪证陈列馆中发出哭喊声，引起了人们对历史罪行的深刻反思。731部队是二战中日本进行细菌战的单位，其罪行令人震惊。女孩的哭喊让人们更加关注历史真相，呼吁对于历史罪行进行深刻反思，维护和平与公正。',
        },
        '7': {
          keyword: '中方建议菲律宾总统多读读书',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中国政府向菲律宾总统提出建议，鼓励其多读书，加深对各领域知识的了解。这一建议受到了各方的关注，引发了对于领导人素养和知识水平的讨论。倡导阅读不仅有助于领导者更好地理解国际形势，也有助于促进文化交流和国际合作。',
        },
        '8': {
          keyword: '香港客机与韩国客机在日本机场相撞',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一起香港客机与韩国客机在日本机场相撞的事件引发了人们对于飞行安全的担忧。此次事故造成了一定的人员伤亡和机损，调查人员正在全力调查事故原因。航空安全问题成为社会关注的焦点，呼吁各方共同努力提升飞行安全水平。',
        },
        '9': {
          keyword: '伊朗公布打击以色列摩萨德画面',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伊朗公布了对以色列摩萨德组织的打击画面，引起了国际社会的广泛关注。这一举动再次凸显了中东地区紧张局势，各方对于地区安全形势的担忧进一步加剧。国际社会呼吁各方通过对话和外交手段解决争端，共同维护地区和平。',
        },
        '10': {
          keyword: '警方辟谣重庆璧山出现新型背债人',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有关重庆璧山出现新型背债人的谣言被当地警方辟谣。这一事件再次提醒人们在信息传播中保持理性和警惕。警方呼吁社会各界不信谣、不传谣，共同维护社会的稳定和安宁。',
        },
        '11': {
          keyword: '雷佳音托举贾玲笑拥了',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在一次娱乐活动中，演员雷佳音展现了对同行贾玲的支持。两人的亲密互动引发了粉丝们的热烈关注，笑声和欢乐充满整个活动现场。'
        },

        '12': {
          keyword: '朝鲜废除祖国和平统一委员会',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;朝鲜近日宣布废除祖国和平统一委员会，引发国际社会广泛关注。这一举动可能对朝鲜半岛的地缘政治格局产生深远影响，各方对其动向充满关切。'
        },

        '13': {
          keyword: '胡海峰任民政部副部长',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;胡海峰近期被任命为民政部副部长，成为政府新一届领导团队的一员。他此前在各级政府工作中表现突出，新职务将为他在民政领域发挥更大作用提供平台。'
        },

        '14': {
          keyword: '伊朗向伊拉克发射导弹 中方回应',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;伊朗最近向伊拉克发射导弹，中方对此做出回应。国际社会对于中东紧张局势的关切与日俱增，各方期待通过外交途径解决分歧，维护地区的和平稳定。'
        },

        '15': {
          keyword: '心理学家谈张新伟自杀悲剧',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;张新伟的自杀引发社会对心理健康问题的关注。心理学家对此进行深入分析，呼吁社会关注心理健康，提供更多支持和理解。'
        },

        '16': {
          keyword: '女子吃席偶遇前夫热情打招呼',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一名女子在聚餐现场偶遇前夫，两人热情打招呼。这一温馨的场面引发了网友的热议，关于感情和人际交往的话题再次成为焦点。'
        },

        '17': {
          keyword: '小土豆在哈尔滨机场推着行李狂奔',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小土豆在哈尔滨机场被目击推着行李狂奔，画面搞笑又可爱。网友纷纷评论称小土豆的活泼形象为生活增添了一抹亮色。'
        },

        '18': {
          keyword: '路面结冰一家三口摔得整整齐齐',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一家三口在冰雪天气中走在结冰的路面上，不慎滑倒。这个搞笑的瞬间被路人拍摄并上传至网络，引发大家对冰雪安全的关注。'
        },

        '19': {
          keyword: '女子撞死外婆 家属谅解或可免刑罚',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一名女子因交通事故导致外婆死亡，家属出面表示谅解，提出免除刑罚。这一事件引发社会对于法律与人情的思考和讨论。'
        },

        '20': {
          keyword: '游本昌为了好剧本卖房',
          description: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;导演游本昌为了创作好的剧本，决定卖房筹集资金。这一举动引起行业内外的热议，关于艺术创作与生活选择的话题再次引起关注。'
        },
      },
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
      // 根据id获取相应的热搜详情
      this.hotSearchDetail = this.hotSearchDetails[hotSearchId] || {};
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

.comment-button-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: #fff;
}

.submit-button-wrapper {
  position: fixed;
  bottom: 10px; /* 调整按钮与底部的距离 */
  left: 0;
  right: 0;
  padding: 10px;
}
</style>
