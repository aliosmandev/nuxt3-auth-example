import { Field, Form } from 'vee-validate';
import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VForm', Form);
    nuxtApp.vueApp.component('VField', Field);
});
