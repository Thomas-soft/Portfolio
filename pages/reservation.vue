<template>
  <section class="reserver-page">
    <h1>Réservez un appel avec moi</h1>
    <p>
      Choisissez un créneau directement dans mon agenda pour discuter de votre
      projet.
    </p>

    <!-- Calendly embed -->
    <iframe
      src="https://calendly.com/parack0101/30min"
      width="100%"
      height="800px"
      frameborder="0"
      scrolling="no"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script setup>
definePageMeta({
  title: "Réserver un appel – Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Réservez un appel directement dans mon agenda pour parler de votre besoin en automatisation ou développement.",
    },
  ],
});
</script>

<style scoped lang="scss">
.reserver-page {
  padding: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  iframe {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 1.5rem;
  }
}
</style>
