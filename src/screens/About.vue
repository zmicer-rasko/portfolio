<template>
  <div id="about">
    <div class="container">
      <screenTitle id="about-title" title="About" />
      <div class="content-wrapper">

        <div id="about-top">
          <img id="about-my-image" src="../assets/avatar-min-resized.webp" alt="">
          <div id="about-top-right" class="f5">
            <div class="about-item-line">
              <span class="bolder">Name</span>
              <span>Zmićer Rasko</span>
            </div>
            <div class="about-item-line">
              <span class="bolder">Role</span>
              <span>Fullstack Web &amp; App Developer</span>
            </div>
            <div class="about-item-line">
              <span class="bolder">Age</span>
              <span>{{ age }}</span>
            </div>
            <div class="about-item-line">
              <span class="bolder">Location</span>
              <span>Antalya/Turkey</span>
            </div>
            <div class="about-item-line">
              <span class="bolder">Origin</span>
              <span>Minsk/Belarus</span>
            </div>
          </div>
        </div>

        <div class="about-bottom">
          <ul class="short-list f5">
            <li class="pre-bulleted">Creating solutions for both <b>backend</b> and <b>frontend</b> sides of web and mobile applications / SaaS / Platforms.</li>
            <li class="pre-bulleted">Worked on a variety of <b>startup projects</b> from inception or providing ongoing support (<b>80% of career</b>), as well as on <b>established products</b> with higher performance, testing, tech debt and infrastructure requirements (<b>20% of carrer</b>).</li>
            <li class="pre-bulleted">Experience in domains such as SaaS, live-streaming, telemedicine, travel tickets booking, marketing, real estate booking and managing, content marketplace platforms, social media automation, recruiting platforms, Android/iOS applications, back-office tools, APIs integration and development, etc.</li>
            <li class="pre-bulleted">Most recent stack: PHP (Laravel), VueJS, MySQL, Redis, Docker.</li>
          </ul>
        </div>

        <div id="download-wrapper">
          <a class="f2" href="/ZmicerRasko_Laravel_VueJS_PHP_Fullstack.png" download>Download cv</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ScreenTitle from "../components/ScreenTitle";
import moment from 'moment';
import { PowerGlitch } from 'powerglitch';

export default {
  name: 'AboutComponent',
  components: {
    ScreenTitle,
  },
  computed: {
    age() {
      return moment().diff('1989-11-21', 'years');
    },
  },
  mounted() {
    PowerGlitch.glitch('#about-my-image', { playMode: 'hover' })
    PowerGlitch.glitch('#about-title', { playMode: 'hover' })
  },
  methods: {
    downloadCv() {

    }
  },
}
</script>

<style lang="scss" scoped>
#about {
  width: 100%;
  clear: both;
  display: flex;
  align-items: center;
  position: relative;
  float: left;
  z-index: 100;
  background-color: white;
  padding-bottom: 100px;

  #about-top {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .content-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 80%;
  }

  #about-my-image {
    border-radius: 5px;
    vertical-align: middle;
    width: 150px;
  }
}

#about-top-right {
  width: 100%;
  padding-left: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

ul.short-list {
  //font-family: 'Press Start 2P', cursive;
  font-weight: bolder;
  padding-left: 28px;
  //padding-top: 20px;
  padding-top: 1.25rem;

  li {
    //position: relative;
    margin-bottom: 20px;
    line-height: 2rem;
    //letter-spacing: 1px;
    letter-spacing: 0.0625rem;
    word-wrap: break-word;
    font-weight: 300;
    background-color: #fff;
    color: #000000;

    //&:before {
    //  content: "■";
    //  position: absolute;
    //  left: -18px;
    //  //font-size: 12px;
    //  font-size: 0.5rem;
    //  top: 0;
    //}
  }
}

.about-item-line {
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
  #about {
    padding-bottom: 30px;
  }

  #about-my-image {
    display: none;
  }

  #about-top-right {
    padding-left: 0;
  }

  .content-wrapper {
    width: 100% !important;
  }

  ul.short-list {
    letter-spacing: normal !important;
  }

  li {
    &:before {
      content: "■";
      position: absolute;
      left: -25px;
      //font-size: 20px;
      font-size: 8px;
      //top: -5px;
    }
  }
}

b {
  //font-weight: 600;
  //text-decoration-style: dotted;
  //clip-path: polygon(2.5% 0%, 100% 0, 97.5% 100%, 0% 100%);
  //background-color: #b7b7b7;
  //padding: 3px;
  //color: white;

  text-decoration: underline;
  text-decoration-style: dashed;
  text-underline-position: under;
}

#download-wrapper {
  margin-top: 5rem;

  a {
    font-family: 'Press Start 2P', monospace;
    text-transform: uppercase;
    font-weight: 900;
    color: white;
    padding: 1rem;
    background-color: black;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
