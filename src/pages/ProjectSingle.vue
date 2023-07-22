<template>
  <div v-if="project">
    {{ project.slug }}
  </div>
</template>


<script>
export default {
  name: 'ProjectSingle',
  computed: {
    project() {
      const project = this.$store.getters['projects/getProjectBySlug'](this.$route.params.slug);

      if (!project) {
        console.log(project);
        this.$router.push({ name: 'project-list'});
      }

      return project;
    }
  },
}
</script>