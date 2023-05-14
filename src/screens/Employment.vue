<template>
  <div id="employment-screen">
    <div class="container">
      <div id="employments-title">
        <screen-title title="Employments"/>
      </div>

      <div class="emp-wrapper">
        <div class="emp-item f5" data-aos="flip-up">

          <div class="emp-item-img-wrapper">
            <img :src="latest.img" alt="">
          </div>

          <div class="emp-item-text-wrapper">
            <div class="emp-item-line no-mob-before">
              <span class="no-mob bolder">Position</span>
              <span class="emp-title">{{ latest.title }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">From</span>
              <span>{{ latest.from }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">To</span>
              <span>{{ latest.to }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">Duration</span>
              <span>{{ latest.duration }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">Company</span>
              <span>{{ latest.company }}</span>
            </div>
          </div>
        </div>

        <div class="emp-item f5" v-for="(item, index) in employment" :key="index" @click="goTo(item.link)" data-aos="flip-up">

          <div class="emp-item-img-wrapper">
            <img :src="item.img" alt="">
          </div>

          <div class="emp-item-text-wrapper">
            <div class="emp-item-line no-mob-before">
              <span class="no-mob bolder">Position</span>
              <span class="emp-title">{{ item.title }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">From</span>
              <span>{{ item.from }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">To</span>
              <span>{{ item.to }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">Duration</span>
              <span>{{ item.duration }}</span>
            </div>

            <div class="emp-item-line">
              <span class="bolder">Company</span>
              <span>{{ item.company }}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ScreenTitle from '../components/ScreenTitle';
import moment from "moment";
import { PowerGlitch } from 'powerglitch';

export default {
  name: 'Employment',
  components: {
    ScreenTitle,
  },
  computed: {
    employment() { return this.$store.getters['employment/data']; },
    latest() {
      const duration = moment().diff('2023-03-01', 'months') + ' months';

      return {
        title: 'Fullstack web & mobile developer',
        from: 'Mar 2023',
        to: 'By now',
        duration: duration,
        company: 'Unemployed / Freelancer',
        img: 'companies/godmode.png',
        link: 'me',
      };
    }
  },
  methods: {
    goTo(link) {
      if (link === 'itsme') {
        console.log('its me');
      }

      else {
        window.open(link);
      }
    },
  },
  mounted() {
    PowerGlitch.glitch('#employments-title', { playMode: 'hover' })
  },
}
</script>

<style lang="scss" scoped>
#employment-screen {
  width: 100%;
  clear: both;
}

#employments-title {
}

.emp-item {
  margin: 0 auto 50px auto;
  width: 80%;

  &:hover {
    cursor: pointer;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
}

.emp-item-img-wrapper {
  width: 20%;
  text-align: center;
}

.emp-item-text-wrapper {
  width: 80%;
}

.emp-item-line {
  margin-bottom: 10px;
  overflow: hidden;

  &:last-of-type {
    margin-bottom: 0;
  }

  span {
    overflow: hidden;
    background: white;
  }

  span + span {
    float: right;
    padding-left: 10px;
  }

  span:first-of-type {
    overflow: hidden;
    white-space: nowrap;
    padding-right: 10px;
  }
}

.emp-item-line:before {
  float: left;
  width: 0;
  white-space: nowrap;
  content: "....................................................................................................................";
  //content: "+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=";
}

@media only screen and (max-width: 767px) {
  .emp-item {
    width: 100%;
    //justify-content: space-between;

    img {
      //width: 40px;
      display: none;
    }
  }

  .emp-item-img-wrapper {
    width: initial;
  }

  .emp-item-text-wrapper {
    width: 100%;
  }

  .no-mob {
    display: none;
  }

  .no-mob-before {
    text-align: center;
    padding-bottom: 10px;
  }

  .no-mob-before:before {
    display: none;
  }

  .emp-title {
    padding: 0 !important;
    float: none !important;
    text-align: center !important;
    font-weight: bolder;
  }
}

@media only screen and (min-width: 768px) {
  .emp-item-img-wrapper {
    width: 15%;
    text-align: center;
  }

  .emp-item {
    width: 90%;
  }
}
</style>
