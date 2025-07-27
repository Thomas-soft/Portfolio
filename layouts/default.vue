<template>
  <div>
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "~/components/Footer.vue";
</script>

<style scoped lang="scss">
.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
</style>
