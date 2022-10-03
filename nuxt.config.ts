// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src',
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    nitro: {
        plugins: ['@/server/db/index.ts'],
    },
    plugins: ['~/plugins/vee-validate.components.ts', '~/plugins/vee-validate.rules.ts'],
    build: {
        transpile: ['@vee-validate/rules'],
    },
    runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI,
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    },
});
