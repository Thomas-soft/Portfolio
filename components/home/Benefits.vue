<template>
  <section class="benefits">
    <div class="benefits__content">
      <h2>🧠 Pourquoi automatiser avec moi ?</h2>

      <div class="benefits__items">
        <div class="benefit">
          <div class="benefit__icon">⏱</div>
          <div class="benefit__text">
            <h3>Gagnez un temps considérable</h3>
            <p>Des tâches qui prenaient 3h ne prennent plus que 3 secondes.</p>
          </div>
        </div>

        <div class="benefit">
          <div class="benefit__icon">🤖</div>
          <div class="benefit__text">
            <h3>Pas d'erreurs humaine</h3>
            <p>
              Les robots ne dorment pas, et ils ne se trompent pas non plus.
            </p>
          </div>
        </div>

        <div class="benefit">
          <div class="benefit__icon">📈</div>
          <div class="benefit__text">
            <h3>Boost immédiat de productivité</h3>
            <p>
              Des flux automatisés = plus de bande passante pour l'essentiel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static component
</script>

<style scoped lang="scss">
.benefits {
  padding: 6rem 2rem;
  background-color: $color-dark;
  color: $color-white;
  position: relative;
  text-align: center;

  &__content {
    max-width: 1000px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    font-family: $font-title;
    margin-bottom: 3rem;
    text-shadow: 0 0 6px $color-accent;
  }

  &__items {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .benefit {
    background: linear-gradient(135deg, $color-bg, #2d0b75);
    padding: 2rem;
    border-radius: $radius;
    box-shadow: 0 0 20px rgba($color-accent, 0.15);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 0 25px rgba($color-accent, 0.3);
    }

    &__icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    &__text {
      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.75rem;
        font-weight: bold;
        color: $color-white;
      }

      p {
        color: $color-muted;
        font-size: 1rem;
        line-height: 1.6;
      }
    }
  }
}
</style>
