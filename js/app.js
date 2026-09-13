function app() {
    return {
        // data
        Screens: {
            ABOUT: "ABOUT",
            PROJECTS: "PROJECTS",
            LINKS: "LINKS"
        },

        currentScreen: null,
        mobileNavShow: false,

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

        projects: [
            {
                subsection: "minecraft mods",
                entries: [
                    {
                        name: "woasts",
                        links: {
                            github: "https://github.com/it-pup/woasts"
                        }
                    },
                    {
                        name: "woofaddons",
                        links: {
                            github: "https://github.com/it-pup/woofaddons"
                        }
                    }
                ]
            },
            {
                subsection: "web projects",
                entries: [
                    {
                        name: "homepage",
                        links: {
                            visit: "https://itpuppy.pet",
                            github: "https://github.com/it-pup/itpuppy.pet"
                        }
                    }
                ]
            }
        ],

        links: [
            {
                subsection: "socials",
                entries: [
                    {
                        name: "github",
                        url: "https://github.com/it-pup",
                        icon: "bi-github"
                    },
                    {
                        name: "bluesky",
                        url: "https://bsky.app/profile/itpuppy.pet",
                        icon: "bi-bluesky"
                    }
                ]
            },
            {
                subsection: "game profiles",
                entries: [
                    {
                        name: "osu",
                        url: "https://osu.ppy.sh/users/wagever",
                        icon: "bi-circle-fill"
                    },
                    {
                        name: "monkeytype",
                        url: "https://monkeytype.com/profile/itpuppy",
                        icon: "bi-keyboard-fill"
                    },
                    {
                        name: "minecraft",
                        url: "https://namemc.com/profile/022bfdea-17fb-4b22-ad5a-ec84fe93b569",
                        icon: "bi-controller"
                    }
                ]
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