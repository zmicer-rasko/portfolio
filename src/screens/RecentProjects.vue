<template>
  <div id="recent-projects" ref="projects">
    <div class="container">

      <screen-title id="recent-projects-title-item" title="Recent Projects"/>

      <transition-group class="projects-wrapper" name="list" tag="div">
          <RecentProjectCard :project="item" v-for="item in projects" :key="item.title"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import RecentProjectCard from '../components/RecentProjectCard';
import ScreenTitle from '../components/ScreenTitle';
import {PowerGlitch} from "powerglitch";

export default {
  name: 'RecentProjects',
  components: {
    RecentProjectCard,
    ScreenTitle,
  },
  computed: {
    projects() { return this.$store.getters['projects/recentProjects']},
  },
  mounted() {
    PowerGlitch.glitch('#recent-projects-title-item', { playMode: 'hover' });
  },
}
</script>

<style lang="scss" scoped>
#projects {
  width: 100%;
  clear: both;
  display: flex;
  align-items: center;
  margin-bottom: 193px;
  position: relative;
  float: left;

  h3 {
    margin: 60px;
  }

  .projects-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

    .project-img-wrapper {
      width: 20%;

      img {
        width: 100%;
        height: auto;
      }
    }
    .project-desc-wrapper {
      .title {

      }
    }
  }
}

// For lists transition animation
.list-enter-active,
.list-leave-active {
  transition: all 1.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1.4s ease;
}
.list-leave-active {
  position: absolute;
}
</style>
