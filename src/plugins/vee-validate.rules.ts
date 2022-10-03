import { configure, defineRule } from 'vee-validate';
import { email, required, min_value } from '@vee-validate/rules';
import { defineNuxtPlugin } from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
    configure({
        validateOnInput: true,
        validateOnBlur: true,
    });
    const rules = {
        email,
        required,
        min_value,
    };
    Object.keys(rules).forEach((key) => {
        defineRule(key, rules[key]);
    });
});
