<template>
  <main class="project-detail">
    <NuxtLink to="/projects" class="back-link">← Retour aux projets</NuxtLink>

    <section v-if="project">
      <h1>{{ project.icon }} {{ project.title }}</h1>
      <p class="description">{{ project.description }}</p>

      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{
          tag
        }}</span>
      </div>

      <img :src="project.image" :alt="project.title" class="project-image" />

      <div class="details">
        <div v-if="project.problem">
          <h2>🧩 Le problème</h2>
          <p>{{ project.problem }}</p>
        </div>

        <div v-if="project.solution">
          <h2>🛠 La solution</h2>
          <p>{{ project.solution }}</p>
        </div>

        <div v-if="project.impact">
          <h2>📈 L’impact</h2>
          <p>{{ project.impact }}</p>
        </div>
      </div>

      <div v-if="project.testimonial" class="testimonial">
        <blockquote>“{{ project.testimonial.quote }}”</blockquote>
        <cite>— {{ project.testimonial.author }}</cite>
      </div>

      <div v-if="project.link" class="external-link">
        <a
          :href="project.link"
          target="_blank"
          rel="noopener"
          class="btn-primary"
        >
          🔗 Voir le projet en détail
        </a>
      </div>
    </section>

    <p v-else>Projet introuvable.</p>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useHead } from "#imports";
import projects from "~/data/projects.json";

const route = useRoute();
const slug = route.params.slug;

const project = projects.find((p) => p.slug === slug);

useHead({
  title: project ? project.title : "Projet introuvable",
});
</script>

<style scoped lang="scss">
.project-detail {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  color: $color-text;
}

.back-link {
  color: $color-accent;
  text-decoration: underline;
  text-underline-offset: 0.4rem;
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  display: inline-block;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: $font-title;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba($color-accent, 0.15);
  color: $color-accent;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  margin-right: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-image {
  margin: 2rem 0;
  width: 100%;
  border-radius: $radius;
  box-shadow: 0 0 16px rgba($color-accent, 0.2);
}

.details {
  h2 {
    margin-top: 2rem;
    font-size: 1.4rem;
    color: $color-white;
  }

  p {
    margin-top: 0.5rem;
    line-height: 1.7;
    color: $color-muted;
  }
}

.testimonial {
  margin-top: 3rem;
  padding: 1.5rem;
  border-left: 4px solid $color-accent;
  background: rgba($color-accent, 0.08);
  border-radius: $radius;

  blockquote {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  cite {
    font-style: normal;
    font-weight: bold;
    color: $color-accent;
  }
}

.external-link {
  margin-top: 2rem;

  .btn-primary {
    display: inline-block;
    background: $color-accent;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: $radius;
    font-weight: bold;
    transition: all 0.3s;

    &:hover {
      background: lighten($color-accent, 10%);
    }
  }
}
</style>
