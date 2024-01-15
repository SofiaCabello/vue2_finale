<template>
    <div class="login-container">
      <van-nav-bar
        class="app-nav-bar"
        title="登录"
        left-arrow
        @click-left="$router.back()"
      />

      <van-cell-group>
        <van-field
          v-model="user.phonenumber"
          left-icon="phone-o"
          placeholder="请输入手机号"
        />
        <van-field
          v-model="user.captcha"
          clearable
          left-icon="chat-o"
          placeholder="请输入验证码"
        >
          <template #button>
            <van-button 
              size="small" 
              type="round"
            >发送验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <div class="login-btn-wrap">
        <van-button 
          class="login-btn" 
          type="info" 
          block
          @click="onLogin"
        >登录 / 注册</van-button>
      </div>
    </div>
</template>

<script>
// import { login } from '@/api/user';
import { mapMutations } from 'vuex';

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data() {
    return {
      user: {
        phonenumber: '',
        captcha: ''
      }
    };
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    onLogin() {
      // 模拟登录
      const data = {
          id: 1,
          phonenumber: '11111111111',
          nickname: '测试用户',
          follow_count: 100,
          fans_count: 100,
          article_count: 100,
          likes_count: 100,
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      };    
      const data_2 = {
          id: 2,
          phonenumber: '22222222222',
          nickname: '测试用户2',
          follow_count: 200,
          fans_count: 1100,
          article_count: 13100,
          likes_count: 1200,
          avatar: 'https://img.yzcdn.cn/vant/cat.jpeg'
      };
      if (this.user.phonenumber === '11111111111' && this.user.captcha === '111111') {
        
        this.$toast('登录成功');
        this.$store.commit('setUser', data);
        this.$router.push({ path: '/profile' });
      } 
      else if (this.user.phonenumber === '22222222222' && this.user.captcha === '222222') {
        this.$toast('登录成功');
        this.$store.commit('setUser', data_2);
        this.$router.push({ path: '/profile' });
      }
      else {22
        this.$toast('手机号或验证码错误');
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  background-color: #fff;
  .login-btn-wrap {
    margin: 20px 15px;
  }
  .login-btn {
    height: 40px;
    line-height: 40px;
    background-color: #39c5bb;
  }
} 
</style>
