
import { defineStore } from 'pinia'

export default interface CharacterObject {
    info: {},
    results: [ {} ]
}
const BASE_URL = 'https://rickandmortyapi.com/api'

export const useCharacterStore = defineStore('character', {
    state: () => ({
        characters: [] as CharacterObject[],
        character: {},
        queryParam: '',
        text: '',
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
                this.characters = await fetch(`${BASE_URL}/character`).then(response => response.json())
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async fetchCharacterById(id: number) {
            localStorage.setItem('charID', id)
            this.character = {}
            this.loading = true
            try {
                return this.character = await fetch(`${BASE_URL}/character/${id}`).then(response => response.json())
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async retrieveSelectedCharacter() {
            console.log('recupera char', 'length', this.character.length)
            const charID = localStorage?.getItem('charID')
            if (charID !== null && this.character.id == undefined) {
                console.log('recupera if')
                this.fetchCharacterById(Number(charID))
            }
            console.log('recupera fora')
        },

        setSelectedParam(inputValue: string): string {
            return this.queryParam = inputValue
        },
        setTextSearch(text: string) {
            return this.text = text
        },
        async getFilteredCharacter() {
            if (this.queryParam != 'all')
                this.loading = true
            try {
                this.characters = await fetch(`${BASE_URL}/character/?${this.queryParam}=${this.text}`).then(response => response.json())
                debugger
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
    }
})