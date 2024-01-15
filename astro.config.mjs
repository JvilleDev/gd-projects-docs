import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Documentación',
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'Español',
        lang: 'es'
      }
    },
    social: {
      github: 'https://github.com/jvilledev'
    },
    sidebar: [{
      label: 'Himnario',
      collapsed: true,
      items: [{
        label: 'Himnario - Inicio',
        link: '/himnario'
      }, {
        label: 'Instalación',
        link: '/himnario/instalacion'
      }, {
        label: 'Página principal',
        link: '/himnario/pagina-principal'
      }, {
        label: 'Página de edición',
        link: '/himnario/pagina-edicion'
      },{
        label: 'Visualizador',
        link: '/himnario/pagina-ver'
      }]
    }, {
      label: 'Transcriptor',
      collapsed: true,
      items: [{
        label: 'Transcriptor - Inicio',
        link: '/transcriptor'
      }, {
        label: 'Instalación',
        link: '/transcriptor/instalacion'
      }, {
        label: 'Página principal',
        link: '/transcriptor/pagina-principal'
      }, {
        label: 'Página de visualización',
        link: '/transcriptor/pagina-ver'
      }]
    }]
  }),]
});