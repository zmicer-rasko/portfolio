<template>
<!--  <div v-if="loader" id="loader">-->
<!--    <img src="https://i.giphy.com/media/l3nWhI38IWDofyDrW/giphy.webp" alt="">-->
<!--  </div>-->
<!--  <div v-else>-->
    <Intro/>
    <About/>
    <Highlights/>
    <Employment />
    <Skills/>
    <RecentProjects/>
    <ContactMe/>
<!--    <Projects/>-->
<!--    <FilterComponent/>-->
<!--  </div>-->
    <ContactsBar/>
</template>

<script>
import Intro from './screens/Intro.vue'
import About from './screens/About.vue'
import Highlights from './screens/Highlights.vue'
import Employment from './screens/Employment.vue'
import Skills from './screens/Skills.vue'
import RecentProjects from "./screens/RecentProjects";
import ContactMe from './screens/ContactMe.vue'

import ContactsBar from './components/ContactsBar.vue'
// import Projects from './screens/Projects.vue'
// import FilterComponent from './components/FilterComponent.vue';
import AOS from 'aos';
import 'aos/dist/aos.css'



export default {
  name: 'App',
  data() {
    return {
      loader: true,
    };
  },
  components: {
    Intro,
    About,
    Highlights,
    Employment,
    Skills,
    RecentProjects,
    ContactMe,
    ContactsBar,
    // Projects,
    // FilterComponent,
  },
  mounted() {
    console.log(window.innerWidth, window.innerHeight);
    setTimeout(() => this.loader = false, 4000);
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }
}
</script>

<style lang="scss" scoped>
//#loader {
//  width: 100vw;
//  height: 100vh;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  background: white;
//}
</style>
