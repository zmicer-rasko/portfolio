<template>
  <div id="skills-screen">
    <div class="container">
      <div id="skills-title">
        <screen-title id="skills-title-item" title="Skills"/>
      </div>

      <div id="skills-screen-content">
        <div class="skills-section" v-for="(section, sectionIndex) in exp" :key="sectionIndex">

          <div class="skills-section-title black-bg uc f3" data-aos="flip-left">
            {{ section.title }}
          </div>

          <div class="skills-section-items-wrapper">
            <span class="skills-section-item f5 pre-bulleted" v-for="(item, index) in section.items" :key="index">{{ item }}</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ScreenTitle from '../components/ScreenTitle';
import {PowerGlitch} from "powerglitch";

export default {
  name: 'Skills',
  components: {
    ScreenTitle,
  },
  computed: {
    exp() { return this.$store.getters['experience/data']; },
  },
  mounted() {
    if (!this.isPdf) {
      PowerGlitch.glitch('#skills-title-item', { playMode: 'hover' })
    }
  },
}
</script>

<style lang="scss" scoped>
#skills-screen {

  #skills-title {
    width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  #skills-screen-content {
    width: 80%;
    margin: 0 auto;
  }

  .skills-section {
    width: 80%;
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: flex-start;

    &:last-of-type {
      margin-bottom: 0;
    }

    .skills-section-title {
      margin-top: 0 !important;
      margin-bottom: 30px;
    }

    .skills-section-items-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;
    }

    .skills-section-item {
      margin-bottom: 10px;
    }
  }
}

@media only screen and (max-width: 767px) {
  #skills-screen {
    .skills-section-title {
      margin-top: 30px !important;
      margin-bottom: 20px !important;
      font-size: 12px !important;
    }
  }
}

@media only screen and (min-width: 768px) {
  #skills-screen {
    .skills-section-title {
      margin-top: 30px !important;
      margin-bottom: 30px !important;
    }
  }
}
</style>
