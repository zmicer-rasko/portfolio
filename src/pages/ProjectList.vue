<template>
  <div id="projects" ref="projects">
    <div>
      <!--    <div class="container">-->
      <!--      <screen-title title="Portfolio"/>-->
      <filter-component />
      <transition-group class="projects-wrapper" name="list" tag="div">
        <ProjectCard :project="item" v-for="item in projects" :key="item.title"/>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ProjectCard from './ProjectList/ProjectCard';
import ScreenTitle from '../components/ScreenTitle';
import FilterComponent from "./ProjectList/FilterComponent";

export default {
  name: 'Projects',
  components: {
    FilterComponent,
    ProjectCard,
    ScreenTitle,
  },
  data() {
    return {
      value: [],
      tags: {
        autoSuggest: ['php', 'laravel'],
      },
    }
  },
  computed: {
    projects() { return this.$store.getters['projects/filteredData']},
  },
  mounted() {
    this.$store.commit('projects/reset');
    this.emitter.on('scroll-to-projects', () => {
      const myEl = this.$refs.projects;
      // console.log(myEl);
      setTimeout(
          this.$smoothScroll({ scrollTo: myEl }),
          500
      );
    });
  }
}
</script>

<style lang="scss" scoped>
#projects {
  width: 100%;
  clear: both;
  display: flex;
  align-items: center;
  position: relative;
  float: left;

  //background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);

  h3 {
    margin: 60px;
  }

  .projects-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90vw;
    justify-content: space-between;
    margin-top: 100px;
    margin-left: 5vw;
    margin-right: 5vw;

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
