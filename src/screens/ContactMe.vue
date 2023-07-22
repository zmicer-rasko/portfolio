<template>
  <div id="contacts-screen">
    <div class="container">
      <div id="contacts-title">
        <screen-title id="contacts-title-item" title="Contacts"/>
      </div>

      <div class="contacts-wrapper" v-if="!isPdf">
        <div class="contact-source tg" @click="telegram" @mouseover="onHover('telegram')" @mouseout="onHoverOut('telegram')" data-aos="flip-up">
          <span class="tg">Telegram</span>
          <svg :fill="fill.telegram" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485 485" xml:space="preserve">
            <g>
              <path d="M90.564,236.876l72.583,27.089l28.094,90.351c1.798,5.784,8.874,7.923,13.569,4.083l40.46-32.981
                c4.24-3.458,10.282-3.628,14.712-0.412l72.975,52.981c5.023,3.65,12.142,0.899,13.401-5.172l53.458-257.136
                c1.375-6.632-5.139-12.164-11.454-9.721L90.48,220.873C83.128,223.706,83.191,234.114,90.564,236.876z M186.713,249.546
                l141.854-87.367c2.548-1.565,5.172,1.882,2.981,3.913L214.479,274.913c-4.116,3.829-6.77,8.957-7.522,14.522l-3.986,29.553
                c-0.531,3.945-6.071,4.335-7.162,0.517l-15.337-53.891C178.717,259.468,181.276,252.901,186.713,249.546z"/>
              <path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>
            </g>
          </svg>
        </div>

        <div class="contact-source email" @click="mail" @mouseover="onHover('email')" @mouseout="onHoverOut('email')" data-aos="flip-up">
          <span class="email">Email</span>
          <svg :fill="fill.email" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="100px" viewBox="0 0 256 241" enable-background="new 0 0 256 241" xml:space="preserve">
            <path d="M254,188V2H2v186h111v29H75v22h106v-22h-38v-29H254z M19,19h217v151H19L19,19z M178.625,124.825l-30.772-30.882
              l30.772-30.772V124.825z M82.559,130.671l30.772-30.772l1.324,1.213c7.279,6.949,18.86,6.949,25.809,0l1.324-1.324l30.993,30.772
              H82.559V130.671z M77.044,63.171l30.662,30.772l-30.772,30.882L77.044,63.171z M172.779,57.325l-37.831,37.831
              c-3.86,3.86-10.699,3.75-14.669-0.11L82.559,57.325H172.779z M68.662,138.943h118.676v-90H68.662V138.943z"/>
          </svg>
        </div>


        <div class="contact-source li" @click="linkedin" @mouseover="onHover('linkedin')" @mouseout="onHoverOut('linkedin')" data-aos="flip-up">
          <span class="li">LinkedIn</span>
          <svg :fill="fill.linkedin" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve">
            <g>
              <path d="M-143,145v512h512V145H-143z M339,627h-452V175h452V627z"/>
              <rect x="-8.5" y="348.4" width="49.9" height="159.7"/>
              <path d="M127.9,508.1v-86.3c0-4.9-0.2-9.7,1.2-13.1c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8 c0-49.4-27.8-72.4-63.3-72.4c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7H127.9z"/>
              <path d="M14.7,328.4h0.4c18.8,0,30.5-12.3,30.4-27.7C45.1,284.9,33.8,273,15.4,273c-18.4,0-30.5,11.9-30.5,27.7C-15.1,316.2-3.4,328.4,14.7,328.4z"/>
            </g>
          </svg>
        </div>
      </div>

      <div class="website f5" v-if="isPdf">
        <div class="print-contact-item-line">
          <span class="bolder">Website</span>
          <span><a href="https://zmicer-rasko.github.io/portfolio">https://zmicer-rasko.github.io/portfolio</a></span>
        </div>
        <div class="print-contact-item-line">
          <span class="bolder">Email</span>
          <span><a href="mailto:zmicer.rasko@gmail.com">zmicer.rasko@gmail.com</a></span>
        </div>
        <div class="print-contact-item-line">
          <span class="bolder">LinkedIn</span>
          <span><a href="https://www.linkedin.com/in/dmitry-rasko-4749a311b">https://www.linkedin.com/in/dmitry-rasko-4749a311b</a></span>
        </div>
        <div class="print-contact-item-line">
          <span class="bolder">Telegram</span>
          <span><a href="https://t.me/d_1_2_3_4">https://t.me/d_1_2_3_4</a></span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ScreenTitle from '../components/ScreenTitle';
import { PowerGlitch } from 'powerglitch';

export default {
  name: 'ContactMe',
  components: {
    ScreenTitle,
  },
  data() {
    return {
      fill: {
        email: '#000000',
        telegram: '#000000',
        linkedin: '#000000',
      },
    };
  },
  computed: {
    exp() { return this.$store.getters['experience/data']; },
  },
  methods: {
    mail() {
      window.location.href = "mailto:zmicer.rasko@gmail.com"
    },
    telegram() {
      window.open('https://t.me/d_1_2_3_4');
    },
    linkedin() {
      window.open('https://www.linkedin.com/in/dmitry-rasko-4749a311b/')
    },
    onHover(type) {
      if (type === 'email') {
        this.fill.email = '#EA4335';
      }

      if (type === 'telegram') {
        this.fill.telegram = '#3290EC';
      }

      if (type === 'linkedin') {
        this.fill.linkedin = '#0966C2';
      }
    },
    onHoverOut(type) {
      this.fill[type] = '#000000';
    },
  },
  mounted() {
    const glitchConf = {
      "playMode": "hover",
      "createContainers": true,
      "hideOverflow": false,
      "timing": {
        "duration": 3250,
        "easing": "ease-in-out"
      },
      "glitchTimeSpan": false,
      "shake": {
        "velocity": 15,
        "amplitudeX": 0.01,
        "amplitudeY": 0.01
      },
      "slice": {
        "count": 4,
        "velocity": 15,
        "minHeight": 0.02,
        "maxHeight": 0.01,
        "hueRotate": true
      },
      "pulse": false
    }

    if (!this.isPdf) {
      PowerGlitch.glitch('#contacts-title-item', { playMode: 'hover' });
      PowerGlitch.glitch('.contact-source', glitchConf);
    }
  },
}
</script>

<style lang="scss" scoped>
#contacts-title {
}

.contacts-wrapper {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 0 auto 50px;
  justify-content: space-between;
}

.contact-source {
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;

  &:hover, &:active {
    cursor: pointer;
  }

  span {
    //margin-bottom: 20px;
    text-align: center;
  }

  svg {
    width: 100px;

    @media only screen and (max-width: 767px) {
      width: 50px;
    }

    @media only screen and (min-width: 768px) {
      width: 65px;
    }
  }
}

.email:hover {
  color: #EA4335 !important;
}

.tg:hover {
  color: #3290EC !important;
}

.li:hover {
  color: #0966C2 !important;
}

.dotted-divider {
  overflow: hidden;
  margin: 30px 0;
  font-size: 12px;

  &:before {
    float: left;
    width: 0;
    white-space: nowrap;
    content: "...................................................................................................................................................................................................";
    //content: "+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=";
  }
}

.print-contact-item-line {
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

  &:before {
    float: left;
    width: 0;
    white-space: nowrap;
    content: "....................................................................................................................";
    //content: "+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=";
  }
}

@media only screen and (max-width: 767px) {
  .contacts-wrapper {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }

  .contact-source {
    font-size: 10px;
    padding: 10px;

    span {
      margin-bottom: 0;
    }
  }

  .dotted-divider {
    font-size: 10px;
    margin-top: 0;
  }
}

.website {
  width: 80%;
  margin: 50px 10% 100px 10%;
}
</style>
