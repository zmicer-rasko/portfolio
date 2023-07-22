<template>
  <div class="card">
    <div class="card-top">
      <div class="card-project-title"> {{ project.title.toUpperCase() }}</div>
    </div>
    <div class="card-bottom">

      <div class="card-image-wrapper">
          <img v-if="project.images" src="/img/project.png" alt="">
          <p v-else class="image-text">NDA</p>
      </div>

      <div class="card-body-wrapper">
        <div class="tags">
          <span class="card-subtitle">Roles: </span>
          <tag v-for="(item, key) in project.roles" :key="key" :title="item" size="sm"/>
        </div>
        <div class="tags">
          <span class="card-subtitle">Stack: </span>
          <tag v-for="(item, key) in project.stack" :key="key" :title="item" size="sm"/>
        </div>
      </div>

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
  width: 40%;
  //height: 100%;
  display: flex;
  align-items: flex-start;
  //flex: 45%;
  margin: 50px 0;
  flex-direction: column;
  //background: transparent;
  //padding: 15px;

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

.card-bottom {
  display: flex;
}
</style>
