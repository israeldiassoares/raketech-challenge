<template>
    <button>
        {{ textButton }}
        <slot name="icon">
        </slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    textButton: String
})
</script>
