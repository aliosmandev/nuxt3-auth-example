<script lang="ts" setup>
import Spinner from '~/components/icons/Spinner.vue';
const props = defineProps({
    click: {
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
    <button :disabled="props.loading" @click="props.click" type="submit" class="btn">
        <template v-if="props.loading">
            <Spinner />
        </template>
        <template v-else>
            <slot />
        </template>
    </button>
</template>
