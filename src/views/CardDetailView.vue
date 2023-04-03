<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue"
import { useCharacterStore } from "../stores/character"

const CardDetails = defineAsyncComponent({ loader: () => import("../components/molecules/CardDetails.vue") })

const store = useCharacterStore()

onMounted(() => {
    store.retrieveSelectedCharacter()
})
</script>

<template>
    <section>
        <CardDetails :cardInfoDetails="store.getCharacterDetails" />
    </section>
</template>