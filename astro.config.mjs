import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://mathox2301.github.io',
    base:'/portfolio',
    vite: {
        plugins: [tailwindcss()],
    },
});