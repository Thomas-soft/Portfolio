<template>
  <section class="featured-projects">
    <div class="featured-projects__content">
      <h2>🌟 Projets en action</h2>
      <p>Voici quelques exemples de projets révolutionnaires :</p>

      <div class="project-grid">
        <ProjectCard
          v-for="(project, i) in projects.slice(0, 3)"
          :key="i"
          :project="project"
        />
      </div>

      <NuxtLink to="/projects" class="btn-secondary">
        Voir tous les projets
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "~/components/ProjectCard.vue";
import projects from "~/data/projects.json";
</script>

<style scoped lang="scss">
.featured-projects {
  padding: 6rem 2rem;
  background-color: $color-bg;
  color: $color-white;
  text-align: center;

  &__content {
    max-width: 1100px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    font-family: $font-title;
    margin-bottom: 1rem;
    text-shadow: 0 0 6px $color-accent;
  }

  p {
    font-size: 1.1rem;
    color: $color-text;
    margin-bottom: 3rem;
  }

  .project-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    margin-bottom: 2.5rem;
  }
}
</style>
