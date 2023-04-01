<template>
    <div class="grid grid-cols-2 outline rounded-3xl overflow-hidden">
        <picture>
            <img
                src="../assets/rick.jpeg"
                alt="profile image character"
            >
        </picture>
        <table>
            <caption>Personage Description</caption>
            <tr>
                <th>Name:</th>
                <td>_Rick_</td>
            </tr>
            <tr>
                <th>Status:</th>
                <td>_Alive_</td>
            </tr>
            <tr>
                <th>Type:</th>
                <td>_Human_</td>
            </tr>
            <tr>
                <th>Episode:</th>
                <td>_List_</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    cardInfoDetails?: string
}>()
</script>

