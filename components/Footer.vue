<!-- <template>
  <footer class="site-footer">
    <p>© {{ new Date().getFullYear() }} – Ton Nom. Tous droits réservés.</p>
  </footer>
</template> -->

<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__intro">
        <!-- <h2>🤖 Automatisons ensemble</h2> -->
        <p>
          Expert en automatisation no-code (Make, Notion, Airtable, Zapier, IA)
          pour freelances, startups B2B et PME. Gagnez du temps, évitez les
          erreurs, scalez.
        </p>
      </div>

      <div class="footer__links">
        <ul>
          <li><NuxtLink to="/">Accueil</NuxtLink></li>
          <li><NuxtLink to="/projects">Projets</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/reservation">Réserver</NuxtLink></li>
        </ul>
      </div>

      <div class="footer__bottom">
        <p>
          © {{ new Date().getFullYear() }} — Tous droits réservés. <br />
          Développé avec ❤️ et l'automatisation en tête.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
// .site-footer {
//   text-align: center;
//   padding: 2rem 1rem;
//   background-color: #f9f9f9;
//   color: #666;
//   font-size: 0.9rem;
// }

.footer {
  background-color: #0c062b;
  padding: 4rem 2rem;
  font-size: 0.95rem;
  text-align: center;

  &__content {
    max-width: 1000px;
    margin: 0 auto;
  }

  &__intro {
    margin-bottom: 2rem;

    h2 {
      font-size: 1.5rem;
      font-family: "Orbitron", sans-serif;
      color: #fff;
      margin-bottom: 0.5rem;
    }

    p {
      color: #c2b6f8;
      font-size: 1rem;
      line-height: 1.6;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  &__links {
    margin-bottom: 2rem;

    ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.2rem;

      li {
        a {
          color: #9f60ff;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }

  &__bottom {
    color: #8c7cce;
    font-size: 0.85rem;
    line-height: 1.5;
  }
}
</style>
