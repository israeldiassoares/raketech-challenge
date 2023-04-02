
import { defineStore } from 'pinia'

export const useOwnHeroStore = defineStore('own-hero', {
    state: () => ({
        heros: [ {} ],
        heroFavorite: [ {} ]
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
        setNewHero(hero: object) {
            this.heros.push({ ...hero })
        },

        addFavorite(hero: object) {
            this.heroFavorite.push({ ...hero })
        },
    }
})