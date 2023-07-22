<template>
  <div id="highlights-screen">
    <div class="container">

      <div id="highlights-title">
        <screen-title id="highlights-title-item" title="Highlights"/>
      </div>

      <div class="uc highlights-wrapper">
        <div class="highlight-item">
          <span class="highlight-item-title f2">Experience</span>
          <span class="highlight-item-text f3 txt-bordered">{{years}}+ years</span>
        </div>
        <div class="highlight-item middle-item">
          <span class="highlight-item-title f2">Mentor</span>
          <span class="highlight-item-text f3 txt-bordered">3 students employed</span>
        </div>
        <div class="highlight-item">
          <span class="highlight-item-title f2">Education</span>
          <a class="highlight-item-text f3 txt-bordered" href="https://www.bsuir.by/en/">BSUIR</a>
        </div>
      </div>

      <div class="uc highlights-wrapper hw-mastery">
        <div class="highlight-item">
          <span class="highlight-item-title f2">Mastery</span>
          <div class="highlight-icons-wrapper">
            <div class="highlight-icons-wrapper-column php" @click="goto('https://www.php.net/')" @mouseover="onHover('php')" @mouseout="onHoverOut('php')">
              <svg class="highlight-icon" :fill="fill.php" width="100px" height="100px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 12v8A10 10 0 0 1 8.17.17L10 2h5a5 5 0 0 1 5 4.99v9.02A4 4 0 0 1 16 20v-2a2 2 0 1 0 0-4h-4l-2-2zm5.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>
              <span class="highlight-item-text f3 txt-bordered">PHP</span>
            </div>
            <div class="highlight-icons-wrapper-column laravel" @click="goto('https://laravel.com/')" @mouseover="onHover('laravel')" @mouseout="onHoverOut('laravel')">
              <svg class="highlight-icon" width="100px" height="100px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :fill="fill.laravel" d="M2 3.57148L1.84189 3.09714C1.59403 3.17976 1.45156 3.43928 1.51493 3.69275L2 3.57148ZM4.35714 2.78577L4.80436 2.56216C4.69308 2.3396 4.43509 2.23274 4.19903 2.31142L4.35714 2.78577ZM9.07143 12.2143L8.62422 12.4379C8.6865 12.5625 8.79792 12.6555 8.93163 12.6944C9.06535 12.7333 9.20925 12.7147 9.32868 12.6431L9.07143 12.2143ZM13 9.85719L13.2572 10.2859C13.3729 10.2165 13.4556 10.1034 13.4866 9.97207C13.5176 9.84079 13.4942 9.70256 13.4218 9.58876L13 9.85719ZM10.25 5.53577L10.1287 5.0507C9.97281 5.08968 9.84513 5.20123 9.78558 5.35052C9.72604 5.4998 9.74188 5.66861 9.82817 5.8042L10.25 5.53577ZM11.8214 5.14291L12.2214 4.84291C12.1007 4.68197 11.8953 4.60905 11.7002 4.65784L11.8214 5.14291ZM13 6.71434L13.1581 7.18868C13.3106 7.13786 13.4293 7.01683 13.4773 6.86342C13.5252 6.71001 13.4964 6.54292 13.4 6.41434L13 6.71434ZM3.57143 9.85719L3.08636 9.97846C3.12014 10.1136 3.20874 10.2285 3.33082 10.2955C3.45291 10.3625 3.59742 10.3756 3.72954 10.3315L3.57143 9.85719ZM2.15811 4.04582L4.51526 3.26011L4.19903 2.31142L1.84189 3.09714L2.15811 4.04582ZM3.90993 3.00937L6.8283 8.84611L7.72272 8.39889L4.80436 2.56216L3.90993 3.00937ZM6.8283 8.84611L8.62422 12.4379L9.51864 11.9907L7.72272 8.39889L6.8283 8.84611ZM9.32868 12.6431L13.2572 10.2859L12.7428 9.42845L8.81418 11.7856L9.32868 12.6431ZM13.4218 9.58876L11.7718 6.9959L10.9282 7.53278L12.5782 10.1256L13.4218 9.58876ZM11.7718 6.9959L10.6718 5.26733L9.82817 5.8042L10.9282 7.53278L11.7718 6.9959ZM10.3713 6.02084L11.9427 5.62798L11.7002 4.65784L10.1287 5.0507L10.3713 6.02084ZM11.4214 5.44291L12.6 7.01434L13.4 6.41434L12.2214 4.84291L11.4214 5.44291ZM12.8419 6.24L11.1919 6.79L11.5081 7.73868L13.1581 7.18868L12.8419 6.24ZM11.1919 6.79L7.1174 8.14816L7.43362 9.09684L11.5081 7.73868L11.1919 6.79ZM7.1174 8.14816L3.41331 9.38285L3.72954 10.3315L7.43362 9.09684L7.1174 8.14816ZM4.0565 9.73593L2.48507 3.45021L1.51493 3.69275L3.08636 9.97846L4.0565 9.73593ZM2.5 1H12.5V0H2.5V1ZM14 2.5V12.5H15V2.5H14ZM12.5 14H2.5V15H12.5V14ZM1 12.5V2.5H0V12.5H1ZM2.5 14C1.67157 14 1 13.3284 1 12.5H0C0 13.8807 1.11929 15 2.5 15V14ZM14 12.5C14 13.3284 13.3284 14 12.5 14V15C13.8807 15 15 13.8807 15 12.5H14ZM12.5 1C13.3284 1 14 1.67157 14 2.5H15C15 1.11929 13.8807 0 12.5 0V1ZM2.5 0C1.11929 0 0 1.11929 0 2.5H1C1 1.67157 1.67157 1 2.5 1V0Z"/>
              </svg>
              <span class="highlight-item-text f3 txt-bordered">Laravel</span>
            </div>
            <div class="highlight-icons-wrapper-column vue" @click="goto('https://vuejs.org/')" @mouseover="onHover('vuejs')" @mouseout="onHoverOut('vuejs')">
              <svg class="highlight-icon" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path :fill="fill.vuejs" d="M1 3h4l7 12 7-12h4L12 22 1 3zm8.667 0L12 7l2.333-4h4.035L12 14 5.632 3h4.035z"/>
                </g>
              </svg>
              <span class="highlight-item-text f3 txt-bordered">VueJS</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ScreenTitle from "../components/ScreenTitle";
import moment from "moment";
import { PowerGlitch } from 'powerglitch';

export default {
  name: 'Highlights',
  components: {
    ScreenTitle,
  },
  data() {
    return {
      fill: {
        php: '#000000',
        laravel: '#000000',
        vuejs: '#000000',
      },
    };
  },
  computed: {
    years() {
      return moment().diff('2016-04-01', 'years');
    }
  },
  methods: {
    goto(url) {
      window.open(url);
    },
    onHover(type) {
      if (type === 'php') {
        this.fill.php = '#7A86B9';
      }

      if (type === 'laravel') {
        this.fill.laravel = '#F13B2F';
      }

      if (type === 'vuejs') {
        this.fill.vuejs = '#42B883';
      }
    },
    onHoverOut(type) {
      this.fill[type] = '#000000';
    }
  },
  mounted() {
    if (!this.isPdf) {
      PowerGlitch.glitch('#highlights-title-item', { playMode: 'hover' })
    }
  },
}
</script>

<style lang="scss" scoped>
#highlights-screen {
  width: 100%;
  clear: both;
  background: white;
  position: relative;
  z-index: 100;
}

.middle-item {
  position: absolute;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0);
}

.highlights-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .highlight-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: dashed;
    border-radius: 7px;
    padding: 2rem;

    .highlight-icons-wrapper {
      display: flex;
      flex-direction: row;
      margin-top: 8px;
      width: 500px;
      justify-content: space-evenly;
    }

    .highlight-icon {
      width: 100px;
      height: 100px;
    }

    .highlight-icons-wrapper-column {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }

    .highlight-item-title {
      font-weight: 900;
      position: relative;
      color: #000;
      margin-bottom: 0.75rem;
      text-align: center;

      font-family: 'Press Start 2P', cursive;
    }

    .highlight-item-text {
      //font-family: 'Chivo Mono', monospace;
      //font-family: 'Press Start 2P', cursive;
      //font-family: 'VT323', monospace;

      margin-top: 20px;
    }

    a.highlight-item-text {
      text-decoration: none;
      background: transparent;
    }
  }
}

.hw-mastery {
  justify-content: center;
  margin-top: 50px;
}

.php:hover {
  span {
    color: #7A86B9 !important;
    -webkit-text-stroke: 1px #7A86B9 !important;
  }
}

.laravel:hover {
  span {
    color: #F13B2F !important;
    -webkit-text-stroke: 1px #F13B2F !important;
  }
}

.vue:hover {
  span {
    color: #42B883 !important;
    -webkit-text-stroke: 1px #42B883 !important;
  }
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .highlight-item {
    border: none !important;
  }
}

@media only screen and (max-width: 767px) {
  .highlights-wrapper {
    flex-direction: column;
  }

  .highlight-item {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .highlight-item-text {
    margin-top: 12px !important;
    color: black;
    -webkit-text-stroke: transparent;
    font-size: 10px;
  }

  .highlight-item-title {
    margin-bottom: 5px !important;
  }

  .middle-item {
    position: initial;
    left: 0;
    margin-right: 0;
    transform: none;
  }

  .highlight-icons-wrapper {
    width: 95% !important;
    justify-content: space-between !important;
  }

  svg.highlight-icon {
    width: 50px !important;
    height: 50px !important;
  }

  .hw-mastery {
    margin-top: 0;
  }
}
</style>
