<script lang="ts" setup>
import { useField } from 'vee-validate';
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: String,
});

const { value, errorMessage } = useField(toRef(props, 'name'), undefined);
</script>

<template>
    <label class="block mb-2 font-extrabold" for="">{{ label }}</label>
    <input
        class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
        v-model="value"
        :type="props.type"
        :placeholder="props.placeholder"
    />
    <p class="text-red-500">{{ errorMessage }}</p>
</template>
