<script lang="ts" setup>
import VButton from '~/components/ui/Button.vue';
const { loggedIn } = useAuth();
</script>

<template>
    <nav class="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <NuxtLink to="/" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">Nuxt 3 Auth Example</span>
            </NuxtLink>

            <div class="flex items-center justify-center">
                <ul
                    class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                >
                    <li>
                        <NuxtLink to="/" class="nav-link" aria-current="page">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard" class="nav-link">Dashboard</NuxtLink>
                    </li>
                </ul>
                <div>
                    <template v-if="!loggedIn">
                        <NuxtLink to="/auth/login">
                            <VButton class="!py-3 !mb-0">Login</VButton>
                        </NuxtLink></template
                    >
                    <template v-else>
                        <NuxtLink to="/auth/logout">
                            <VButton class="!py-3 !mb-0 !bg-red-600">Logout</VButton>
                        </NuxtLink>
                    </template>
                </div>
            </div>
        </div>
    </nav>
</template>
