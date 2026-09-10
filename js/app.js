function app() {
    return {
        Screens: Object.freeze({
            ABOUT: "ABOUT",
            PROJECTS: "PROJECTS",
            SUPPORT: "SUPPORT",
            SOCIALS: "SOCIALS"
        }),

        currentScreen: null,

        switchScreen(screen) {
            this.currentScreen = screen
        },

        isScreen(screen) {
            return this.currentScreen === screen
        },

        // init
        init() {
            this.currentScreen = this.Screens.ABOUT
        }
    }
}