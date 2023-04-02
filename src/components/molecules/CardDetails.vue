<template >
    <div
        v-if="cardInfoDetails"
        class="grid grid-cols-3 outline rounded-3xl overflow-hidden"
    >
        <picture>
            <img
                :src="cardInfoDetails.image"
                :alt="'profile image ' + cardInfoDetails.name"
            >
        </picture>
        <ul class="col-span-2">
            <li class="flex">
                <p class="text-green-500">Name:</p>
                <p class="text-green-500">{{ cardInfoDetails.name }}</p>
            </li>
            <li class="flex">
                <p class="text-green-500">Status:</p>
                <p class="text-green-500">{{ cardInfoDetails.status }}</p>
            </li>
            <li class="flex">
                <p class="text-green-500">Type:</p>
                <p class="text-green-500">{{ cardInfoDetails.type }}</p>
            </li>
            <li>
                <p class="text-green-500">Episode<span v-if="cardInfoDetails.episode.length > 1">s</span>:</p>
                <template v-for="      episode          in cardInfoDetails.episode">
                    <p class="text-green-500">{{ episode }} </p>
                </template>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    cardInfoDetails?: {}
}>()

</script>
