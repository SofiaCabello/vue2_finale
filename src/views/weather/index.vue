<template>
  <div class="wrapper">
    <van-nav-bar class="app-nav-bar" title="天气" />
    <!-- 顶部卡片 -->
    <div class="weather-top-cotainer">
      <div>
        <div class="main-weather">
          <div class="main-left">
            <span v-if="!loading && loadSucces" class="main-tempture">{{ this.temperature }}°</span>
            <span v-else class="main-tempture">{{ temperature }}</span>
            <span v-if="!loading && loadSucces" class="main-status">{{ this.weather }}</span>
            <span v-else class="main-status">多云</span>
          </div>
          <div class="main-right">
            <span class="date">中央气象台 {{ this.reporttime }} 报</span>
          </div>
        </div>
        <div class="sub-item">
          <div>
            当前 {{ this.winddirection }} 风 {{ this.windpower }} 级
          </div>
        </div>
        <div class="bottom-item">
          <div class="today-wind">
            <span>湿度 {{ this.humidity }}%</span>
          </div>
          <div class="my-location">
            <span class="city">{{ this.city }}</span><br/>
            <span class="switch">地区编码{{ this.adcode }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWeather } from "@/api/weather";
import axios from "axios";
import { Toast } from 'vant';
export default {
  name: "weather",
  data() {
    return {
      temperature: "",
      weather: "",
      city: "",
      winddirection: "",
      windpower: "",
      humidity: "",
      reporttime: "",
      adcode: "",
      showPopup: false,
      loading: false,
      loadSucces: true,
      city: "",
    };
  },
  methods: {
    async getWeather() {
      this.loading = true
      try {
        const response = await getWeather();
        const data = response.data;
        this.temperature = data.lives[0].temperature;
        this.weather = data.lives[0].weather;
        this.city = data.lives[0].city;
        this.winddirection = data.lives[0].winddirection;
        this.windpower = data.lives[0].windpower;
        this.humidity = data.lives[0].humidity;
        this.reporttime = data.lives[0].reporttime;
        this.adcode = data.lives[0].adcode;
      } catch (response) {
        Toast('获取天气失败');
        this.loadSucces = false;
      }
      this.loading = false;
    },
    changeCity() {
      console.log(123);
    }
  },
  async mounted() {
    this.getWeather();
  },
};
</script>

<style scoped lang="less">
@keyframes bg-color {
  0% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 0%;
  }

  100% {
    background-position: 0% 0%;
  }
}

.wrapper {
  margin: 0;
  position: fixed;
  overflow-y: auto;
  top: 0;
  bottom: 46px;
  left: 0;
  right: 0;
  background-size: 200% 200%;
  background-image: linear-gradient(120deg, #f9fbff 0%, #7ad5ff8a 100%);
  animation: bg-color 10s linear infinite;

  .van-cell-group--inset {
    margin: 8px 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

    .van-cell {
      color: #fff;
      background-image: linear-gradient(60deg, #ff9380 0%, #347afc5d 100%);

      .van-cell__label {
        color: rgb(4, 33, 196);
      }

      .van-cell__value {
        flex: unset;
        color: rgb(255, 255, 255);
      }
    }
  }

  .title2 {
    padding: 4px 10px;
    font-size: 20px;
    color: rgb(21, 70, 100);
  }

  .gird-future {
    overflow-x: auto;
    display: flex;
    flex-shrink: 0;
    flex-basis: 0;
    border-radius: 5px;
    margin: 10px 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    width: 355px;
    height: 142px;
    // background-color: rgb(96, 183, 233);
    background-image: linear-gradient(120deg, #f79f779a 0%, #9e90e475 100%);

    .grid-item {
      position: relative;
      width: 25%;
      height: 142px;
      flex-shrink: 0;
      display: flex;
      color: white;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      &::after {
        position: absolute;
        content: "";
        right: 0;
        width: 1px;
        height: 130px;
        background-color: rgba(255, 255, 255, 0.404);
      }

      .icon {
        width: 35px;
        height: auto;
      }

      .main-text {
        font-size: 23px;
      }

      .temp {
        font-size: 14px;
      }

      .day {
        font-size: 12px;
      }

      .date {
        font-size: 10px;
      }
    }
  }

  .rain-and-api {
    border-radius: 5px;
    font-size: 16px;
    margin: 10px 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    width: 355px;
    height: 40px;
    color: #fff;
    // background-color: rgb(96, 183, 233);
    background-size: 200% 200%;
    animation: bg-color 5s linear infinite;
    background-image: linear-gradient(170deg, #ff97a5 0%, #b2def8 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 7px;
  }

  .weather-top-cotainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    margin: 10px 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    width: 355px;
    height: 162px;
    background-size: 200% 200%;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
    animation: bg-color 10s linear infinite;
    // background-color: rgb(96, 183, 233);
    padding: 7px 12px;

    .main-weather {
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .main-left {
        display: flex;
        align-items: flex-end;

        .main-tempture {
          font-size: 48px;
          transform: translateY(5px);
          line-height: 48px;
        }

        .main-status {
          font-size: 27px;
        }
      }

      .main-right {
        font-size: 10px;
        padding: 5px;
      }
    }

    .sub-item {
      margin-left: 5px;
      margin-top: 5px;
      font-size: 14px;
      color: #fff;
    }

    .bottom-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      color: #fff;

      .today-wind {
        font-size: 20px;
      }

      .my-location {
        text-align: right;

        .city {
          font-size: 20px;
        }

        .switch {
          color: rgb(224, 223, 223);
          font-size: 15px;
        }
      }
    }
  }
}
</style>