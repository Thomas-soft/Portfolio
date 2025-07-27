<template>
  <section class="testimonials">
    <div class="testimonials__content">
      <h2>💬 Ils ont vu la différence</h2>

      <div class="testimonial-wrapper">
        <!-- Flous latéraux -->
        <div class="arrow-overlay arrow-overlay--left"></div>
        <div class="arrow-overlay arrow-overlay--right"></div>

        <Carousel
          :items-to-show="itemsToShow"
          :wrap-around="true"
          :transition="500"
          :mouse-drag="true"
          class="testimonial-carousel"
        >
          <Slide
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-slide"
          >
            <div class="testimonial-card">
              <blockquote>{{ testimonial.quote }}<span>”</span></blockquote>
              <cite>— {{ testimonial.author }}</cite>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted, onBeforeUnmount } from "vue";

const testimonials = [
  {
    quote:
      "Avant, notre équipe passait des heures sur des rapports. Maintenant, tout se fait automatiquement. Incroyable !",
    author: "Sophie, startup e-commerce",
  },
  {
    quote:
      "L'intégration entre Notion et Google Sheets a complètement changé notre façon de suivre nos leads.",
    author: "Maxime, agence marketing",
  },
  {
    quote:
      "Une vraie révolution pour notre gestion client. On ne peut plus revenir en arrière.",
    author: "Julie, consultante RH",
  },
];

const itemsToShow = ref(2);

const updateItemsToShow = () => {
  itemsToShow.value = window.innerWidth < 768 ? 1 : 2;
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsToShow);
});
</script>

<style scoped lang="scss">
.testimonials {
  padding: 6rem 2rem;
  background-color: $color-dark;
  color: $color-white;
  text-align: center;

  .testimonial-wrapper {
    position: relative;
  }

  .arrow-overlay {
    position: absolute;
    top: 0;
    bottom: 4rem;
    width: 80px;
    z-index: 10;
    pointer-events: none;
  }

  .arrow-overlay--left {
    left: 0;
    background: linear-gradient(
      to right,
      rgba($color-dark, 1),
      rgba($color-dark, 0)
    );
  }

  .arrow-overlay--right {
    right: 0;
    background: linear-gradient(
      to left,
      rgba($color-dark, 1),
      rgba($color-dark, 0)
    );
  }

  .carousel {
    --vc-pgn-background-color: #fff;
    --vc-pgn-active-color: #7e7288;
    --vc-pgn-border-radius: 5px;
    --vc-pgn-height: 5px;
    --vc-pgn-width: 5px;
  }

  :deep(.carousel__prev),
  :deep(.carousel__next) {
    position: absolute;
    top: 100%;
    transform: translateY(-50%);
    z-index: 20;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    font-size: 2rem;
    color: $color-white;
    background: rgba($color-dark, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    pointer-events: auto;
    backdrop-filter: blur(10px);

    &:hover {
      transform: translateY(-50%) scale(1.1);
      background: rgba($color-accent, 0.4);
      color: $color-white;
    }
  }

  :deep(.carousel__prev) {
    left: 1rem;
  }

  :deep(.carousel__next) {
    right: 1rem;
  }

  &__content {
    max-width: 1000px;
    margin: 0 auto;
  }

  h2 {
    font-family: $font-title;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-shadow: 0 0 6px $color-accent;
  }

  span {
    font-size: 2rem;
    color: $color-accent;
    line-height: 0;
    padding-left: 0.5rem;
  }

  .testimonial-carousel {
    padding-bottom: 4rem;

    .carousel__slide {
      padding: 0 1rem;
    }

    .testimonial-card {
      background: linear-gradient(135deg, $color-bg, $color-accent);
      padding: 2rem;
      border-radius: $radius;
      box-shadow: 0 0 24px rgba($color-accent, 0.2);
      text-align: left;
      height: 100%;

      blockquote {
        font-style: italic;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        line-height: 1.8;
        position: relative;
        padding-left: 1.5rem;

        &::before {
          content: "“";
          position: absolute;
          left: 0;
          top: -5px;
          font-size: 2rem;
          color: $color-accent;
        }
      }

      cite {
        font-weight: bold;
        color: $color-accent;
        font-style: normal;
        font-size: 1rem;
      }
    }
  }
}
</style>
