<template>
  <div class="profile-container">
    <van-cell-group v-if="user" class="my-info">
      <van-cell class="base-info" title="单元格" value="内容" center :border="false">
        <van-image class="avatar" slot="icon" round fit="cover" :src="currentUser.avatar" />
        <div class="name" slot="title">{{currentUser.nickname}}</div>
        <van-button class="edit-btn" size="small" round>编辑资料</van-button>
      </van-cell>

      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.article_count}}</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.follow_count}}</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.fans_count}}</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.likes_count}}</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <div v-else class="not-login">
      <div class="login-icon" @click="$router.push('/login')">
        <van-icon name="contact" size="40px" />
      </div>
      <div class="text"> 登录 / 注册</div>
    </div>
    <van-grid :column-num="2">
      <van-grid-item icon="star-o" text="收藏" @click="$router.push('/usercollect')"/>
      <van-grid-item icon="underway-o" text="历史" @click="$router.push('/userhistory')" />
    </van-grid>

    <van-cell title="自定义接口1" is-link to="" />
    <van-cell title="自定义接口2" is-link to="" />

    <van-cell 
      class="logout-cell" 
      title="退出登录" 
      v-if="user"  
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProfileIndex',
  components: {},
  props: {},
  data() {
    return {
      currentUser: {}
    };
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created() { 
    this.loadCurrentUser()
  },
  mounted() { },
  methods: {
    loadCurrentUser() {
      const data = this.$store.state.user;
      this.currentUser = data;
    },

    onLogout() {
      this.$store.commit('setUser', null)
    }
  }
}
</script>

<style lang="less">
.profile-container {
  background-color: #bebebe;
  .my-info {
    background: url("./miku.jpg");
    background-size: cover; 
    background-position: center;
    .base-info {
      box-sizing: border-box;
      height: 130px;
      background-color: unset;
      padding-top: 35px;
      padding-bottom: 10px;
      .avatar {
        box-sizing: border-box;
        width: 60px;
        height: 60px;
        margin-right: 10px;
        border: 1px solid #fff;
      }
      .name {
        font-size: 20px;
        color: #fff;
      }
      .edit-btn {
        margin-top: 10px;
        margin-left: 10px;
        background-color: #39c5bb;
        color: #fff;
        font-size: 13px;
      }
    }
    .data-info {
      .data-info-item {
        height: 65px;
        color: #fff;
        .text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count {
            font-size: 18px;
            font-weight: bold;
          }
          .text {
            font-size: 12px;
          }
        }
      }
    }
    .van-grid-item__content {
      background-color: unset;
    }
  }
  .not-login {
    height: 180px;
    background: url("./miku.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      margin-top: 10px;
      font-size: 16px;
      color: #fff;
    }
    .login-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .van-icon {
        color: #39c5bb;
      }
    }
  }
  .logout-cell {
    margin-top: 10px;
    background-color: #f00;
    color: #fff;
    text-align: center;
    font-size: 17px;
  }
}
</style>