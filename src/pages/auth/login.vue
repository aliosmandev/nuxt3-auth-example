<script lang="ts" setup>
definePageMeta({
    middleware: 'guest-only',
});

const { errorMessage, login } = useAuth();
</script>

<template>
    <VForm :initial-values="{ email: 'deneme@gmail.com', password: 'deneme' }" @submit="login">
        <p>{{ errorMessage }}</p>
        <VField name="email" v-slot="{ field, errorMessage }" rules="required|email">
            <input v-bind="field" type="email" placeholder="Email" />
            <p>{{ errorMessage }}</p>
        </VField>
        <VField name="password" v-slot="{ field, errorMessage }" rules="required">
            <input v-bind="field" type="password" placeholder="password" />
            <p>{{ errorMessage }}</p>
        </VField>
        <button type="submit">Login</button>
    </VForm>
</template>
