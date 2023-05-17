import { createStore } from 'vuex';
import experience from './store/experience';
import projects from './store/projects';
import employment from './store/employment';
import system from './store/system';

export const store = createStore({
  modules: {
    experience,
    employment,
    projects,
    system,
  },
});
