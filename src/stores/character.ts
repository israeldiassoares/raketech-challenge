
import { defineStore } from 'pinia'

export default interface CharacterObject {
    info: {},
    results: [ {} ]
}
const BASE_URL = 'https://rickandmortyapi.com/api'

export const useCharacterStore = defineStore('character', {
    state: () => ({
        characters: [ {
            info: {
                "count": 0,
                "pages": 0,
                "next": null,
                "prev": null
            },
            results: {
                "id": 0,
                "name": '',
                "status": '',
                "species": '',
                "type": '',
                "gender": '',
                "origin": {
                    "name": '',
                    "url": ''
                },
                "location": {
                    "name": '',
                    "url": ''
                },
                "image": '',
                "episode": [ '' ],
                "url": '',
                "created": ''
            }
        } ],
        character: { id: Number, name: '', image: '', type: '', status: '', episode: [] },
        queryParam: '',
        text: '',
        pages: 0,
        nextPageURL: '' || null,
        prevPageURL: '' || null,
        loading: false,
        error: String
    }),
    getters: {
        getCharacters: (state) => {
            let resultChar: any
            for (let item in state.characters) {
                if (item == 'results') {
                    resultChar = state.characters[ item ]
                }
            }
            return resultChar
        },
        getCurrentNumberPage: (state: any) => {
            let next = Number(state.nextPageURL?.match(/\d/))
            let prev = String(state.prevPageURL?.match(/\d/))
            if (next === 2 && prev == '') {
                return 1
            } else {
                return next - 1
            }
        },
        getPrevPagination: (state) => {
            let prevPage = ''
            for (let item in state.characters) {
                if (item == 'info') {
                    return state.characters[ item ]
                }
            }
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
            localStorage.setItem('charID', String(id))
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
            let pages: any
            for (let info in this.characters) {
                if (info == 'info') {
                    pages = info
                }
            }
            return this.pages = Number(pages.pages)
        },
        setNextPageURL() {
            let nextUrl = <any>{}
            for (let info in this.characters) {
                if (info == 'info') {
                    nextUrl = info
                }
            }
            return this.nextPageURL = nextUrl
        },
        setPrevPageURL() {
            let url = <any>{}
            for (let info in this.characters) {
                if (info == 'info') {
                    url = info
                }
            }
            return this.prevPageURL = url
        }
    }
})

export interface Response {
    info: {
        "count": number,
        "pages": number,
        "next": string | null,
        "prev": string | null
    },
    results: {
        "id": number,
        "name": string,
        "status": string,
        "species": string,
        "type": string,
        "gender": string,
        "origin": {
            "name": string,
            "url": string
        },
        "location": {
            "name": string,
            "url": string
        },
        "image": string,
        "episode": [ string

        ],
        "url": string,
        "created": string
    }
}