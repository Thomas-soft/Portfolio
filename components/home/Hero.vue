<template>
  <section class="hero">
    <div class="hero__content">
      <h1>🚀 Automatisez votre quotidien avec style</h1>
      <p>
        Je conçois des <strong>workflows intelligents</strong> avec
        <strong>N8n / Make, Airtable, IA</strong> et autres outils no-code pour
        transformer votre business — sans jamais coder une ligne.
      </p>
      <div class="cta-buttons">
        <NuxtLink to="/projects" class="btn-primary">
          ✨ Voir les projets
        </NuxtLink>
        <NuxtLink to="/reservation" class="btn-secondary">
          🗓️ Prendre un rendez-vous
        </NuxtLink>
      </div>
    </div>

    <div class="hero__image">
      <img
        src="/Portfolio/images/robot-cartoon-hero.png"
        alt="Expert en automatisation no-code et IA avec Make et Airtable"
      />
    </div>
  </section>
</template>

<script setup>
// Pas de logique JS pour l'instant
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6vh 5vw;
  min-height: 100vh;
  background: linear-gradient(to bottom right, $color-bg, #2d0b75);
  color: $color-white;
  position: relative;
  overflow: hidden;
  gap: 3rem;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 4rem 2rem;
  }

  &__content {
    flex: 1;
    max-width: 600px;
    z-index: 2;

    h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      line-height: 1.2;
      margin-bottom: 1.5rem;
      font-family: $font-title;
      font-weight: 700;
      text-shadow: 0 0 12px rgba($color-accent, 0.6);
    }

    p {
      font-size: 1.25rem;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      font-weight: 400;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: flex-start;
    }
  }

  &__image {
    flex: 1;
    display: flex;
    justify-content: center;
    z-index: 1;

    img {
      max-width: 100%;
      max-height: 480px;
      height: auto;
      animation: float 6s ease-in-out infinite;
      filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.15));
      border-radius: 42px;
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    top: -100px;
    left: -200px;
    background: #36118e;
    border-radius: 50%;
    filter: blur(150px);
    opacity: 0.3;
    z-index: 0;
  }
}
</style>
