// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://arcgestion.fr',
  vite: {
    plugins: [tailwindcss()]
  },
  redirects: {
    // Anciennes URLs WordPress vers nouvelles pages
    '/telecharger-logiciel-gratuit': '/codial/demonstration',
    '/formulaire-telechargement-logiciel': '/codial/demonstration',
    '/actualite-blog': '/blog',
    '/actualites-informatique-gestion-comptabilite': '/blog',
    '/notre-savoir-faire/prestation-service': '/notre-savoir-faire/services',
    '/notre-savoir-faire/logiciel-metier-pour-les-petites-entreprises': '/notre-savoir-faire/produits',
    '/arcgestion/societe-arcgestion': '/notre-societe/presentation',
    '/arcgestion/references-client': '/notre-societe/references',
    '/arcgestion/nos-competences': '/notre-societe/competences',
    '/notre-societe/reference-client': '/notre-societe/references',
    '/solution': '/notre-savoir-faire/solutions',
    '/info-legale-arcgestion': '/mentions-legales',
    '/conditions-generales-de-ventes': '/cgv',
    '/contactez-nous': '/contact',
    '/satisfaction-clients': '/notre-societe',
    '/nos-engagements': '/notre-societe/engagements',
    '/devenir-partenaire-arc-gestion-sage': '/notre-societe/devenir-partenaire',
  }
});