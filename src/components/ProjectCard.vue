<template>
  <div class="card">
    <div class="card-image-wrapper">
      <div v-if="project.images">
        <img src="/img/project.png" alt="">
      </div>
      <div v-else>
        <p class="image-text">NDA</p>
      </div>
    </div>
    <div class="card-body-wrapper">
<!--      <p class="card-title">{{ project.title }}</p>-->
      <div class="tags">
        <span class="card-subtitle">Roles: </span>
        <tag v-for="(item, key) in project.roles" :key="key" :title="item" size="sm"/>
      </div>
      <div class="tags">
        <span class="card-subtitle">Stack: </span>
        <tag v-for="(item, key) in project.stack" :key="key" :title="item" size="sm"/>
      </div>
    </div>
    <div class="corner-left-top" :text="project.title.toUpperCase()"></div>
    <div class="date corner-right-top" :text="`started: ${project.from}`"></div>
    <div class="date corner-right-bot" :text="`finished: ${project.to}`"></div>
    <div class="startup">
      <tag v-if="project.startup" title="STARTUP | FROM SCRATCH" size="sm"/>
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue';
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: { Tag, },
}
</script>

<style lang="scss">
$corner-border-width: 90px;
$date-corner-width: 45px;
$corner-gap: 5px;

$date-font-size: 7px;
$date-font-weight: 700;
$date-opacity: 0.7;

.card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex: 45%;
  margin: 50px 20px;
  flex-direction: row;
  background: transparent;
  padding: 15px;
  position: relative;

  .corner-left-top, .corner-right-bot, .corner-right-top {
    position: absolute;
  }
  .corner-left-top {
    top: 0;
    left: 0;

    &:before {
      position: absolute;
      content: "";
      left: 0;
      width: 10px;
      height: 120px;
      border-width: 1px 0 0 1px;
      border-color: black;
      border-style: solid;
      opacity: 0.3;
    }

    &:after {
      position: absolute;
      content: attr(text);
      top: -7px;
      left: 15px;
      white-space: nowrap;
      font-weight: 500;
      font-size: 16px;
    }
  }

  .corner-right-top {
    top: 0;
    right: 0;

    &:before {
      position: absolute;
      content: "";
      right: 0;
      width: $date-corner-width;
      height: 60px;
      border-width: 1px 1px 0 0;
      border-color: black;
      border-style: solid;
      opacity: 0.3;
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
      width: $date-corner-width;
      height: 60px;
      border-width: 0 1px 1px 0;
      border-color: black;
      border-style: solid;
      opacity: 0.3;
    }
  }

  .corner-right-top {

  }

  .card-image-wrapper {
    margin-bottom: 10px;
    margin-top: 10px;

    img {
      height: 200px;
      width: 300px;
    }
  }
  .card-body-wrapper {
    padding-left: 15px;
    margin-top: 5px;
    width: 100%;
    height: 100%;

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
      font-weight: 300;
      margin-bottom: 5px;
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
</style>
