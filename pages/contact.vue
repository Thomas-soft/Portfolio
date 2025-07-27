<template>
  <section class="contact">
    <div class="contact__content">
      <h1>📮 Discutons de votre projet</h1>
      <p>
        Une idée, un besoin, une question ? Remplissez ce formulaire et je vous
        réponds rapidement.
      </p>

      <form @submit.prevent="submitForm" class="contact-form">
        <input
          type="text"
          v-model="form.name"
          placeholder="Votre nom"
          required
        />
        <input
          type="email"
          v-model="form.email"
          placeholder="Votre email"
          required
        />
        <textarea
          v-model="form.message"
          placeholder="Votre message..."
          required
        ></textarea>
        <button type="submit" class="btn-primary">Envoyer ✉️</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: "",
  email: "",
  message: "",
});

async function submitForm() {
  try {
    await fetch(
      "http://localhost:5678/webhook-test/d0d2688e-745d-4a67-9ab8-4753e74e9adf",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          source: "Portfolio Contact Form",
        }),
      }
    );
    alert("Message envoyé !");
  } catch (error) {
    alert("Une erreur est survenue. Veuillez réessayer plus tard.");
  }

  console.log("Form submitted:", form);
  alert("Message envoyé !");
  form.name = "";
  form.email = "";
  form.message = "";
}
</script>

<style scoped lang="scss">
.contact {
  padding: 6rem 2rem;
  background-color: $color-bg;
  color: $color-white;
  text-align: center;

  &__content {
    max-width: 700px;
    margin: 0 auto;

    h1 {
      font-size: 2.5rem;
      font-family: $font-title;
      margin-bottom: 1rem;
      text-shadow: 0 0 6px $color-accent;
    }

    p {
      font-size: 1.1rem;
      color: $color-muted;
      margin-bottom: 2.5rem;
    }
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input,
  textarea {
    background: rgba($color-dark, 0.8);
    border: 2px solid transparent;
    border-radius: $radius;
    padding: 1rem;
    font-size: 1rem;
    color: $color-white;
    transition: all 0.3s ease;
    font-family: $font-body;

    &:focus {
      border-color: $color-accent;
      outline: none;
      box-shadow: 0 0 10px rgba($color-accent, 0.4);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  .btn-primary {
    background: $color-accent;
    color: $color-white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    align-self: center;
    box-shadow: 0 0 18px rgba($color-accent, 0.4);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0 24px rgba($color-accent, 0.6);
    }
  }
}
</style>
