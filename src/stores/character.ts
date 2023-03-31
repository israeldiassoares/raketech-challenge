
import { defineStore } from 'pinia'
import { ref } from 'vue'
export default interface CharacterObject {
    info: ObjectConstructor,
    results: []
}
export const useCharacterStore = defineStore({
    id: 'character',
    state: () => ({
        characters: ref<CharacterObject>,
        loading: false,
        error: String
    }),
    getters: {
        getCharacters: (state) => {
            return state.characters
        },
        getNextPagination: (state) => {
            return state.characters?.info?.next
        },
        getPrevPagination: (state) => {
            return state.characters?.info?.prev != null ? state.characters?.info?.prev : 'disabled'
        }
    },
    actions: {
        async fetchCharacters() {
            this.characters = Object
            this.loading = true
            try {
                this.characters = await fetch('https://rickandmortyapi.com/api/character').then(response => response.json())
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        }
    }
})