<template>
  <div class="card">
    <div class="card-image-wrapper">
<!--            navigation-->
        <swiper v-if="project.images.length > 0"
            :modules="swiperModules"
            :scrollbar="{ draggable: true }"
            :pagination="{ clickable: true }"
            :centeredSlides="1"
            @swiper="init"
        >
          <swiper-slide v-for="(image, index) in project.images">
            <img :src="'/projects' + image" :alt="project.title + ' ' + index">
          </swiper-slide>
        </swiper>
      <div v-else>
        <img src="/img/project.png" alt="">
      </div>
    </div>
    <div class="card-body-wrapper f5">
      <div v-if="project.url" class="link-wrapper">
        <span class="card-subtitle">Url: </span>
        <a :href="project.url">{{ project.url }}</a>
      </div>
      <div>
        <span class="card-subtitle">Year:</span>
        <span>{{ project.year }}</span>
      </div>
      <div>
        <span class="card-subtitle">Duration:</span>
        <span>{{ project.duration }}</span>
      </div>
      <div class="tags">
        <span class="card-subtitle">Roles: </span>
        <tag v-for="(item, key) in project.roles" :key="key" :title="item" size="sm"></tag>
      </div>
      <div class="tags">
        <span class="card-subtitle">Stack: </span>
        <tag v-for="(item, key) in project.stack" :key="key" :title="item" size="sm"></tag>
      </div>
      <div>
        <span class="card-subtitle">Description:</span>
        <span>{{ project.description }}</span>
      </div>
      <div>
        <span class="card-subtitle">Tasks: </span>
        <ul class="tasks-list">
          <li v-for="(item, key) in project.tasks" :key="key" :title="item" size="sm">{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="corner-left-top" :text="project.title.toUpperCase()"></div>
    <div class="date corner-right-top"></div>
    <div class="date corner-right-bot"></div>
    <div class="date corner-left-bot"></div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Scrollbar } from 'swiper';
import { Navigation } from 'swiper';
import Tag from './Tag.vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  name: 'RecentProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    Tag,
  },
  data() {
    return {
      // swiperModules: [Navigation, Scrollbar],
      swiperModules: [ Scrollbar ],
    };
  },
}
</script>

<style lang="scss">
$corner-border-width: 90px;
$date-corner-width: 45px;
$corner-gap: 5px;

$date-font-size: 7px;
$date-font-weight: 700;
$date-opacity: 0.7;

.swiper {
  height: 100%;
}

.card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex: 45%;
  margin: 50px 20px;
  flex-direction: row;
  background: transparent;
  padding: 25px;
  position: relative;
  line-height: 20px;

  .corner-left-top, .corner-right-bot, .corner-right-top, .corner-left-bot {
    position: absolute;
  }
  .corner-left-top {
    top: 0;
    left: 0;

    &:before {
      position: absolute;
      content: "";
      left: 0;
      width: 20px;
      height: 120px;
      border-width: 3px 0 0 3px;
      border-color: black;
      border-style: dashed;
      //opacity: 0.7;
    }

    &:after {
      position: absolute;
      content: attr(text);
      top: -15px;
      left: 45px;
      white-space: nowrap;
      font-weight: 500;
      //font-size: 16px;

      font-size: 12px;
      font-family: 'Press Start 2P', monospace;
      color: white;
      padding: 0.5rem;
      background-color: black;
    }
  }

  .corner-right-top {
    top: 0;
    right: 0;

    &:before {
      position: absolute;
      content: "";
      right: 0;
      //width: $date-corner-width;
      //height: 60px;
      width: 120px;
      height: 120px;
      border-width: 3px 3px 0 0;
      border-color: black;
      border-style: dashed;
      //opacity: 0.7;
    }

    &:after {
      position: absolute;
      content: attr(text);
      top: -3px;
      right: $date-corner-width + $corner-gap;
      white-space: nowrap;
      font-weight: $date-font-weight;
      font-size: $date-font-size;
      opacity: $date-opacity;
    }
  }

  .corner-right-bot {
    bottom: 0;
    right: 0;

    &:before {
      position: absolute;
      content: attr(text);
      bottom: -3px;
      right: $date-corner-width + $corner-gap;
      white-space: nowrap;
      font-weight: $date-font-weight;
      font-size: $date-font-size;
      opacity: $date-opacity;
    }

    &:after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: "";
      //width: $date-corner-width;
      //height: 60px;

      width: 120px;
      height: 120px;
      border-width: 0 3px 3px 0;
      border-color: black;
      border-style: dashed;
      //opacity: 0.7;
    }
  }

  .corner-left-bot {
    bottom: 0;
    left: 0;

    &:before {
      position: absolute;
      content: "";
      bottom: 0;
      height: 120px;

      border-width: 0 3px 3px 0;
      border-color: black;
      border-style: dashed;
      //opacity: 0.7;
    }

    &:after {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 100px;
      border-width: 0 3px 3px 0;
      border-color: black;
      border-style: dashed;
      //opacity: 0.7;
    }
  }

  .card-image-wrapper {
    margin-bottom: 10px;
    margin-top: 10px;

    height: 200px;
    width: 300px;

    img {
      height: 100%;
    }

  }
  .card-body-wrapper {
    padding-left: 15px;
    margin-top: 5px;
    width: 100%;
    height: 100%;

    div {
      line-height: 2rem;
    }

    .card-title {
      text-transform: uppercase;
      text-align: center;
      font-weight: 900;
      margin-bottom: 10px;
    }

    .tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }

    .card-subtitle {
      font-family: 'Courier New', serif;
      font-weight: 700;
      margin-right: 10px;
    }
  }

  .startup {
    position: absolute;
    left: -5px;
    bottom: -10px;
  }

  .date {
    font-family: 'Major Mono Display', monospace;
  }
}
.link-wrapper a {
  text-decoration: underline;
  text-decoration-style: dashed;
  text-underline-position: under;
  color: black;
  background-color: white;
}
.tasks-list li {
  position: relative;
  margin-left: 30px;

  &:before {
    content: "■";
    position: absolute;
    left: -1rem;
    font-size: 0.5rem;
    top: 0;
  }
}
.rainbow-button span {
  line-height: 10px;
  font-family: "Space Mono", monospace;
  font-size: 1rem;
}
.card .card-image-wrapper img {
  width: initial;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  height: 95%;
}
.swiper-button-next, .swiper-button-prev {
  color: black;
}

</style>
