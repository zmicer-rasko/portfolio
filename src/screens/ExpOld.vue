<template>
  <div id="skills-screen">
    <div class="container">
      <screen-title title="Skills"/>

      <div class="exp-row">
        <div class="exp-block">
          <h3>Five <span class="bg">years</span> plus+</h3>
        </div>
        <div class="exp-block">
          <h3>Four <span class="bg">years</span> plus+</h3>
        </div>
        <div class="exp-block">
          <h3>Had <span class="bg">Experience</span> in</h3>
        </div>
      </div>

      <div class="exp-row">
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.five.skills" :key="key" :title="item"/>
          </div>
        </div>
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.four.skills" :key="key" :title="item"/>
          </div>
        </div>
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.had.skills" :key="key" :title="item"/>
          </div>
        </div>
        <divider title="Skills"></divider>
      </div>

      <div class="exp-row">
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.five.frameworks_libs" :key="key" :title="item"/>
          </div>
        </div>
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.four.frameworks_libs" :key="key" :title="item"/>
          </div>
        </div>
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.had.frameworks_libs" :key="key" :title="item"/>
          </div>
        </div>
        <divider title="Frameworks | Libs"></divider>
      </div>

      <div class="exp-row">
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.five.env_deploy" :key="key" :title="item"/>
          </div>
        </div>
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.four.env_deploy" :key="key" :title="item"/>
          </div>
        </div>
        <div class="exp-block">
          <div class="exp-tags">
            <tag v-for="(item, key) in exp.had.env_deploy" :key="key" :title="item"/>
          </div>
        </div>
        <divider title="Env | Deploy | Tools"></divider>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from '../components/Tag.vue';
import Divider from '../components/Divider.vue';
import ScreenTitle from '../components/ScreenTitle';

export default {
  name: 'Skills',
  components: {
    Tag,
    Divider,
    ScreenTitle,
  },
  computed: {
    exp() { return this.$store.getters['experience/data']; },
  },
}
</script>

<style lang="scss" scoped>
#skills-screen {
  width: 100%;
  min-height: 100vh;
  margin: 100px 0;
  position: relative;
  float: left;

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
}
</style>
