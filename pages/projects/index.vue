<template>
  <main class="projects-page">
    <!-- Introduction -->
    <section class="projects-intro">
      <h1>🚀 Mes projets</h1>
      <p>
        Une sélection de projets d'automatisation, de développement web et de
        productivité connectée.
      </p>
    </section>

    <!-- Grille des projets -->
    <section class="projects-grid">
      <ProjectCard
        v-for="(project, i) in visibleProjects"
        :key="i"
        :project="project"
        class="project-fade"
      />
    </section>

    <!-- Bouton voir plus -->
    <!-- <div v-if="canLoadMore" class="load-more-wrapper">
      <button class="load-more-btn" @click="loadMore">
        Voir plus de projets
      </button>
    </div> -->
    <div class="projects-actions">
      <NuxtLink to="/" class="back-link"> ← Retour à l’accueil </NuxtLink>
      <button v-if="canLoadMore" class="load-more-btn" @click="loadMore">
        Voir plus de projets
      </button>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import ProjectCard from "~/components/ProjectCard.vue";
import projects from "~/data/projects.json";

const visibleCount = ref(6);
const visibleProjects = computed(() => projects.slice(0, visibleCount.value));
const canLoadMore = computed(() => visibleCount.value < projects.length);
const loadMore = () => (visibleCount.value += 3);
</script>

<style scoped lang="scss">
.projects-page {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #15002b, #2e006b);
  min-height: 100vh;
  color: $color-white;

  .projects-actions {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .load-more-btn {
    background-color: $color-accent;
    color: $color-white;
    font-weight: bold;
    padding: 0.75rem 2rem;
    border-radius: 999px;
    border: none;
    font-size: 1rem;
    box-shadow: 0 0 12px rgba($color-accent, 0.5);
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: color.adjust($color-accent, $lightness: -10%);
    }
  }

  .back-link {
    color: $color-accent;
    font-weight: bold;
    font-size: 0.95rem;
    text-decoration: underline;
    text-underline-offset: 4px;
    transition: color 0.3s ease;

    &:hover {
      color: color.adjust($color-accent, $lightness: 10%);
    }
  }

  .projects-intro {
    max-width: 800px;
    margin: 0 auto 4rem;
    text-align: center;

    h1 {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 0 10px rgba($color-accent, 0.6);
    }

    p {
      font-size: 1.1rem;
      color: color.adjust($color-white, $lightness: 20%);
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    .project-fade {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.6s ease-out forwards;
      animation-delay: 0.1s;

      // petit effet cascade
      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.5s;
      }
      &:nth-child(5) {
        animation-delay: 0.6s;
      }
      &:nth-child(6) {
        animation-delay: 0.6s;
      }
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .load-more-wrapper {
    text-align: center;
    margin-top: 3rem;
  }

  .load-more-btn {
    background-color: $color-accent;
    color: $color-white;
    font-weight: bold;
    padding: 0.75rem 2rem;
    border-radius: 999px;
    border: none;
    font-size: 1rem;
    box-shadow: 0 0 12px rgba($color-accent, 0.5);
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: color.adjust($color-accent, $lightness: -10%);
    }
  }
}
</style>
