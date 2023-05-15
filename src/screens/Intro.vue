<template>
  <div id="intro">
    <img src="img/hero/webp/me.webp" class="person translate" data-speed="-0.1" alt="">
    <img src="img/hero/webp/mountain1.webp" class="mountain1 translate" data-speed="-0.1" alt="">
    <img src="img/hero/webp/mountain2.webp" class="mountain2 translate" data-speed="0.4" alt="">
    <img src="img/hero/webp/mountain3.webp" class="mountain3 translate" data-speed="0.3" alt="">
    <img src="img/hero/webp/sky4.webp" class="sky translate" data-speed="0.5" alt="">

    <div id="intro-content-container">
      <div id="intro-content-wrapper">
        <h3 id="intro-text-name" class="stroke">Zmicer</h3>
        <h3 id="intro-text-surname">Rasko</h3>
        <span id="intro-text-title" class="f2">Web &amp; Mobile Developer</span>
      </div>
    </div>

    <!--    <div id="intro-overlay"></div>-->
  </div>
</template>

<script>
import { PowerGlitch } from 'powerglitch';

export default {
  name: 'Intro',
  mounted() {
    this.parallax();
    this.glitch();
  },
  data() {
    return {
      isGlitching: false,
    }
  },
  methods: {
    parallax() {
      const translate = document.querySelectorAll(".translate");
      // const overlay = document.querySelector("#intro-overlay");

      window.addEventListener('scroll', () => {
        let scroll = window.pageYOffset;
        // overlay.style.opacity = (scroll / 1000) * 1.3; // 20 '0.026'
        // overlay.style.opacity = (scroll / 1000) * 0.1; // 20 '0.002'
        // overlay.style.opacity = (scroll / 1000) * 2;   // 20 '0.04'
        // console.log(scroll, overlay.style.opacity);

        translate.forEach(element => {
          let speed = element.dataset.speed;
          element.style.transform = `translateY(${scroll * speed}px)`;
        });
      });
    },
    glitch() {
      // const {
      //   startGlitch,
      //   stopGlitch
      // } = PowerGlitch.glitch('.person', { playMode: 'manual' });
      // PowerGlitch.glitch('.mountain1', { playMode: 'hover' });
      // PowerGlitch.glitch('.mountain2', { playMode: 'hover' });
      // PowerGlitch.glitch('.mountain3', { playMode: 'hover' });
      // PowerGlitch.glitch('.sky', { playMode: 'hover' });

      // PowerGlitch.glitch('.main_left_text_wrapper', { playMode: 'hover' });

      const glitchConfig = {
        playMode: 'always',
        hideOverflow: true,
        // timing: {
        //   duration: 1000,
        //   iterations: 15,
        //   easing: 'ease-in-out',
        // },
        // glitchTimeSpan: {
        //   start: 0.4,
        //   end: 0.7,
        // },
        // shake: {
        //   velocity: 10,
        //   amplitudeX: 0.4,
        //   amplitudeY: 0.4,
        // },
        // shake: false,
        // slice: false,
        // slice: {
        //   count: 4,
        //   velocity: 10,
        //   minHeight: 0.02,
        //   maxHeight: 0.40,
        //   hueRotate: true,
        // },
      };

      // const {
      //   startGlitch,
      //   stopGlitch
      // } = PowerGlitch.glitch('#intro-content-wrapper', { playMode: 'manual', glitchConfig });

      window.addEventListener('scroll', () => {
        // One time scroll
        let scroll = window.pageYOffset;
        console.log(scroll)

        if (scroll > 50 && scroll < 500 && !this.isGlitching) {
          console.log('starting')
          this.isGlitching = true;
          PowerGlitch.glitch('#intro-text-title', glitchConfig)
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped>

#intro {
  width: 100%;
  height: 100vh;
  clear: both;
  float: left;
  position: relative;
}

.translate {
  position: absolute;
}

.mountain1 {
  width: 100vw;
  bottom: -100px;
  right: 0;
  z-index: 19;
}

.person {
  width: 25vw;
  bottom: -100px;
  left: 4vw;
  z-index: 20;
}

.mountain2 {
  width: 65vw;
  bottom: -100px;
  left: 0;
  z-index: 18;
}

.mountain3 {
  width: 70vw;
  height: 68vh;
  bottom: 0;
  right: 0;
  z-index: 17;
}

.sky {
  width: 100vw;
  top: 0;
  height: 65vh;
  right: 0;
}

#intro-content-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

#intro-content-wrapper {
  font-family: 'Press Start 2P', cursive;
  padding: 0 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h3 {
  color: #000;
  font-size: 5.5rem;

  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  line-height: 1.1;

  &.stroke {
    -webkit-text-stroke: 1px #000;
    color: transparent;
  }
}

//#intro-overlay {
//  position: absolute;
//  width: 100vw;
//  height: 100vh;
//  background-color: black;
//  left: 0;
//  top: 0;
//  opacity: 0;
//  z-index: 25;
//}

//@media only screen and (max-width: 767px) {
//  #intro {
//    display: none;
//  }
//}

@media only screen and (max-width: 1366px) {
  .mountain3 {
    width: 90vw;
    height: 65vh;
  }
}

@media only screen and (max-width: 1280px) {
  .mountain3 {
    width: 90vw;
    height: 65vh;
  }
  .mountain2 {
    bottom: -180px;
    left: 0;
    z-index: 18;
    height: 72vh;
  }
}

@media only screen and (max-width: 1024px) {
  .mountain3 {
    width: 105vw;
    height: 58vh;
  }
  .mountain2 {
    bottom: -180px;
    left: 0;
    z-index: 18;
    height: 60vh;
  }
  .mountain1 {
    height: 36vh;
  }
  .sky {
    height: 70vh;
  }
  .person {
    bottom: -80px;
    height: 25vh;
  }
}

@media only screen and (max-width: 768px) {
  #intro-content-wrapper {
    top: 55%;
  }
  .mountain3 {
    width: 115vw;
    height: 65vh;
    bottom: -30px;
  }
  .mountain2 {
    bottom: -180px;
    left: 0;
    z-index: 18;
    height: 60vh;
  }
  .mountain1 {
    height: 36vh;
  }
  .sky {
    height: 70vh;
  }
  .person {
    bottom: -80px;
    height: 25vh;
  }
}

@media only screen and (min-width: 100px) and (max-width: 767px) {
  h3 {
    font-size: 4rem !important;
  }
  .f2 {
    font-size: 1rem !important;
  }
  .mountain3 {
    width: 175vw;
    height: 56vh;
    bottom: -54px;
  }
  .mountain2 {
    height: 78vh;
    width: 67vw;
  }
  .mountain1 {
    height: 30vh;
    width: 181vw;
  }
  .sky {
    height: 80vh;
    object-fit: cover;
  }
  .person {
    bottom: -60px;
    left: -10px;
    height: 30vh;
    width: 65vw;
  }
}
</style>
