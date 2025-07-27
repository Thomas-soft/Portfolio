<template>
  <section class="final-cta">
    <div class="final-cta__content">
      <h2>✨ Et si j'automatisait votre quotidien ?</h2>
      <p>
        Envie d'un système qui travaille pendant que vous dormez ? <br />
        Parlons-en.
      </p>
      <NuxtLink to="/reservation" class="btn-primary">
        🗓️ Réserver un créneau
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
// Static component
</script>

<style scoped lang="scss">
.final-cta {
  padding: 6rem 2rem;
  background: radial-gradient(circle at center, #2d0b75 0%, $color-bg 100%);
  text-align: center;
  color: $color-white;
  position: relative;

  &__content {
    max-width: 700px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-family: $font-title;
    text-shadow: 0 0 8px $color-accent;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    line-height: 1.8;
  }
}
</style>
