import { defineStore } from 'pinia'
export const useInicialSetup = defineStore('initial-value-setup', {
    state: () => ({
        currentTheme: ''
    }),

    actions: {
        retrieveLocalTheme(): void {
            const theme = localStorage?.getItem('theme')
            if (theme !== null) {
                this.currentTheme = theme
                this.toggleTheme()
            } else {
                localStorage.setItem('theme', "light")
            }
        },

        toggleTheme() {
            if (this.currentTheme === "light" || (!(this.currentTheme in localStorage) && window.matchMedia(`(prefers-color-scheme: dark)`).matches)) {
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
                this.currentTheme = 'dark'
            } else {
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
                this.currentTheme = 'light'
            }
        }
    }
})