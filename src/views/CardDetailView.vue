<script setup lang="ts">
import { defineAsyncComponent, onMounted } from "vue"
import { useCharacterStore } from "../stores/character"

const CardDetails = defineAsyncComponent({ loader: () => import("../components/molecules/CardDetails.vue") })
const BackButton = defineAsyncComponent({ loader: () => import("../components/atoms/AtomArrowButton.vue") })

const store = useCharacterStore()

onMounted(() => {
    store.retrieveSelectedCharacter()
})
</script>

<template>
    <section>
        <BackButton class="py-4" />
    </section>
    <section>
        <CardDetails :cardInfoDetails="store.getCharacterDetails" />
    </section>
</template>