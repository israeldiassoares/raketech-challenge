import { defineStore } from 'pinia'
export const useInicialSetup = defineStore('initial-value-setup', {
    state: () => ({
        theme: ''
    }),
    getters: {
        getCurrentTheme(state) {
            return state.theme
        }
    },

    actions: {
        retrieveLocalTheme(): void {
            const theme = localStorage?.getItem('retrieveTheme')
            if (theme !== null) {
                this.theme = theme
                this.toggleTheme()
            } else {
                localStorage.setItem('retrieveTheme', "light")
            }
        },

        toggleTheme() {
            if (this.theme === "light") {
                localStorage.setItem('retrieveTheme', 'light')
                document.documentElement.classList.remove('dark')
                this.theme = 'dark'
            } else {
                localStorage.setItem('retrieveTheme', 'dark')
                document.documentElement.classList.add('dark')
                this.theme = 'light'
            }
        }
    }
})