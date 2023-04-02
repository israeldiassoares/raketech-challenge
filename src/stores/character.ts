
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
        pages: 0,
        nextPageURL: null,
        prevPageURL: null,
        loading: false,
        error: String
    }),
    getters: {
        getCharacters: (state) => {
            return state.characters.results
        },
        getCurrentNumberPage: (state) => {
            let next = state?.nextPageURL?.match(/\d/)
            let prev = state?.prevPageURL?.match(/\d/)
            if (next == 2 && prev == null) {
                return 1
            } else {
                return next - 1
            }
        },
        getPrevPagination: (state) => {
            return state.characters?.info?.prev != null ? state.characters?.info?.prev : 'disabled'
        },
        getCharacterDetails: (state) => {
            return state.character
        },
        getQuantityPage(state) {
            return state.pages
        }
    },
    actions: {
        async fetchCharacters(): Promise<void> {
            this.loading = true
            try {
                this.characters = await fetch(`${BASE_URL}/character`).then(response => response.json())
                this.setNextPageURL()
                this.setPrevPageURL()
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async getAllOrFiltredResult() {
            let regexText = '/([aA-zZ])\w+/g'
            if (this.queryParam.match(regexText) && this.text.match(regexText)) {
                debugger
                await this.getFilteredCharacter()
            } else {
                await this.fetchCharacters()
            }
            this.setQuantityPage()
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
            const charID = localStorage?.getItem('charID')
            if (charID !== null && this.character.id == undefined) {
                console.log('recupera if')
                await this.fetchCharacterById(Number(charID))
            }
        },
        async getFilteredCharacter() {
            this.loading = true
            try {
                this.characters = await fetch(`${BASE_URL}/character/?${this.queryParam}=${this.text}`).then(response => response.json())
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async getNextPageData() {
            console.log('getNextPAge', this.nextPageURL)
            try {
                if (this.nextPageURL !== null) {
                    let nextPageDate = await fetch(`${this.nextPageURL}`).then(response => response.json())
                    this.setNextPageURL()
                    this.setPrevPageURL()
                    this.characters = nextPageDate
                }
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        async getPrevPageData() {
            console.log('getNextPAge', this.nextPageURL)
            try {
                if (this.prevPageURL !== null) {
                    let prevPageDate = await fetch(`${this.prevPageURL}`).then(response => response.json())
                    this.setNextPageURL()
                    this.setPrevPageURL()
                    this.characters = prevPageDate
                }
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        setSelectedParam(inputValue: string): string {
            return this.queryParam = inputValue
        },
        setTextSearch(text: string) {
            return this.text = text
        },
        setQuantityPage() {
            return this.pages = this.characters?.info?.pages
        },
        setNextPageURL() {
            return this.nextPageURL = this.characters?.info?.next
        },
        setPrevPageURL() {
            return this.prevPageURL = this.characters?.info?.prev
        }
    }
})