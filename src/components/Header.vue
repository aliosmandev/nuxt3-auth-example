<script lang="ts" setup>
import VButton from '~/components/ui/Button.vue';
const { user, loggedIn, logout } = useAuth();
</script>

<template>
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <NuxtLink to="/" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Nuxt 3 Auth Example</span>
            </NuxtLink>
            <div class="flex items-center justify-center">
                <ul class="flex flex-row py-4 gap-x-4 font-medium">
                    <li>
                        <NuxtLink to="/" class="nav-link" aria-current="page">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard" class="nav-link">Dashboard</NuxtLink>
                    </li>
                </ul>
                <ClientOnly>
                    <div class="flex gap-x-2 ml-5">
                    <template v-if="loggedIn">
                        <VButton class="!mb-0 btn-link danger" @click="logout">Logout</VButton>
                    </template>
                    <template v-else>
                        <NuxtLink class="btn-link" to="/auth/login">Login</NuxtLink>
                    </template>
                </div>
                </ClientOnly>
            </div>
        </div>
    </nav>
</template>
