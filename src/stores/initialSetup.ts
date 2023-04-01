import { defineStore } from 'pinia'
import { ChangeThemeStyle } from '../shared/utils/ChangeThemeStyle'
export const useInicialSetup = defineStore('initial-value-setup', {
    state: () => ({
        currentTheme: ''
    }),

    actions: {
        retrieveLocalTheme(): void {
            const theme = localStorage?.getItem('theme')
            console.log('retrive', theme)
            if (theme !== null) {
                this.currentTheme = theme
                this.toggleTheme()
            } else {
                localStorage.setItem('theme', "light")
            }
        },

        toggleTheme() {
            if (this.currentTheme === "light" || (!(this.currentTheme in localStorage) && window.matchMedia(`(prefers-color-scheme: dark)`).matches)) {
                console.log('if currentTheme', this.currentTheme)
                localStorage.setItem('theme', 'light')
                document.documentElement.classList.remove('dark')
                this.currentTheme = 'dark'
            } else {
                console.log('Else currentTheme', this.currentTheme)
                localStorage.setItem('theme', 'dark')
                document.documentElement.classList.add('dark')
                this.currentTheme = 'light'
            }
        }
    }
})