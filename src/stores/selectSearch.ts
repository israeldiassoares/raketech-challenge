import { defineStore } from 'pinia'

export const useSelectSearchQuery = defineStore('select-search-query', {
    state: () => ({
        queryParams: [] as QueryParamsOptions[]
    }),

    actions: {
        selectedParams(value: QueryParamsOptions) {
            return this.queryParams.push(value)
        }
    },
    getters: {}
})

interface QueryParamsOptions {
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string

}