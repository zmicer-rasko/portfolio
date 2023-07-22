<template>
  <div id="filter">
<!--  <div id="filter" :class="{ 'fade-in': tags.length, 'fade-out': !tags.length }">-->
<!--    <div class="container filter-container">-->
    <div class="filter-container">
      <div class="filter-wrapper">
        <div class="title">Projects filter:</div>
        <div class="tags-wrapper">
           <tag v-for="(item, key) in tags" :key="key" :title="item" :close="true"/>
        </div>
        <div class="clear-all">
          <a href="javascript: void(0)" @click="clearFilter()">CLEAR ALL</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from './Tag.vue';
export default {
  name: 'FilterComponent',
  components: { Tag, },
  computed: {
    tags() { return this.$store.getters['projects/filters']; }
  },
  methods: {
    clearFilter() {
      this.$store.commit('projects/filterPurge');
      this.$store.commit('projects/reset');
      this.$emit('updated');
      // this.emitter.emit("scroll-to-projects");
    }
  }
}
</script>

<style lang="scss">
  .filter-container {
    min-height: 50px;
    display: flex;
    flex-direction: row;
    padding: 0;
  }
  #filter {
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,0.9598214285714286) 0%, rgba(0,0,0,0.8533788515406162) 67%, rgba(0,0,0,0.7161239495798319) 84%, rgba(0,0,0,0.6096813725490196) 100%);
    color: white;

    .filter-wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
    }

    .title {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .tags-wrapper {
      width: 80%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 5px;
    }

    .clear-all {
      white-space: nowrap;
      display: flex;
      width: 10%;
      justify-content: center;
      align-items: center;

      a {
        border: 1px dotted white;
        padding: 7px;
        border-radius: 5px;
      }
    }
  }
  .fade-in {
    opacity: 1;
    animation: fadeIn linear 1s;
    -webkit-animation: fadeIn linear 1s;
    -moz-animation: fadeIn linear 1s;
    -o-animation: fadeIn linear 1s;
    -ms-animation: fadeIn linear 1s;
  }
  .fade-out {
    opacity: 0;
    animation: fadeOut linear 1s;
    -webkit-animation: fadeOut linear 1s;
    -moz-animation: fadeOut linear 1s;
    -o-animation: fadeOut linear 1s;
    -ms-animation: fadeOut linear 1s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  @keyframes fadeOut {
    0% {opacity:1;}
    100% {opacity:0;}
  }
</style>
