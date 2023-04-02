
import { defineStore } from 'pinia'

export default interface CharacterObject {
    info: {},
    results: [ {} ]
}
export const useCharacterStore = defineStore('character', {
    state: () => ({
        characters: [] as CharacterObject[],
        character: {},
        loading: false,
        error: String
    }),
    getters: {
        getCharacters: (state) => {
            return state.characters.results
        },
        getNextPagination: (state) => {
            return state.characters?.info?.next
        },
        getPrevPagination: (state) => {
            return state.characters?.info?.prev != null ? state.characters?.info?.prev : 'disabled'
        },
        getCharacterDetails: (state) => {
            return state.character
        }
    },
    actions: {
        async fetchCharacters(): Promise<void> {
            this.loading = true
            try {
                this.characters = await fetch('https://rickandmortyapi.com/api/character').then(response => response.json())
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async fetchCharacterById(id: number) {
            localStorage.setItem('charID', id)
            this.loading = true
            try {
                this.character = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json())
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async retrieveSelectedCharacter() {
            console.log('recupera char', 'length', this.character.length)
            const charID = localStorage?.getItem('charID')
            if (charID !== null && this.character.length == undefined) {
                console.log('recupera if')
                this.fetchCharacterById(Number(charID))
            }
            console.log('recupera fora')
        }
    }
})