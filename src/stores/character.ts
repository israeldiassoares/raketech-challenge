import { defineStore, storeToRefs } from 'pinia'

export default interface CharacterObject {
    info: {},
    results: [ {} ]
}
const BASE_URL = 'https://rickandmortyapi.com/api'

export const useCharacterStore = defineStore('character', {
    state: () => ({
        charactersList: [] as Response[],
        character: {} as Character,
        queryParam: '',
        text: '',
        pages: 0,
        nextPageURL: '' || null,
        prevPageURL: '' || null,
        loading: false,
        error: String,
        favoriteHeroList: [] as Hero[]
    }),
    getters: {
        getCharactersList: (state) => {
            let resultChar: any
            for (let item in state.charactersList) {
                if (item == 'results') {
                    resultChar = state.charactersList[ item ]
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
            for (let item in state.charactersList) {
                if (item == 'info') {
                    return state.charactersList[ item ]
                }
            }
        },
        getCharacterDetails: (state) => {
            return state.character
        },
        getQuantityPage(state) {
            return state.pages
        },
        getFavoriteHeroList(state) {
            return state.favoriteHeroList
        }
    },
    actions: {
        async getAllOrFiltredResult() {
            let regexText = '/([aA-zZ])\w+/g'
            if (this.queryParam.match(regexText) && this.text.match(regexText)) {

                await this.getFilteredCharacter()
            } else {
                await this.fetchCharacters()
            }
            this.setQuantityPage()
        },
        async fetchCharacters(): Promise<void> {
            this.loading = true
            try {
                this.charactersList = await fetch(`${BASE_URL}/character`).then(response => response.json())

                this.setNextPageURL()
                this.setPrevPageURL()
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
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
        async getFilteredCharacter() {
            this.loading = true
            try {
                this.charactersList = await fetch(`${BASE_URL}/character/?${this.queryParam}=${this.text}`).then(response => response.json())
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
                    this.charactersList = nextPageDate
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
                    this.charactersList = prevPageDate
                }
            } catch (error: any) {
                this.error = error
            } finally {
                this.loading = false
            }
        },
        setQuantityPage() {
            let pages: any
            for (let info in this.charactersList) {
                if (info == 'info') {
                    pages = info
                }
            }
            return this.pages = Number(pages.pages)
        },
        setNextPageURL() {
            let nextUrl = <any>{}
            for (let info in this.charactersList) {

                if (info == 'info') {
                    nextUrl = info
                }
            }
            return this.nextPageURL = nextUrl
        },
        setPrevPageURL() {
            let url = <any>{}
            for (let info in this.charactersList) {
                if (info == 'info') {
                    url = info
                }
            }
            return this.prevPageURL = url
        },
        setSelectedParam(inputValue: string): string {
            return this.queryParam = inputValue
        },
        setTextSearch(text: string) {
            return this.text = text
        },
        addFavorite(hero: Hero) {
            try {
                return this.favoriteHeroList.push({ ...hero })
            } catch (error) {
                return console.error(error)
            }
        },
        checkIfExistHeroOnFavorite(hero: Hero): boolean {
            let listFavHero = [ ...this.getFavoriteHeroList ]
            let heroId = hero.id
            let canAdd = false
            if (!listFavHero.length)
                canAdd = true
            for (const element of listFavHero) {
                console.log('list', listFavHero)
                if (element.id != heroId) {
                    canAdd = true
                } else {
                    return canAdd = false
                }
            }
            return canAdd
        },
        removeFromFavorite(heroId: Hero) {
            this.favoriteHeroList = this.getFavoriteHeroList.filter((e, index) => e.id != heroId.id)
        },
        favoriteActions(hero: Hero) {
            let canAdd = this.checkIfExistHeroOnFavorite(hero)
            if (canAdd) {
                this.addFavorite(hero)
            } else {
                this.removeFromFavorite(hero)
            }
        },
        async retrieveSelectedCharacter() {
            const charID = localStorage?.getItem('charID')
            if (charID !== null && this.character.id == undefined) {
                console.log('recupera if')
                await this.fetchCharacterById(Number(charID))
            }
        },
    }
})

export interface Info {
    info: {
        "count": number,
        "pages": number,
        "next": string | null,
        "prev": string | null
    },
}
export interface Results {
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": Origin,
    "location": Location,
    "image": string,
    "episode": [ Episode ],
    "url": string,
    "created": string
}
export interface Response extends Info, Results {
}

export interface Hero extends Results {
}

export interface Character {
    id: number,
    name: string,
    image: string,
    type: string,
    status: string,
    episode: [ Episode ]
}

export interface Episode {
    name: string,
    url: string
}

export interface Location {
    name: string,
    url: string
}

export interface Origin {
    name: string,
    url: string
}