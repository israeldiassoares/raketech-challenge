
import { defineStore } from 'pinia'

export const useOwnHeroStore = defineStore('own-hero', {
    state: () => ({
        heros: [ { imageURL: '', name: '', gender: '' } ],
        heroFavorite: [ { imageURL: '', name: '', gender: '' } ]
    }),
    getters: {
        getListHero(state) {
            return state.heros
        },
        getHeroFavorite(state) {
            return state.heroFavorite
        }
    },
    actions: {
        setNewHero(hero: Hero) {
            this.heros.push({ ...hero })
        },

        addFavorite(hero: Hero) {
            this.heroFavorite.push({ ...hero })
            this.saveStateFavoriteHero(hero)
        },

        saveStateFavoriteHero(hero: object) {
            sessionStorage.setItem('favoriteHero', JSON.stringify(hero))

        },
        retrieveStateFavoriteHero() {
            let key: any = localStorage.getItem('favorite')
            let favorite: any = JSON.parse(key)
            this.heroFavorite.push({ ...favorite })
            console.log('favorite', favorite)
        }
    }
})
export interface Hero {
    imageURL: string,
    name: string,
    gender: string
}