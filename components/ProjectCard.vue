<template>
  <div class="project-card">
    <div class="project-card__header">
      <div class="project-card__icon">📦</div>
      <h3 class="project-card__title">{{ project.title }}</h3>
    </div>

    <!-- <div class="project-tags">
      <span class="tag">🛠 Make</span>
      <span class="tag">📦 Airtable</span>
      <span class="tag">🤖 IA</span>
    </div> -->

    <div class="project-tags">
      <span v-for="(techItem, index) in project.tech" :key="index" class="tag">
        {{ techItem }}
      </span>
    </div>

    <p class="project-card__desc">{{ project.description }}</p>

    <div class="project-card__footer">
      <img
        :src="project.image"
        alt="Aperçu du projet {{ project.title }}"
        class="project-card__thumb"
      />

      <NuxtLink :to="`/projects/${project.slug}`" class="project-link">
        Voir le projet →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>

<style scoped lang="scss">
.project-card {
  background: linear-gradient(135deg, #2d0b75, #39238f);
  padding: 2rem;
  border-radius: $radius;
  box-shadow: 0 0 24px rgba($color-accent, 0.2);
  text-align: left;
  position: relative;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 30px rgba($color-accent, 0.3);
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.8rem;
  }

  &__icon {
    font-size: 2rem;
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 700;
    color: $color-white;
  }

  &__desc {
    color: color.adjust($color-text, $lightness: 10%);
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    margin-top: auto;
  }

  &__thumb {
    width: 142px;
    border-radius: 1rem;
    filter: brightness(1.1);
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;

    .tag {
      background: rgba($color-accent, 0.12);
      color: $color-accent;
      padding: 0.3rem 0.75rem;
      font-size: 0.75rem;
      font-weight: 600;
      border-radius: 1rem;
    }
  }

  .project-link {
    color: $color-accent;
    text-decoration: underline;
    text-underline-offset: 0.4rem;
    font-weight: bold;
    font-size: 0.95rem;
    margin-left: auto;
  }
}
</style>
