function app() {
    return {
        // data
        Screens: {
            ABOUT: "ABOUT",
            PROJECTS: "PROJECTS",
            SOCIALS: "SOCIALS"
        },
        currentScreen: null,

        testimonials: [
            {
                from: "mona",
                url: "https://mona.cat/",
                text: "Awesome Fluffy Puppy"
            },
            {
                from: "juna",
                url: "https://github.com/j10a1n15",
                text: "Autumn makes my tail wag"
            },
            {
                from: "'Sappho 594 BC'",
                text: "Women :drooling_face:"
            },
            {
                from: "pandy",
                text: "wruff woof arf awruf awooo"
            },
            {
                from: "rainy",
                url: "https://github.com/rainymei",
                text: "awrf :3 🥺"
            },
            {
                from: "box",
                url: "https://github.com/Bloxigus",
                text: "meow"
            }
        ],

        // functions
        switchScreen(screen) {
            this.currentScreen = screen
        },

        isScreen(screen) {
            return this.currentScreen === screen
        },

        // init
        init() {
            this.currentScreen = this.Screens.ABOUT

            // sort all testimonials by name (alphabetically)
            this.testimonials.sort((a, b) => a.from.localeCompare(b.from))
        }
    }
}