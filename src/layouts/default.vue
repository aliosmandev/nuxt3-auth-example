<script lang="ts" setup>
const { user, getUser } = useAuth();
getUser();
</script>

<template>
    <div class="">
        <slot />
    </div>
</template>
