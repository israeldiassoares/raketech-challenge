
import { defineStore } from 'pinia'

export const useOwnHeroStore = defineStore('own-hero', {
    state: () => ({
        heros: [] as Hero[],
        favoriteHero: [] as Hero[]
    }),
    getters: {
        getListHero(state) {
            console.log('getters heros', state.heros)
            return state.heros
        },
        getFavoriteHero(state) {
            return state.favoriteHero
        }
    },
    actions: {
        setNewHero(hero: Hero) {
            this.heros.push({ ...hero })
        },

        addFavorite(hero: Hero) {
            if (this.checkIfExistHero(hero)) {
                this.favoriteHero.push({ ...hero })
            } else {
                console.log('já existe carai')
            }
        },
        checkIfExistHero(hero: Hero) {
            let heroName = hero.name
            if (this.favoriteHero.length > 0) {

            }
            return true
        }
    }
})
export interface Hero {
    imageURL: string,
    name: string,
    gender: string
}