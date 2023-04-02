<template>
    <form>
        {{ heroForm }}
        heroList {{ store.getListHero }}
        <div class="mb-6">
            <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label>
            <input
                type="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="name"
                v-model="heroForm.name"
            >
        </div>
        <div class="mb-6">
            <ul class="flex justify-between">
                <li>
                    <input
                        type="radio"
                        id="female"
                        value="female"
                        class="hidden peer"
                        v-model="heroForm.gender"
                    >
                    <label
                        for="female"
                        class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <div class="block">
                            <div class="w-full text-lg font-semibold">Female <span> &#9792;</span></div>
                        </div>
                    </label>
                </li>
                <li>
                    <input
                        type="radio"
                        id="male"
                        value="male"
                        class="hidden peer"
                        v-model="heroForm.gender"
                    >
                    <label
                        for="male"
                        class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <div class="block">
                            <div class="w-full text-lg font-semibold">Male <span>&#9794;</span></div>
                        </div>
                    </label>
                </li>
                <li>
                    <input
                        type="radio"
                        id="other"
                        value="unknow"
                        class="hidden peer"
                        v-model="heroForm.gender"
                    >
                    <label
                        for="other"
                        class="inline-flex justify-center w-44 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        <div class="block">
                            <div class="w-full text-lg font-semibold">Other Gender <span>☿</span></div>
                        </div>
                    </label>
                </li>
            </ul>

        </div>
        <div class="mb-6">
            <label
                for="imageURL"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Url Image</label>
            <input
                type="imageURL"
                id="imageURL"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="URL Image"
                v-model="heroForm.imageURL"
            >
        </div>
        <button
            type="submit"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            @click.prevent="setNewHero()"
        >Submit</button>
    </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
import { useOwnHeroStore } from '../stores/ownHero'

const store = useOwnHeroStore()


const heroForm = reactive({
    name: '',
    gender: '',
    imageURL: ''
})

const requiredNameLength = ref(3)
const requiredImageURL = ref(10)

const validations = computed(() => {
    heroForm: {
        name: {
            required
            minLength(3)
        }
        gender: {
            required
        }
        imageURL: {
            required
            minLength(10)
        }
    }
})

const v$ = useVuelidate(validations, heroForm)

function setNewHero() {
    store.setNewHero(heroForm)
}


</script>
