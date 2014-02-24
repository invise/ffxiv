/**
 *  A map for React class definitions.
 */
App = {};

/**
 *  A map for static arrays and dictionaries.
 */
Constants = {
    jobs: [
        {
            abbr: "pld",
            name: "Paladin",
            soul_crystal: "67fd81c209e",
            stats: [
                "dps",
                "defense",
                "magic_defense",
                "vitality",
                "strength",
                "parry",
                "accuracy",
                "skill_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 62,
                strength: 112,
                dexterity: 0,
                intelligence: 41,
                mind: 91,
                piety: 81
            }
        }, {
            abbr: "mnk",
            name: "Monk",
            soul_crystal: "a03321484cc",
            stats: [
                "dps",
                "defense",
                "magic_defense",
                "vitality",
                "strength",
                "accuracy",
                "skill_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 0,
                strength: 174,
                dexterity: 21,
                intelligence: 21,
                mind: 70,
                piety: 41
            }
        }, {
            abbr: "war",
            name: "Warrior",
            soul_crystal: "2b81316eeed",
            stats: [
                "dps",
                "defense",
                "magic_defense",
                "vitality",
                "strength",
                "parry",
                "accuracy",
                "skill_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 62,
                strength: 122,
                dexterity: 0,
                intelligence: 0,
                mind: 0,
                piety: 0
            }
        }, {
            abbr: "whm",
            name: "White Mage",
            soul_crystal: "9cca5eb0fd2",
            stats: [
                "magic_damage",
                "defense",
                "magic_defense",
                "vitality",
                "mind",
                "piety",
                "spell_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 0,
                strength: 21,
                dexterity: 21,
                intelligence: 132,
                mind: 163,
                piety: 152
            }
        }, {
            abbr: "brd",
            name: "Bard",
            soul_crystal: "3e5b5adfe7b",
            stats: [
                "dps",
                "defense",
                "magic_defense",
                "vitality",
                "dexterity",
                "accuracy",
                "skill_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 0,
                strength: 91,
                dexterity: 83,
                intelligence: 91,
                mind: 50,
                piety: 81
            }
        }, {
            abbr: "drg",
            name: "Dragoon",
            soul_crystal: "f6720135c8b",
            stats: [
                "dps",
                "defense",
                "magic_defense",
                "vitality",
                "strength",
                "accuracy",
                "skill_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 10,
                strength: 184,
                dexterity: 11,
                intelligence: 10,
                mind: 20,
                piety: 61
            }
        }, {
            abbr: "blm",
            name: "Black Mage",
            soul_crystal: "a4302cc8e2f",
            stats: [
                "magic_damage",
                "defense",
                "magic_defense",
                "vitality",
                "intelligence",
                "accuracy",
                "spell_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 0,
                strength: 0,
                dexterity: 11,
                intelligence: 194,
                mind: 40,
                piety: 152
            }
        }, {
            abbr: "smn",
            name: "Summoner",
            soul_crystal: "e1570c3d994",
            stats: [
                "magic_damage",
                "defense",
                "magic_defense",
                "vitality",
                "intelligence",
                "accuracy",
                "spell_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 0,
                strength: 88,
                dexterity: 14,
                intelligence: 194,
                mind: 50,
                piety: 122
            }
        }, {
            abbr: "sch",
            name: "Scholar",
            soul_crystal: "eb511e3871f",
            stats: [
                "magic_damage",
                "defense",
                "magic_defense",
                "vitality",
                "mind",
                "piety",
                "spell_speed",
                "critical_hit_rate",
                "determination"
            ],
            bonuses: {
                vitality: 0,
                strength: 88,
                dexterity: 14,
                intelligence: 144,
                mind: 151,
                piety: 152
            }
        }
    ],
    races: [
        {
            name: "Midlander Hyur",
            bonuses: {
                vitality: 3,
                strength: 4,
                dexterity: 2,
                intelligence: 4,
                mind: 1,
                piety: 4
            }
        }, {
            name: "Highlander Hyur",
            bonuses: {
                vitality: 5,
                strength: 6,
                dexterity: 3,
                intelligence: 1,
                mind: 3,
                piety: 0
            }
        }, {
            name: "Wildwood Elezen",
            bonuses: {
                vitality: 1,
                strength: 2,
                dexterity: 6,
                intelligence: 5,
                mind: 0,
                piety: 4
            }
        }, {
            name: "Duskwight Elezen",
            bonuses: {
                vitality: 2,
                strength: 3,
                dexterity: 3,
                intelligence: 6,
                mind: 3,
                piety: 1
            }
        }, {
            name: "Plainsfolk Lalafell",
            bonuses: {
                vitality: 1,
                strength: 5,
                dexterity: 1,
                intelligence: 4,
                mind: 3,
                piety: 4
            }
        }, {
            name: "Dunesfolk Lalafell",
            bonuses: {
                vitality: 0,
                strength: 3,
                dexterity: 0,
                intelligence: 4,
                mind: 5,
                piety: 6
            }
        }, {
            name: "Seeker of the Sun Miqote",
            bonuses: {
                vitality: 3,
                strength: 4,
                dexterity: 5,
                intelligence: 1,
                mind: 2,
                piety: 3
            }
        }, {
            name: "Keeper of the Moon Miqote",
            bonuses: {
                vitality: 0,
                strength: 4,
                dexterity: 1,
                intelligence: 2,
                mind: 6,
                piety: 5
            }
        }, {
            name: "Sea Wolf Roegadyn",
            bonuses: {
                vitality: 6,
                strength: 5,
                dexterity: 1,
                intelligence: 0,
                mind: 4,
                piety: 2
            }
        }, {
            name: "Hellsguard Roegadyn",
            bonuses: {
                vitality: 4,
                strength: 3,
                dexterity: 0,
                intelligence: 3,
                mind: 5,
                piety: 3
            }
        }
    ],
    meals: [
        {
            name: "Lava Toad Legs",
            bonuses: {
                accuracy: {
                    percentage: 4,
                    maximum: 27
                },
                critical_hit_rate: {
                    percentage: 2,
                    maximum: 11
                },
                vitality: {
                    percentage: 3,
                    maximum: 19
                }
            }
        }, {
            name: "Stuffed Cabbage",
            bonuses: {
                accuracy: {
                    percentage: 5,
                    maximum: 21
                },
                critical_hit_rate: {
                    percentage: 2,
                    maximum: 9
                },
                vitality: {
                    percentage: 4,
                    maximum: 13
                }
            }
        }, {
            name: "Apkallu Omelette",
            bonuses: {
                critical_hit_rate: {
                    percentage: 4,
                    maximum: 27
                },
                accuracy: {
                    percentage: 2,
                    maximum: 11
                },
                vitality: {
                    percentage: 3,
                    maximum: 19
                }
            }
        }, {
            name: "Deviled Eggs",
            bonuses: {
                critical_hit_rate: {
                    percentage: 5,
                    maximum: 24
                },
                accuracy: {
                    percentage: 2,
                    maximum: 10
                },
                vitality: {
                    percentage: 4,
                    maximum: 14
                }
            }
        }, {
            name: "Black Truffle Risotto",
            bonuses: {
                determination: {
                    percentage: 4,
                    maximum: 17
                },
                critical_hit_rate: {
                    percentage: 2,
                    maximum: 11
                },
                vitality: {
                    percentage: 3,
                    maximum: 19
                }
            }
        }, {
            name: "Buttons in a Blanket",
            bonuses: {
                determination: {
                    percentage: 5,
                    maximum: 16
                },
                critical_hit_rate: {
                    percentage: 2,
                    maximum: 10
                },
                vitality: {
                    percentage: 4,
                    maximum: 15
                }
            }
        }, {
            name: "Finger Sandwich",
            bonuses: {
                parry: {
                    percentage: 4,
                    maximum: 27
                },
                accuracy: {
                    percentage: 2,
                    maximum: 11
                },
                vitality: {
                    percentage: 3,
                    maximum: 19
                }
            }
        }, {
            name: "La Noscean Toast",
            bonuses: {
                parry: {
                    percentage: 5,
                    maximum: 23
                },
                accuracy: {
                    percentage: 2,
                    maximum: 9
                },
                vitality: {
                    percentage: 4,
                    maximum: 14
                }
            }
        }, {
            name: "Pineapple Juice",
            bonuses: {
                piety: {
                    percentage: 4,
                    maximum: 17
                },
                spell_speed: {
                    percentage: 2,
                    maximum: 11
                },
                vitality: {
                    percentage: 3,
                    maximum: 19
                }
            }
        }, {
            name: "Mulled Tea",
            bonuses: {
                piety: {
                    percentage: 5,
                    maximum: 14
                },
                spell_speed: {
                    percentage: 2,
                    maximum: 10
                },
                vitality: {
                    percentage: 4,
                    maximum: 14
                }
            }
        }, {
            name: "Sauteed Coeurl",
            bonuses: {
                skill_speed: {
                    percentage: 5,
                    maximum: 27
                },
                accuracy: {
                    percentage: 5,
                    maximum: 11
                },
                vitality: {
                    percentage: 2,
                    maximum: 19
                }
            }
        }, {
            name: "Eft Steak",
            bonuses: {
                skill_speed: {
                    percentage: 5,
                    maximum: 26
                },
                accuracy: {
                    percentage: 2,
                    maximum: 10
                },
                vitality: {
                    percentage: 4,
                    maximum: 15
                }
            }
        }, {
            name: "Pineapple Ponzecake",
            bonuses: {
                spell_speed: {
                    percentage: 4,
                    maximum: 27
                },
                piety: {
                    percentage: 2,
                    maximum: 7
                },
                vitality: {
                    percentage: 3,
                    maximum: 19
                }
            }
        }, {
            name: "Pastry Fish",
            bonuses: {
                spell_speed: {
                    percentage: 7,
                    maximum: 17
                },
                piety: {
                    percentage: 2,
                    maximum: 4
                },
                vitality: {
                    percentage: 5,
                    maximum: 11
                }
            }
        }
    ],
    stats: {
        vitality: {
            abbr: 'vit',
            type: 'primary',
            base: 199
        },
        strength: {
            abbr: 'str',
            type: 'primary',
            base: 87
        },
        dexterity: {
            abbr: 'dex',
            type: 'primary',
            base: 188
        },
        intelligence: {
            abbr: 'int',
            type: 'primary',
            base: 77
        },
        mind: {
            abbr: 'mnd',
            type: 'primary',
            base: 108
        },
        piety: {
            abbr: 'pie',
            type: 'secondary',
            base: 87
        },
        parry: {
            abbr: 'par',
            type: 'secondary',
            base: 341
        },
        accuracy: {
            abbr: 'acc',
            type: 'secondary',
            base: 341
        },
        skill_speed: {
            abbr: 'skl',
            type: 'secondary',
            base: 341
        },
        spell_speed: {
            abbr: 'spl',
            type: 'secondary',
            base: 341
        },
        critical_hit_rate: {
            abbr: 'crt',
            type: 'secondary',
            base: 341
        },
        determination: {
            abbr: 'dtr',
            type: 'secondary',
            base: 202
        }
    },
    items: {
        main_hand: [
            {
                nid: 10,
                sid: "f036916741a",
                name: "Curtana",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 33,
                    auto_attack: 34.02,
                    delay: 2.32,
                    dps: 14.67,
                    vitality: 21,
                    strength: 19,
                    parry: 16,
                    accuracy: 23
                }
            }, {
                nid: 11,
                sid: "ec78b78e823",
                name: "Sphairai",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 33,
                    auto_attack: 39.89,
                    delay: 2.72,
                    dps: 14.67,
                    vitality: 30,
                    strength: 27,
                    accuracy: 33,
                    skill_speed: 23
                }
            }, {
                nid: 12,
                sid: "6bff305d55d",
                name: "Bravura",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 33,
                    auto_attack: 50.45,
                    delay: 3.44,
                    dps: 14.67,
                    vitality: 30,
                    strength: 27,
                    parry: 33,
                    skill_speed: 23
                }
            }, {
                nid: 13,
                sid: "893d3c103b4",
                name: "Gae Bolg",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 33,
                    auto_attack: 45.76,
                    delay: 3.12,
                    dps: 14.67,
                    vitality: 30,
                    strength: 27,
                    accuracy: 33,
                    critical_hit_rate: 23
                }
            }, {
                nid: 14,
                sid: "5eb88c0184d",
                name: "Artemis Bow",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 40,
                    magic_damage: 33,
                    auto_attack: 43.73,
                    delay: 3.28,
                    dps: 13.33,
                    vitality: 30,
                    dexterity: 27,
                    accuracy: 33,
                    skill_speed: 23
                }
            }, {
                nid: 15,
                sid: "0f08f17cbbf",
                name: "Thyrus",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["whm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 50.45,
                    delay: 3.44,
                    dps: 14.67,
                    vitality: 27,
                    mind: 27,
                    spell_speed: 23,
                    determination: 23
                }
            }, {
                nid: 16,
                sid: "c62dd8a606e",
                name: "Stardust Rod",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["blm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 50.45,
                    delay: 3.44,
                    dps: 14.67,
                    vitality: 27,
                    intelligence: 27,
                    spell_speed: 33,
                    determination: 16
                }
            }, {
                nid: 17,
                sid: "dfdc5c986bd",
                name: "The Veil of Wiyu",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 45.76,
                    delay: 3.12,
                    dps: 14.67,
                    vitality: 27,
                    intelligence: 27,
                    spell_speed: 33,
                    determination: 16
                }
            }, {
                nid: 18,
                sid: "1ccc5d84c7e",
                name: "Omnilex",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 45.76,
                    delay: 3.12,
                    dps: 14.67,
                    vitality: 27,
                    mind: 27,
                    spell_speed: 33,
                    determination: 16
                }
            }, {
                nid: 19,
                sid: "947c0b98d5a",
                name: "Fists of Crags",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 33,
                    auto_attack: 35.2,
                    delay: 2.4,
                    dps: 14.67,
                    vitality: 30,
                    strength: 27,
                    accuracy: 33,
                    determination: 16
                }
            }, {
                nid: 20,
                sid: "c37ee0810fe",
                name: "The Axe of Crags",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 33,
                    auto_attack: 50.45,
                    delay: 3.44,
                    dps: 14.67,
                    vitality: 30,
                    strength: 27,
                    parry: 33,
                    determination: 16
                }
            }, {
                nid: 21,
                sid: "27d8b4f42fd",
                name: "The Spear of Crags",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 33,
                    auto_attack: 43.41,
                    delay: 2.96,
                    dps: 14.67,
                    vitality: 30,
                    strength: 27,
                    accuracy: 33,
                    determination: 16
                }
            }, {
                nid: 22,
                sid: "53f2faae00a",
                name: "The Bow of Crags",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 40,
                    magic_damage: 33,
                    auto_attack: 44.8,
                    delay: 3.36,
                    dps: 13.33,
                    vitality: 30,
                    dexterity: 27,
                    accuracy: 33,
                    determination: 16
                }
            }, {
                nid: 23,
                sid: "6edd1ff051b",
                name: "The Cane of Crags",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["whm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 50.45,
                    delay: 3.44,
                    dps: 14.67,
                    vitality: 27,
                    mind: 27,
                    piety: 23,
                    determination: 16
                }
            }, {
                nid: 24,
                sid: "70900174315",
                name: "The Cudgel of Crags",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 39.89,
                    delay: 2.72,
                    dps: 14.67,
                    vitality: 19,
                    intelligence: 19,
                    accuracy: 23,
                    determination: 11
                }
            }, {
                nid: 25,
                sid: "d38dd5806ae",
                name: "The Greater Key of Titan",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 49.28,
                    delay: 3.36,
                    dps: 14.67,
                    vitality: 27,
                    intelligence: 27,
                    accuracy: 33,
                    determination: 16
                }
            }, {
                nid: 26,
                sid: "6c34d7cc86d",
                name: "The Holy Key of Titan",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    physical_damage: 44,
                    magic_damage: 66,
                    auto_attack: 49.28,
                    delay: 3.36,
                    dps: 14.67,
                    vitality: 27,
                    mind: 27,
                    piety: 23,
                    determination: 16
                }
            }, {
                nid: 27,
                sid: "c3c235e7ca5",
                name: "Curtana Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 600
                },
                stats: {
                    physical_damage: 46,
                    auto_attack: 35.57,
                    delay: 2.32,
                    dps: 15.33,
                    vitality: 25,
                    strength: 22,
                    parry: 18,
                    accuracy: 26
                }
            }, {
                nid: 28,
                sid: "26f5a0f9988",
                name: "Sphairai Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 35,
                    auto_attack: 41.71,
                    delay: 2.72,
                    dps: 15.33,
                    vitality: 35,
                    strength: 31,
                    accuracy: 37,
                    skill_speed: 26
                }
            }, {
                nid: 29,
                sid: "172a2496ca2",
                name: "Bravura Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 35,
                    auto_attack: 52.75,
                    delay: 3.44,
                    dps: 15.33,
                    vitality: 35,
                    strength: 31,
                    parry: 37,
                    skill_speed: 26
                }
            }, {
                nid: 30,
                sid: "81592312f3a",
                name: "Gae Bolg Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 35,
                    auto_attack: 47.84,
                    delay: 3.12,
                    dps: 15.33,
                    vitality: 35,
                    strength: 31,
                    accuracy: 37,
                    critical_hit_rate: 26
                }
            }, {
                nid: 31,
                sid: "144865c071c",
                name: "Artemis Bow Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 41,
                    magic_damage: 35,
                    auto_attack: 44.83,
                    delay: 3.28,
                    dps: 13.67,
                    vitality: 35,
                    dexterity: 31,
                    accuracy: 37,
                    skill_speed: 26
                }
            }, {
                nid: 32,
                sid: "d19447e548d",
                name: "Thyrus Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["whm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 52.75,
                    delay: 3.44,
                    dps: 15.33,
                    vitality: 32,
                    mind: 31,
                    spell_speed: 26,
                    determination: 26
                }
            }, {
                nid: 33,
                sid: "d479632ab0a",
                name: "Stardust Rod Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 52.75,
                    delay: 3.44,
                    dps: 15.33,
                    vitality: 32,
                    intelligence: 31,
                    spell_speed: 37,
                    determination: 18
                }
            }, {
                nid: 34,
                sid: "7cb3733fc7a",
                name: "The Veil of Wiyu Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 47.84,
                    delay: 3.12,
                    dps: 15.33,
                    vitality: 32,
                    intelligence: 31,
                    spell_speed: 37,
                    determination: 18
                }
            }, {
                nid: 35,
                sid: "52a24052a77",
                name: "Omnilex Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 900
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 47.84,
                    delay: 3.12,
                    dps: 15.33,
                    vitality: 32,
                    mind: 31,
                    spell_speed: 37,
                    determination: 18
                }
            }, {
                nid: 36,
                sid: "ca8b8dd7378",
                name: "Allagan Blade",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 36,
                    auto_attack: 33.84,
                    delay: 2.16,
                    dps: 15.67,
                    vitality: 28,
                    strength: 24,
                    parry: 28,
                    accuracy: 19
                }
            }, {
                nid: 37,
                sid: "ed99465e382",
                name: "Allagan Baghnakhs",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 36,
                    auto_attack: 42.61,
                    delay: 2.72,
                    dps: 15.67,
                    vitality: 39,
                    strength: 34,
                    critical_hit_rate: 39,
                    determination: 19
                }
            }, {
                nid: 38,
                sid: "5faa5a44f0e",
                name: "Allagan Battleaxe",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 36,
                    auto_attack: 52.64,
                    delay: 3.36,
                    dps: 15.67,
                    vitality: 39,
                    strength: 34,
                    accuracy: 39,
                    determination: 19
                }
            }, {
                nid: 39,
                sid: "83d27e40c52",
                name: "Allagan Spear",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 36,
                    auto_attack: 46.37,
                    delay: 2.96,
                    dps: 15.67,
                    vitality: 39,
                    strength: 34,
                    skill_speed: 27,
                    determination: 28
                }
            }, {
                nid: 40,
                sid: "4de23b65af1",
                name: "Allagan Composite Bow",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 42,
                    magic_damage: 36,
                    auto_attack: 44.8,
                    delay: 3.2,
                    dps: 14,
                    vitality: 39,
                    dexterity: 34,
                    accuracy: 27,
                    skill_speed: 39
                }
            }, {
                nid: 41,
                sid: "6495bb0ae1d",
                name: "Allagan Cane",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["whm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 71,
                    delay: 3.36,
                    auto_attack: 52.64,
                    dps: 15.67,
                    vitality: 35,
                    mind: 34,
                    piety: 22,
                    spell_speed: 39
                }
            }, {
                nid: 42,
                sid: "02a1f86be79",
                name: "Allagan Scepter",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 71,
                    delay: 2.64,
                    auto_attack: 41.36,
                    dps: 15.67,
                    vitality: 25,
                    intelligence: 24,
                    accuracy: 28,
                    spell_speed: 19
                }
            }, {
                nid: 43,
                sid: "387cd387c23",
                name: "Allagan Grimoire of Casting",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 71,
                    delay: 3.2,
                    auto_attack: 50.13,
                    dps: 15.67,
                    vitality: 35,
                    intelligence: 34,
                    critical_hit_rate: 39,
                    determination: 19
                }
            }, {
                nid: 44,
                sid: "b3540db07e1",
                name: "Allagan Grimoire of Healing",
                rarity: "rare",
                ilvl: 95,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    physical_damage: 47,
                    magic_damage: 71,
                    delay: 3.2,
                    auto_attack: 50.13,
                    dps: 15.67,
                    vitality: 35,
                    mind: 34,
                    critical_hit_rate: 39,
                    determination: 19
                }
            }, {
                nid: 45,
                sid: "7ad55b62ed1",
                name: "Break Blade",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 2
                },
                stats: {
                    physical_damage: 46,
                    auto_attack: 33.12,
                    delay: 2.16,
                    dps: 15.33,
                    vitality: 25,
                    strength: 22,
                    skill_speed: 18,
                    critical_hit_rate: 26
                }
            }, {
                nid: 46,
                sid: "fd7a79ce096",
                name: "Hellish Claws",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 35,
                    auto_attack: 40.48,
                    delay: 2.64,
                    dps: 15.33,
                    vitality: 35,
                    strength: 31,
                    accuracy: 26,
                    determination: 26
                }
            }, {
                nid: 47,
                sid: "6dc14414b01",
                name: "Dual Haken",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 35,
                    auto_attack: 51.52,
                    delay: 3.36,
                    dps: 15.33,
                    vitality: 35,
                    strength: 31,
                    parry: 26,
                    accuracy: 37
                }
            }, {
                nid: 48,
                sid: "ec500a8bb1a",
                name: "Holy Lance",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 35,
                    auto_attack: 45.39,
                    delay: 2.96,
                    dps: 15.33,
                    vitality: 35,
                    strength: 31,
                    accuracy: 26,
                    skill_speed: 37
                }
            }, {
                nid: 49,
                sid: "4723c417204",
                name: "Elfin Bow",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 41,
                    magic_damage: 35,
                    auto_attack: 38.27,
                    delay: 2.8,
                    dps: 13.67,
                    vitality: 35,
                    dexterity: 31,
                    critical_hit_rate: 37,
                    determination: 18
                }
            }, {
                nid: 50,
                sid: "1a34cf169f9",
                name: "Omnirod",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["whm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 51.52,
                    delay: 3.36,
                    dps: 15.33,
                    vitality: 32,
                    mind: 31,
                    piety: 28,
                    critical_hit_rate: 26
                }
            }, {
                nid: 51,
                sid: "d47fc8477e6",
                name: "Elder Staff",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                slots_prevented: ["off_hand"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 51.52,
                    delay: 3.36,
                    dps: 15.33,
                    vitality: 32,
                    intelligence: 31,
                    critical_hit_rate: 26,
                    determination: 26
                }
            }, {
                nid: 52,
                sid: "aee840713e3",
                name: "Omnitome",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 47.84,
                    delay: 3.12,
                    dps: 15.33,
                    vitality: 32,
                    intelligence: 31,
                    accuracy: 37,
                    spell_speed: 26
                }
            }, {
                nid: 53,
                sid: "5e3ee319f87",
                name: "Cognitome",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 3
                },
                stats: {
                    physical_damage: 46,
                    magic_damage: 69,
                    auto_attack: 47.84,
                    delay: 3.12,
                    dps: 15.33,
                    vitality: 32,
                    mind: 31,
                    piety: 28,
                    spell_speed: 26
                }
            }
        ],
        head: [
            {
                nid: 10,
                sid: "27d55643867",
                name: "Crown of Light",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 111,
                    magic_defense: 111,
                    vitality: 17,
                    strength: 15,
                    parry: 19,
                    determination: 9
                }
            }, {
                nid: 11,
                sid: "a9af6d58abb",
                name: "Onion Mask",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 77,
                    magic_defense: 43,
                    vitality: 17,
                    strength: 15,
                    accuracy: 19,
                    critical_hit_rate: 13
                }
            }, {
                nid: 12,
                sid: "1f9f4d45d64",
                name: "Fuma Gantai",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 60,
                    vitality: 17,
                    strength: 15,
                    skill_speed: 19,
                    determination: 9
                }
            }, {
                nid: 13,
                sid: "143346af104",
                name: "Ballad Crown",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 60,
                    vitality: 17,
                    dexterity: 15,
                    skill_speed: 13,
                    determination: 13
                }
            }, {
                nid: 14,
                sid: "fbe2a9e0c8c",
                name: "Crimson Circlet",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 43,
                    magic_defense: 77,
                    vitality: 15,
                    intelligence: 15,
                    critical_hit_rate: 19,
                    determination: 9
                }
            }, {
                nid: 15,
                sid: "911ff8956b0",
                name: "Royal Crown",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 43,
                    magic_defense: 77,
                    vitality: 15,
                    mind: 15,
                    spell_speed: 19,
                    determination: 9
                }
            }, {
                nid: 16,
                sid: "44687a1ba5c",
                name: "Valor Coronet",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    accuracy: 21,
                    critical_hit_rate: 15
                }
            }, {
                nid: 17,
                sid: "633802150a7",
                name: "Melee Circlet",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    strength: 18,
                    accuracy: 15,
                    critical_hit_rate: 21
                }
            }, {
                nid: 18,
                sid: "017f415f887",
                name: "Warrior's Burgeonet",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    skill_speed: 15,
                    determination: 15
                }
            }, {
                nid: 19,
                sid: "21d442cd2ea",
                name: "Wyrm's Armet",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 78,
                    magic_defense: 44,
                    vitality: 20,
                    strength: 18,
                    accuracy: 21,
                    determination: 11
                }
            }, {
                nid: 20,
                sid: "384d5379569",
                name: "Bard's Chapeau",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    dexterity: 18,
                    accuracy: 15,
                    critical_hit_rate: 21
                }
            }, {
                nid: 21,
                sid: "295691c91f7",
                name: "Cleric's Circlet",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 16,
                    spell_speed: 15
                }
            }, {
                nid: 22,
                sid: "ffdd6599999",
                name: "Sorceror's Petasos",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    spell_speed: 21,
                    critical_hit_rate: 15
                }
            }, {
                nid: 23,
                sid: "3926d5e6a27",
                name: "Summoner's Horn",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    accuracy: 15,
                    critical_hit_rate: 21
                }
            }, {
                nid: 24,
                sid: "8b39f410f0c",
                name: "Argute Mortarboard",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 11,
                    determination: 15
                }
            }, {
                nid: 25,
                sid: "9ee5c939388",
                name: "Allagan Helm",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    parry: 21,
                    accuracy: 15
                }
            }, {
                nid: 26,
                sid: "a6fdf9c8a3f",
                name: "Allagan Visor of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 78,
                    magic_defense: 44,
                    vitality: 20,
                    strength: 18,
                    critical_hit_rate: 21,
                    determination: 11
                }
            }, {
                nid: 27,
                sid: "cebfa4c61c6",
                name: "Allagan Visor of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    strength: 18,
                    critical_hit_rate: 15,
                    determination: 15
                }
            }, {
                nid: 28,
                sid: "7cb29ca81e9",
                name: "Allagan Visor of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    dexterity: 18,
                    accuracy: 21,
                    critical_hit_rate: 15
                }
            }, {
                nid: 29,
                sid: "e167a18c187",
                name: "Allagan Circlet of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    accuracy: 15,
                    determination: 15
                }
            }, {
                nid: 30,
                sid: "b9477bdb802",
                name: "Allagan Circlet of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 11,
                    determination: 15
                }
            }
        ],
        body: [
            {
                nid: 10,
                sid: "59016217ca3",
                name: "Armor of Light",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 155,
                    magic_defense: 155,
                    vitality: 27,
                    strength: 25,
                    parry: 30,
                    critical_hit_rate: 21
                }
            }, {
                nid: 11,
                sid: "95dd75c4a3f",
                name: "Onion Armor",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 107,
                    magic_defense: 60,
                    vitality: 27,
                    strength: 25,
                    accuracy: 30,
                    skill_speed: 21
                }
            }, {
                nid: 12,
                sid: "1acf7a37c2a",
                name: "Fuma Koromo",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 84,
                    magic_defense: 84,
                    vitality: 27,
                    strength: 25,
                    critical_hit_rate: 21,
                    determination: 21
                }
            }, {
                nid: 13,
                sid: "7de68e8a1ee",
                name: "Ballad Corselet",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 84,
                    magic_defense: 84,
                    vitality: 27,
                    dexterity: 25,
                    accuracy: 30,
                    determination: 15
                }
            }, {
                nid: 14,
                sid: "ea9f733de77",
                name: "Crimson Robe",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 107,
                    vitality: 25,
                    intelligence: 25,
                    accuracy: 21,
                    critical_hit_rate: 30
                }
            }, {
                nid: 15,
                sid: "b521f865a56",
                name: "Royal Vest",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 107,
                    vitality: 25,
                    mind: 25,
                    piety: 15,
                    spell_speed: 30
                }
            }, {
                nid: 16,
                sid: "1bb3f66e5fc",
                name: "Valor Surcoat",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 158,
                    magic_defense: 158,
                    vitality: 33,
                    strength: 29,
                    parry: 34,
                    determination: 17
                }
            }, {
                nid: 17,
                sid: "762078deb7e",
                name: "Melee Cyclas",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    strength: 29,
                    accuracy: 34,
                    skill_speed: 24
                }
            }, {
                nid: 18,
                sid: "bd2138da845",
                name: "Warrior's Cuirass",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 158,
                    magic_defense: 158,
                    vitality: 33,
                    strength: 29,
                    parry: 34,
                    accuracy: 24
                }
            }, {
                nid: 19,
                sid: "41e8f8f8d49",
                name: "Wyrm's Mail",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 110,
                    magic_defense: 62,
                    vitality: 33,
                    strength: 29,
                    critical_hit_rate: 24,
                    determination: 24
                }
            }, {
                nid: 20,
                sid: "ca9c5f39176",
                name: "Bard's Shirt",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    dexterity: 29,
                    accuracy: 24,
                    critical_hit_rate: 34
                }
            }, {
                nid: 21,
                sid: "0ffe5c341c0",
                name: "Cleric's Robe",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    mind: 29,
                    piety: 26,
                    spell_speed: 24
                }
            }, {
                nid: 22,
                sid: "efaf5b94ff9",
                name: "Sorceror's Coat",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    intelligence: 29,
                    accuracy: 34,
                    spell_speed: 24
                }
            }, {
                nid: 23,
                sid: "5ad40526dda",
                name: "Summoner's Doublet",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    intelligence: 29,
                    critical_hit_rate: 34,
                    determination: 17
                }
            }, {
                nid: 24,
                sid: "422af3e18ed",
                name: "Argute Gown",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    mind: 29,
                    piety: 26,
                    critical_hit_rate: 24
                }
            }, {
                nid: 25,
                sid: "758972db85b",
                name: "Heavy Allagan Armor",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 158,
                    magic_defense: 158,
                    vitality: 33,
                    strength: 29,
                    parry: 24,
                    accuracy: 34
                }
            }, {
                nid: 26,
                sid: "fe1538d1666",
                name: "Allagan Cuirass of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 110,
                    magic_defense: 62,
                    vitality: 33,
                    strength: 29,
                    skill_speed: 34,
                    determination: 17
                }
            }, {
                nid: 27,
                sid: "4d0ac94a205",
                name: "Allagan Cuirass of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    strength: 29,
                    accuracy: 24,
                    critical_hit_rate: 34
                }
            }, {
                nid: 28,
                sid: "8c245d4405c",
                name: "Allagan Cuirass of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    dexterity: 29,
                    skill_speed: 34,
                    critical_hit_rate: 24
                }
            }, {
                nid: 29,
                sid: "bd43f362c30",
                name: "Allagan Tunic of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    intelligence: 29,
                    spell_speed: 24,
                    determination: 24
                }
            }, {
                nid: 30,
                sid: "c76bf680c99",
                name: "Allagan Tunic of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    mind: 29,
                    piety: 26,
                    determination: 17
                }
            }
        ],
        hands: [
            {
                nid: 10,
                sid: "b674bef2cc8",
                name: "Gauntlets of Light",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 111,
                    magic_defense: 111,
                    vitality: 17,
                    strength: 15,
                    parry: 19,
                    skill_speed: 13
                }
            }, {
                nid: 11,
                sid: "596ee23d486",
                name: "Onion Gauntlets",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 77,
                    magic_defense: 43,
                    vitality: 17,
                    strength: 15,
                    accuracy: 13,
                    critical_hit_rate: 19
                }
            }, {
                nid: 12,
                sid: "52cc906ff22",
                name: "Fuma Tekko",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 60,
                    vitality: 17,
                    strength: 15,
                    accuracy: 19,
                    critical_hit_rate: 13
                }
            }, {
                nid: 13,
                sid: "674e3a5016c",
                name: "Ballad Gauntlets",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 60,
                    vitality: 17,
                    dexterity: 15,
                    critical_hit_rate: 13,
                    determination: 13
                }
            }, {
                nid: 14,
                sid: "43031c4fb39",
                name: "Crimson Celestial Gloves",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 43,
                    magic_defense: 77,
                    vitality: 15,
                    intelligence: 15,
                    spell_speed: 13,
                    critical_hit_rate: 19
                }
            }, {
                nid: 15,
                sid: "05bd224b555",
                name: "Royal Celestial Gloves",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 43,
                    magic_defense: 77,
                    vitality: 15,
                    mind: 15,
                    piety: 9,
                    critical_hit_rate: 19
                }
            }, {
                nid: 16,
                sid: "4f0647852c4",
                name: "Valor Gauntlets",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    parry: 21,
                    critical_hit_rate: 15
                }
            }, {
                nid: 17,
                sid: "290690db45b",
                name: "Melee Gloves",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    strength: 18,
                    skill_speed: 15,
                    determination: 15
                }
            }, {
                nid: 18,
                sid: "899cb94e0ca",
                name: "Warrior's Gauntlets",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    parry: 15,
                    accuracy: 21
                }
            }, {
                nid: 19,
                sid: "5b9c620139f",
                name: "Wyrm's Gauntlets",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 78,
                    magic_defense: 44,
                    vitality: 20,
                    strength: 18,
                    skill_speed: 15,
                    determination: 15
                }
            }, {
                nid: 20,
                sid: "0a7b87f992c",
                name: "Bard's Ringbands",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    dexterity: 18,
                    accuracy: 15,
                    critical_hit_rate: 21
                }
            }, {
                nid: 21,
                sid: "04a8de7189a",
                name: "Cleric's Gloves",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 16,
                    spell_speed: 15
                }
            }, {
                nid: 22,
                sid: "1dfe3fb690a",
                name: "Sorceror's Gloves",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    accuracy: 15,
                    spell_speed: 21
                }
            }, {
                nid: 23,
                sid: "5bdc0dfc1e1",
                name: "Summoner's Ringbands",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    accuracy: 21,
                    spell_speed: 15
                }
            }, {
                nid: 24,
                sid: "b9d4056634f",
                name: "Argute Gloves",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 16,
                    spell_speed: 15
                }
            }, {
                nid: 25,
                sid: "a86c1b75601",
                name: "Heavy Allagan Gauntlets",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    accuracy: 21,
                    determination: 11
                }
            }, {
                nid: 26,
                sid: "c70b0edb8bd",
                name: "Allagan Gauntlets of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 78,
                    magic_defense: 44,
                    vitality: 20,
                    strength: 18,
                    accuracy: 15,
                    determination: 15
                }
            }, {
                nid: 27,
                sid: "e0d9f262b0a",
                name: "Allagan Gauntlets of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    strength: 18,
                    critical_hit_rate: 21,
                    determination: 11
                }
            }, {
                nid: 28,
                sid: "7d420180b99",
                name: "Allagan Gauntlets of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    dexterity: 18,
                    skill_speed: 21,
                    determination: 11
                }
            }, {
                nid: 29,
                sid: "ea3b9f13a6d",
                name: "Allagan Gloves of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    spell_speed: 21,
                    determination: 11
                }
            }, {
                nid: 30,
                sid: "6156a10108f",
                name: "Allagan Gloves of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 16,
                    critical_hit_rate: 15
                }
            }
        ],
        waist: [
            {
                nid: 10,
                sid: "cfdae49b362",
                name: "Belt of Light",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 96,
                    magic_defense: 96,
                    vitality: 13,
                    strength: 11,
                    parry: 10,
                    critical_hit_rate: 14
                }
            }, {
                nid: 11,
                sid: "4f7a7a7d81d",
                name: "Onion Tassets",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 66,
                    magic_defense: 37,
                    vitality: 13,
                    strength: 11,
                    critical_hit_rate: 10,
                    determination: 10
                }
            }, {
                nid: 12,
                sid: "45ef183b833",
                name: "Fuma Obi",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 52,
                    magic_defense: 52,
                    vitality: 13,
                    strength: 11,
                    skill_speed: 10,
                    determination: 10
                }
            }, {
                nid: 13,
                sid: "1140652b8fa",
                name: "Ballad Sash",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 52,
                    magic_defense: 52,
                    vitality: 13,
                    dexterity: 11,
                    accuracy: 10,
                    determination: 10
                }
            }, {
                nid: 14,
                sid: "3cb7ecd01fb",
                name: "Crimson Sash",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 37,
                    magic_defense: 66,
                    vitality: 11,
                    intelligence: 11,
                    critical_hit_rate: 10,
                    determination: 10
                }
            }, {
                nid: 15,
                sid: "61330e99202",
                name: "Royal Sash",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 37,
                    magic_defense: 66,
                    vitality: 11,
                    mind: 11,
                    piety: 10,
                    determination: 7
                }
            }, {
                nid: 16,
                sid: "25e6134b52c",
                name: "Hero's Belt of Fending",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 98,
                    magic_defense: 98,
                    vitality: 15,
                    strength: 13,
                    accuracy: 16,
                    determination: 8
                }
            }, {
                nid: 17,
                sid: "86bc132a246",
                name: "Hero's Belt of Maiming",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 68,
                    magic_defense: 38,
                    vitality: 15,
                    strength: 13,
                    accuracy: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 18,
                sid: "6eed01b1f0f",
                name: "Hero's Belt of Striking",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 53,
                    magic_defense: 53,
                    vitality: 15,
                    strength: 13,
                    accuracy: 11,
                    skill_speed: 16
                }
            }, {
                nid: 19,
                sid: "16b544f32c0",
                name: "Hero's Belt of Aiming",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 53,
                    magic_defense: 53,
                    vitality: 15,
                    dexterity: 13,
                    critical_hit_rate: 16,
                    determination: 8
                }
            }, {
                nid: 20,
                sid: "dcc1babdd91",
                name: "Hero's Belt of Casting",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 38,
                    magic_defense: 68,
                    vitality: 14,
                    intelligence: 13,
                    accuracy: 11,
                    spell_speed: 16
                }
            }, {
                nid: 21,
                sid: "c6cec4687d4",
                name: "Hero's Belt of Healing",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 38,
                    magic_defense: 68,
                    vitality: 14,
                    mind: 13,
                    piety: 8,
                    critical_hit_rate: 16
                }
            }, {
                nid: 22,
                sid: "a268c05be65",
                name: "Allagan Plate Belt",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 98,
                    magic_defense: 98,
                    vitality: 15,
                    strength: 13,
                    parry: 16,
                    accuracy: 11
                }
            }, {
                nid: 23,
                sid: "2648bb239f1",
                name: "Allagan Tassets of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 68,
                    magic_defense: 38,
                    vitality: 15,
                    strength: 13,
                    accuracy: 11,
                    skill_speed: 16
                }
            }, {
                nid: 24,
                sid: "ecc9c3b552a",
                name: "Allagan Tassets of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 53,
                    magic_defense: 53,
                    vitality: 15,
                    strength: 13,
                    critical_hit_rate: 16,
                    determination: 8
                }
            }, {
                nid: 25,
                sid: "547352360eb",
                name: "Allagan Tassets of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 53,
                    magic_defense: 53,
                    vitality: 15,
                    dexterity: 13,
                    skill_speed: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 26,
                sid: "268c2953449",
                name: "Allagan Rope Belt of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 38,
                    magic_defense: 68,
                    vitality: 14,
                    intelligence: 13,
                    spell_speed: 11,
                    critical_hit_rate: 16
                }
            }, {
                nid: 27,
                sid: "202590ab178",
                name: "Allagan Rope Belt of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 38,
                    magic_defense: 68,
                    vitality: 14,
                    mind: 13,
                    piety: 12,
                    spell_speed: 11
                }
            }
        ],
        legs: [
            {
                nid: 10,
                sid: "30c794961fe",
                name: "Breeches of Light",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 155,
                    magic_defense: 155,
                    vitality: 27,
                    strength: 25,
                    parry: 30,
                    skill_speed: 21
                }
            }, {
                nid: 11,
                sid: "7e3453d2e17",
                name: "Onion Sarouel",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 107,
                    magic_defense: 60,
                    vitality: 27,
                    strength: 25,
                    accuracy: 21,
                    critical_hit_rate: 30
                }
            }, {
                nid: 12,
                sid: "f50d3081dd1",
                name: "Fuma Hakama",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 84,
                    magic_defense: 84,
                    vitality: 27,
                    strength: 25,
                    skill_speed: 21,
                    determination: 21
                }
            }, {
                nid: 13,
                sid: "bd74f55d6bc",
                name: "Ballad Sarouel",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 84,
                    magic_defense: 84,
                    vitality: 27,
                    dexterity: 25,
                    accuracy: 21,
                    skill_speed: 30
                }
            }, {
                nid: 14,
                sid: "8fcadcb648b",
                name: "Crimson Breeches",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 107,
                    vitality: 25,
                    intelligence: 25,
                    spell_speed: 21,
                    determination: 21
                }
            }, {
                nid: 15,
                sid: "554d5cafc11",
                name: "Royal Breeches",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 107,
                    vitality: 25,
                    mind: 25,
                    piety: 15,
                    determination: 21
                }
            }, {
                nid: 16,
                sid: "06a0d6359b3",
                name: "Valor Cuisses",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 158,
                    magic_defense: 158,
                    vitality: 33,
                    strength: 29,
                    parry: 34,
                    accuracy: 24
                }
            }, {
                nid: 17,
                sid: "bce74f6fb99",
                name: "Melee Gaskins",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    strength: 29,
                    accuracy: 34,
                    determination: 17
                }
            }, {
                nid: 18,
                sid: "d94c31d4d35",
                name: "Warrior's Breeches",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 158,
                    magic_defense: 158,
                    vitality: 33,
                    strength: 29,
                    parry: 24,
                    determination: 24
                }
            }, {
                nid: 19,
                sid: "4843c4f2fae",
                name: "Wyrm's Breeches",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 110,
                    magic_defense: 62,
                    vitality: 33,
                    strength: 29,
                    skill_speed: 34,
                    critical_hit_rate: 24
                }
            }, {
                nid: 20,
                sid: "ca3acb26c7a",
                name: "Bard's Tights",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    dexterity: 29,
                    critical_hit_rate: 34,
                    determination: 17
                }
            }, {
                nid: 21,
                sid: "ac087bfdc54",
                name: "Cleric's Culottes",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    mind: 29,
                    piety: 26,
                    determination: 17
                }
            }, {
                nid: 22,
                sid: "5650f3c88c5",
                name: "Sorceror's Tonban",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    intelligence: 29,
                    spell_speed: 34,
                    critical_hit_rate: 24
                }
            }, {
                nid: 23,
                sid: "7ec751f96bd",
                name: "Summoner's Waistclout",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    intelligence: 29,
                    accuracy: 34,
                    determination: 17
                }
            }, {
                nid: 24,
                sid: "b86d40b34d5",
                name: "Argute Culottes",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 825
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    mind: 29,
                    piety: 26,
                    critical_hit_rate: 24
                }
            }, {
                nid: 25,
                sid: "b0fd5ea88e1",
                name: "Heavy Allagan Cuisses",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 158,
                    magic_defense: 158,
                    vitality: 33,
                    strength: 29,
                    parry: 24,
                    critical_hit_rate: 34
                }
            }, {
                nid: 26,
                sid: "4ce6c0b0885",
                name: "Allagan Trousers of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 110,
                    magic_defense: 62,
                    vitality: 33,
                    strength: 29,
                    accuracy: 34,
                    determination: 17
                }
            }, {
                nid: 27,
                sid: "b41f431a15e",
                name: "Allagan Trousers of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    strength: 29,
                    skill_speed: 24,
                    critical_hit_rate: 34
                }
            }, {
                nid: 28,
                sid: "bd5ade6ab45",
                name: "Allagan Trousers of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 86,
                    magic_defense: 86,
                    vitality: 33,
                    dexterity: 29,
                    accuracy: 34,
                    critical_hit_rate: 24
                }
            }, {
                nid: 29,
                sid: "0590fef1235",
                name: "Allagan Breeches of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    intelligence: 29,
                    accuracy: 24,
                    critical_hit_rate: 34
                }
            }, {
                nid: 30,
                sid: "7591a25458b",
                name: "Allagan Breeches of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 62,
                    magic_defense: 110,
                    vitality: 29,
                    mind: 29,
                    piety: 26,
                    critical_hit_rate: 24
                }
            }
        ],
        feet: [
            {
                nid: 10,
                sid: "dc8b9c83244",
                name: "Sabatons of Light",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 111,
                    magic_defense: 111,
                    vitality: 17,
                    strength: 15,
                    accuracy: 13,
                    determination: 13
                }
            }, {
                nid: 11,
                sid: "240edaf441d",
                name: "Onion Boots",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 77,
                    magic_defense: 43,
                    vitality: 17,
                    strength: 15,
                    critical_hit_rate: 19,
                    determination: 9
                }
            }, {
                nid: 12,
                sid: "c413e73be97",
                name: "Fuma Kyahan",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 60,
                    vitality: 17,
                    strength: 15,
                    accuracy: 19,
                    determination: 9
                }
            }, {
                nid: 13,
                sid: "f4a34286f6b",
                name: "Ballad Boots",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 60,
                    magic_defense: 60,
                    vitality: 17,
                    dexterity: 15,
                    accuracy: 19,
                    skill_speed: 13
                }
            }, {
                nid: 14,
                sid: "a42efc9db42",
                name: "Crimson Shoes",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 43,
                    magic_defense: 77,
                    vitality: 15,
                    intelligence: 15,
                    critical_hit_rate: 19,
                    determination: 9
                }
            }, {
                nid: 15,
                sid: "d7e60fb62dd",
                name: "Royal Shoes",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Labyrinth of the Ancients",
                    type: "raid",
                    encounter: "Turn 0"
                },
                stats: {
                    defense: 43,
                    magic_defense: 77,
                    vitality: 15,
                    mind: 15,
                    piety: 13,
                    critical_hit_rate: 13
                }
            }, {
                nid: 16,
                sid: "ed0192348e",
                name: "Valor Sollerets",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    parry: 15,
                    accuracy: 21
                }
            }, {
                nid: 17,
                sid: "938150ac3ce",
                name: "Melee Boots",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    strength: 18,
                    skill_speed: 21,
                    critical_hit_rate: 15
                }
            }, {
                nid: 18,
                sid: "e68ce2c63aa",
                name: "Warrior's Jackboots",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    parry: 15,
                    accuracy: 21
                }
            }, {
                nid: 19,
                sid: "34cdb4e167f",
                name: "Wyrm's Greaves",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 78,
                    magic_defense: 44,
                    vitality: 20,
                    strength: 18,
                    accuracy: 15,
                    skill_speed: 21
                }
            }, {
                nid: 20,
                sid: "33c8c2962d6",
                name: "Bard's Sandals",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    dexterity: 18,
                    skill_speed: 21,
                    critical_hit_rate: 15
                }
            }, {
                nid: 21,
                sid: "d2cdc69d324",
                name: "Cleric's Boots",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 11,
                    determination: 15
                }
            }, {
                nid: 22,
                sid: "0e95b7ccdb2",
                name: "Sorceror's Crakows",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    accuracy: 15,
                    critical_hit_rate: 21
                }
            }, {
                nid: 23,
                sid: "b5288112059",
                name: "Summoner's Thighboots",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    accuracy: 21,
                    spell_speed: 15
                }
            }, {
                nid: 24,
                sid: "a59fabbc3a3",
                name: "Argute Boots",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 495
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 16,
                    spell_speed: 15
                }
            }, {
                nid: 25,
                sid: "fc57c23acde",
                name: "Heavy Allagan Flanchard",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 113,
                    magic_defense: 113,
                    vitality: 20,
                    strength: 18,
                    parry: 21,
                    determination: 11
                }
            }, {
                nid: 26,
                sid: "8cf96680e5f",
                name: "Allagan Sollerets of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 78,
                    magic_defense: 44,
                    vitality: 20,
                    strength: 18,
                    critical_hit_rate: 15,
                    determination: 15
                }
            }, {
                nid: 27,
                sid: "0f75078f17d",
                name: "Allagan Sollerets of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    strength: 18,
                    skill_speed: 15,
                    determination: 15
                }
            }, {
                nid: 28,
                sid: "b6ad5ae0da7",
                name: "Allagan Sollerets of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 61,
                    magic_defense: 61,
                    vitality: 20,
                    dexterity: 18,
                    critical_hit_rate: 15,
                    determination: 15
                }
            }, {
                nid: 29,
                sid: "3e955cb922d",
                name: "Allagan Boots of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    intelligence: 18,
                    accuracy: 15,
                    critical_hit_rate: 21
                }
            }, {
                nid: 30,
                sid: "9a781a98ab3",
                name: "Allagan Boots of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 44,
                    magic_defense: 78,
                    vitality: 18,
                    mind: 18,
                    piety: 11,
                    spell_speed: 21
                }
            }
        ],
        off_hand: [
            {
                nid: 10,
                sid: "d1d458c7a81",
                name: "Holy Shield",
                rarity: "relic",
                ilvl: 80,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "A Relic Reborn",
                    type: "quest"
                },
                stats: {
                    block_strength: 167,
                    block_rate: 167,
                    vitality: 8,
                    strength: 8,
                    parry: 9,
                    skill_speed: 7
                }
            }, {
                nid: 11,
                sid: "9dc759dc0db",
                name: "The Wall of Crags",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    block_strength: 167,
                    block_rate: 167,
                    vitality: 8,
                    strength: 8,
                    parry: 9,
                    determination: 5
                }
            }, {
                nid: 12,
                sid: "fd5cd559d65",
                name: "Holy Shield Zenith",
                rarity: "relic",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 300
                },
                stats: {
                    block_strength: 181,
                    block_rate: 181,
                    vitality: 10,
                    strength: 9,
                    parry: 11,
                    skill_speed: 7
                }
            }, {
                nid: 13,
                sid: "55e77f202fe",
                name: "Allagan Round Shield",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    block_strength: 181,
                    block_rate: 181,
                    vitality: 10,
                    strength: 9,
                    parry: 11,
                    accuracy: 7
                }
            }, {
                nid: 14,
                sid: "509a746d47c",
                name: "Onion Shield",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 1
                },
                stats: {
                    block_strength: 92,
                    block_rate: 295,
                    vitality: 10,
                    strength: 9,
                    parry: 7,
                    critical_hit_rate: 11
                }
            }, {
                nid: 15,
                sid: "ff64db94fce",
                name: "Ancient Buckler",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm"],
                source: {
                    name: "Rowena's Token",
                    type: "token",
                    amount: 1
                },
                stats: {
                    block_strength: 46,
                    block_rate: 148,
                    vitality: 9,
                    intelligence: 9,
                    accuracy: 11,
                    spell_speed: 7
                }
            }
        ],
        necklace: [
            {
                nid: 10,
                sid: "bc1b549c9f1",
                name: "Ultima Choker of Fending",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 13,
                    parry: 10,
                    determination: 10
                }
            }, {
                nid: 11,
                sid: "4239968c68f",
                name: "Ultima Choker of Striking",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 11,
                    critical_hit_rate: 10,
                    determination: 10
                }
            }, {
                nid: 12,
                sid: "cefac9cf5f0",
                name: "Ultima Choker of Aiming",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 11,
                    accuracy: 10,
                    critical_hit_rate: 14
                }
            }, {
                nid: 13,
                sid: "39221763bd6",
                name: "Ultima Choker of Casting",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 11,
                    accuracy: 14,
                    spell_speed: 10
                }
            }, {
                nid: 14,
                sid: "241b8d91896",
                name: "Ultima Choker of Healing",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 11,
                    spell_speed: 14,
                    determination: 7
                }
            }, {
                nid: 15,
                sid: "cd21ea2a9ef",
                name: "Hero's Necklace of Fending",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 11,
                    skill_speed: 16
                }
            }, {
                nid: 16,
                sid: "3de0f736b04",
                name: "Hero's Necklace of Slaying",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 11,
                    critical_hit_rate: 16
                }
            }, {
                nid: 17,
                sid: "7e59106086e",
                name: "Hero's Necklace of Aiming",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    skill_speed: 11,
                    determination: 11
                }
            }, {
                nid: 18,
                sid: "e21c6995a8c",
                name: "Hero's Necklace of Casting",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    critical_hit_rate: 16,
                    determination: 8
                }
            }, {
                nid: 19,
                sid: "7dbf302238f",
                name: "Hero's Necklace of Healing",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 12,
                    critical_hit_rate: 11
                }
            }, {
                nid: 20,
                sid: "3818ae199bf",
                name: "Allagan Choker of Fending",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 16,
                    accuracy: 11
                }
            }, {
                nid: 21,
                sid: "72d12eebbb9",
                name: "Allagan Choker of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 22,
                sid: "1d4e2d3f761",
                name: "Allagan Choker of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    skill_speed: 16,
                    determination: 8
                }
            }, {
                nid: 23,
                sid: "a684e711fa1",
                name: "Allagan Choker of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    skill_speed: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 24,
                sid: "4087c1a3461",
                name: "Allagan Choker of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    spell_speed: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 25,
                sid: "42847461784",
                name: "Allagan Choker of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 8,
                    determination: 11
                }
            }
        ],
        earrings: [
            {
                nid: 10,
                sid: "b9fc1184a74",
                name: "Hero's Earrings of Fending",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 11,
                    skill_speed: 16
                }
            }, {
                nid: 11,
                sid: "11742a57308",
                name: "Hero's Earrings of Slaying",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 16,
                    skill_speed: 11
                }
            }, {
                nid: 12,
                sid: "ab67a23a152",
                name: "Hero's Earrings of Aiming",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    accuracy: 11,
                    critical_hit_rate: 16
                }
            }, {
                nid: 13,
                sid: "2b7774633cf",
                name: "Hero's Earrings of Casting",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    spell_speed: 16,
                    determination: 8
                }
            }, {
                nid: 14,
                sid: "eafb648e3dd",
                name: "Hero's Earrings of Healing",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 8,
                    critical_hit_rate: 16
                }
            }, {
                nid: 15,
                sid: "34a19131262",
                name: "Allagan Earrings of Fending",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 16,
                    accuracy: 11
                }
            }, {
                nid: 16,
                sid: "7d5f2e6fa5b",
                name: "Allagan Earrings of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 16,
                    determination: 8
                }
            }, {
                nid: 17,
                sid: "45a7755e66a",
                name: "Allagan Earrings of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    skill_speed: 11,
                    critical_hit_rate: 16
                }
            }, {
                nid: 18,
                sid: "e79e7ae8896",
                name: "Allagan Earrings of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    skill_speed: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 19,
                sid: "171a1ef2bd3",
                name: "Allagan Earrings of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    spell_speed: 11,
                    critical_hit_rate: 16
                }
            }, {
                nid: 20,
                sid: "50c7e0679e5",
                name: "Allagan Earrings of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 12,
                    determination: 8
                }
            }, {
                nid: 21,
                sid: "aa1b7e3b34e",
                name: "Tremor Earrings of Fending",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    accuracy: 16,
                    determination: 8
                }
            }, {
                nid: 22,
                sid: "eeedb3c55c1",
                name: "Tremor Earrings of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    critical_hit_rate: 11,
                    determination: 11
                }
            }, {
                nid: 23,
                sid: "b147b7e66b4",
                name: "Tremor Earrings of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    accuracy: 16,
                    determination: 8
                }
            }, {
                nid: 24,
                sid: "9c4bf0b3b11",
                name: "Tremor Earrings of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    accuracy: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 25,
                sid: "2cedb20a790",
                name: "Tremor Earrings of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "The Navel",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 8,
                    spell_speed: 16
                }
            }
        ],
        bracelets: [
            {
                nid: 10,
                sid: "04fa4d1bf45",
                name: "Hero's Bracelet of Fending",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 11,
                sid: "fcfb07d5c57",
                name: "Hero's Bracelet of Slaying",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 11,
                    determination: 11
                }
            }, {
                nid: 12,
                sid: "9d001d9f6eb",
                name: "Hero's Bracelet of Aiming",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    accuracy: 16,
                    skill_speed: 11
                }
            }, {
                nid: 13,
                sid: "a833634f134",
                name: "Hero's Bracelet of Casting",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    critical_hit_rate: 16,
                    determination: 8
                }
            }, {
                nid: 14,
                sid: "823265d556e",
                name: "Hero's Bracelet of Healing",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 12,
                    critical_hit_rate: 11
                }
            }, {
                nid: 15,
                sid: "f305b7bffbf",
                name: "Allagan Bracelets of Fending",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 11,
                    accuracy: 16
                }
            }, {
                nid: 16,
                sid: "59b82e63336",
                name: "Allagan Bracelets of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    critical_hit_rate: 11,
                    determination: 11
                }
            }, {
                nid: 17,
                sid: "9f0400609b1",
                name: "Allagan Bracelets of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    skill_speed: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 18,
                sid: "c3961385ada",
                name: "Allagan Bracelets of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    skill_speed: 16,
                    determination: 8
                }
            }, {
                nid: 19,
                sid: "128e242807d",
                name: "Allagan Bracelets of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    spell_speed: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 20,
                sid: "d162e6dfcde",
                name: "Allagan Bracelets of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 8,
                    spell_speed: 12
                }
            }, {
                nid: 21,
                sid: "fe82c991922",
                name: "Inferno Bangle of Fending",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "The Bowl of Embers",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 11,
                    skill_speed: 16
                }
            }, {
                nid: 22,
                sid: "9a9e91bb2ab",
                name: "Inferno Bangle of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "The Bowl of Embers",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 23,
                sid: "8097e23cd1c",
                name: "Inferno Bangle of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "The Bowl of Embers",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    critical_hit_rate: 11,
                    determination: 11
                }
            }, {
                nid: 24,
                sid: "13f2ad2e23b",
                name: "Inferno Bangle of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "The Bowl of Embers",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    accuracy: 11,
                    spell_speed: 16
                }
            }, {
                nid: 25,
                sid: "0e20c161a2b",
                name: "Inferno Bangle of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "The Bowl of Embers",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 8,
                    determination: 11
                }
            }
        ],
        left_ring: [
            {
                nid: 10,
                sid: "46b2d35384d",
                name: "Ultima Band of Fending",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 13,
                    parry: 14,
                    determination: 7
                }
            }, {
                nid: 11,
                sid: "34ddb977140",
                name: "Ultima Band of Striking",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 11,
                    skill_speed: 14,
                    critical_hit_rate: 10
                }
            }, {
                nid: 12,
                sid: "d60e769bef7",
                name: "Ultima Band of Aiming",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 11,
                    accuracy: 10,
                    determination: 10
                }
            }, {
                nid: 13,
                sid: "14ed8e8bdd1",
                name: "Ultima Band of Casting",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 11,
                    critical_hit_rate: 10,
                    determination: 10
                }
            }, {
                nid: 14,
                sid: "1fb13c237cb",
                name: "Ultima Band of Healing",
                rarity: "rare",
                ilvl: 80,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Ultima Weapon",
                    type: "trial",
                    difficulty: "Hard"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 11,
                    piety: 7,
                    spell_speed: 14
                }
            }, {
                nid: 15,
                sid: "288109a2dfa",
                name: "Hero's Ring of Fending",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 11,
                    accuracy: 16
                }
            }, {
                nid: 16,
                sid: "49d9c19d8e4",
                name: "Hero's Ring of Slaying",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    skill_speed: 11,
                    determination: 11
                }
            }, {
                nid: 17,
                sid: "0a8b7803434",
                name: "Hero's Ring of Aiming",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    critical_hit_rate: 16,
                    determination: 8
                }
            }, {
                nid: 18,
                sid: "7ed29f4a461",
                name: "Hero's Ring of Casting",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    spell_speed: 11,
                    critical_hit_rate: 16
                }
            }, {
                nid: 19,
                sid: "23a4a2cfdad",
                name: "Hero's Ring of Healing",
                rarity: "scarce",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Allagan Tomes of Mythology",
                    type: "token",
                    amount: 375
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 8,
                    critical_hit_rate: 16
                }
            }, {
                nid: 20,
                sid: "cf9c62bcc62",
                name: "Allagan Ring of Fending",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 2"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    parry: 16,
                    skill_speed: 11
                }
            }, {
                nid: 21,
                sid: "8058eb7db58",
                name: "Allagan Ring of Maiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 11,
                    determination: 11
                }
            }, {
                nid: 22,
                sid: "1ceccc85e65",
                name: "Allagan Ring of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["mnk"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 16,
                    determination: 8
                }
            }, {
                nid: 23,
                sid: "9675511d98f",
                name: "Allagan Ring of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 5"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    accuracy: 16,
                    skill_speed: 11
                }
            }, {
                nid: 24,
                sid: "824af0a6dc0",
                name: "Allagan Ring of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 1"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    accuracy: 11,
                    spell_speed: 16
                }
            }, {
                nid: 25,
                sid: "2c3b9f86c42",
                name: "Allagan Ring of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "Binding Coil of Bahamut",
                    type: "raid",
                    encounter: "Turn 4"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    piety: 12,
                    determination: 8
                }
            }, {
                nid: 26,
                sid: "d140aa5e998",
                name: "Vortex Ring of Fending",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["pld", "war"],
                source: {
                    name: "The Howling Eye",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    vitality: 15,
                    critical_hit_rate: 11,
                    determination: 11
                }
            }, {
                nid: 27,
                sid: "7bee16dab39",
                name: "Vortex Ring of Striking",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["drg", "mnk"],
                source: {
                    name: "The Howling Eye",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    strength: 13,
                    accuracy: 11,
                    critical_hit_rate: 16
                }
            }, {
                nid: 28,
                sid: "80271829466",
                name: "Vortex Ring of Aiming",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["brd"],
                source: {
                    name: "The Howling Eye",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    dexterity: 13,
                    skill_speed: 16,
                    critical_hit_rate: 11
                }
            }, {
                nid: 29,
                sid: "ae4b8c028c5",
                name: "Vortex Ring of Casting",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["blm", "smn"],
                source: {
                    name: "The Howling Eye",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    intelligence: 13,
                    accuracy: 16,
                    determination: 8
                }
            }, {
                nid: 30,
                sid: "50318b1a7f7",
                name: "Vortex Ring of Healing",
                rarity: "rare",
                ilvl: 90,
                unique: true,
                jobs: ["sch", "whm"],
                source: {
                    name: "The Howling Eye",
                    type: "trial",
                    difficulty: "Extreme"
                },
                stats: {
                    defense: 1,
                    magic_defense: 1,
                    mind: 13,
                    spell_speed: 11,
                    determination: 11
                }
            }
        ],
        right_ring: [],
        soul_crystal: [
            {
                nid: 10,
                sid: "67fd81c209e",
                name: "Soul of the Paladin",
                rarity: "common",
                ilvl: 30,
                jobs: ["pld"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Paladin's Pledge",
                    type: "quest"
                }
            }, {
                nid: 11,
                sid: "a03321484cc",
                name: "Soul of the Monk",
                rarity: "common",
                ilvl: 30,
                jobs: ["mnk"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Brother From Another Mother",
                    type: "quest"
                }
            }, {
                nid: 12,
                sid: "2b81316eeed",
                name: "Soul of the Warrior",
                rarity: "common",
                ilvl: 30,
                jobs: ["war"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Pride And Duty (Will Take You From The Mountain)",
                    type: "quest"
                }
            }, {
                nid: 13,
                sid: "f6720135c8b",
                name: "Soul of the Dragoon",
                rarity: "common",
                ilvl: 30,
                jobs: ["drg"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Eye Of The Dragon",
                    type: "quest"
                }
            }, {
                nid: 14,
                sid: "3e5b5adfe7b",
                name: "Soul of the Bard",
                rarity: "common",
                ilvl: 30,
                jobs: ["brd"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "A Song Of Bards And Bowmen",
                    type: "quest"
                }
            }, {
                nid: 15,
                sid: "9cca5eb0fd2",
                name: "Soul of the White Mage",
                rarity: "common",
                ilvl: 30,
                jobs: ["whm"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Seer Folly",
                    type: "quest"
                }
            }, {
                nid: 16,
                sid: "a4302cc8e2f",
                name: "Soul of the Black Mage",
                rarity: "common",
                ilvl: 30,
                jobs: ["blm"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Taking The Black",
                    type: "quest"
                }
            }, {
                nid: 17,
                sid: "e1570c3d994",
                name: "Soul of the Summoner",
                rarity: "common",
                ilvl: 30,
                jobs: ["smn"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Austerities Of Flame",
                    type: "quest"
                }
            }, {
                nid: 18,
                sid: "eb511e3871f",
                name: "Soul of the Scholar",
                rarity: "common",
                ilvl: 30,
                jobs: ["sch"],
                all_jobs: true,
                unique: true,
                source: {
                    name: "Forgotten But Not Gone",
                    type: "quest"
                }
            }
        ]
    }
};

Constants.items.right_ring = Constants.items.left_ring;
