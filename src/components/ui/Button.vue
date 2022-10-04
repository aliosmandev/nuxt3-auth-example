<script lang="ts" setup>
import Spinner from '~/components/icons/Spinner.vue';
const props = defineProps({
    onClick: {
        type: Function,
        default: () => {},
    },
    loading: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <button
        :disabled="props.loading"
        @onClick="props.onClick"
        type="submit"
        class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200 disabled:cursor-not-allowed disabled:opacity-60"
    >
        <template v-if="props.loading">
            <Spinner />
        </template>
        <template v-else>
            <slot />
        </template>
    </button>
</template>
