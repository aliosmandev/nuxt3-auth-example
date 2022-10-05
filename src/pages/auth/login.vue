<script lang="ts" setup>
import VInput from '~/components/ui/Input.vue';
import VButton from '~/components/ui/Button.vue';

definePageMeta({
    middleware: 'guest-only',
    layout: false,
});

const { errorMessage, pending, login } = useAuth();
</script>

<template>
    <div class="py-26 bg-white">
        <div class="container px-4 mx-auto">
            <div class="max-w-lg mx-auto">
                <div class="text-center my-8">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
                    <p v-show="errorMessage" class="text-red-500">{{ errorMessage }}</p>
                </div>
                <VForm :initial-values="{ email: '', password: '' }" @submit="login">
                    <div class="mb-6">
                        <VField name="email" v-slot="{ field }" rules="required|email">
                            <VInput v-bind="field" label="Email" type="email" placeholder="Email" />
                        </VField>
                    </div>
                    <div class="mb-6">
                        <VField name="password" v-slot="{ field }" rules="required">
                            <VInput v-bind="field" label="Password" type="password" placeholder="********" />
                        </VField>
                    </div>
                    <VButton :loading="pending">Sign in</VButton>
                    <div class="text-center font-extrabold flex justify-center">
                        <span>Don't have an account?</span>
                        <NuxtLink to="/auth/register" class="ml-1 text-red-500 hover:underline">Sign up</NuxtLink>
                    </div>
                </VForm>
            </div>
        </div>
    </div>
</template>
