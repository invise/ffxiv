App.viewport = React.createClass({
    getDefaultProps: function () {
        return {
            job: '',
            gear: []
        };
    },

    getInitialState: function () {
        return {
            gear: this.retrieveGear(this.props.gear),
            meal: null,
            pane: this.props.job ? 'gear' : 'home',
            race: Constants.races[6],
            slot: ''
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var gear = this.state.gear;
        var nextGear = nextProps.gear;

        if (!nextProps.job) {
            this.setState({
                pane: 'home',
                slot: '',
                gear: []
            });
        } else if (!nextGear.every(function (nid, index) {
            return (gear[index] ? gear[index].nid : 0) === nid;
        }, this)) {
            this.setState({
                pane: 'gear',
                slot: '',
                gear: this.retrieveGear(nextProps.gear)
            });
        }
    },

    componentDidUpdate: function (prevProps, prevState) {
        var gear = this.state.gear;
        var nids;
        var nextHashid;

        if (toString.call(gear) !== '[object Array]' || !gear[13]) {
            this.setLocation();
        } else {
            nids = gear.map(function (item) {
                return item ? item.nid : 0;
            });

            nextHashid = App.hashids.encrypt(nids);

            this.setLocation(gear[13].jobs[0], nextHashid);
        }
    },

    render: function () {
        var job = this.props.job;
        var pane = this.state.pane;
        var slot = this.state.slot;
        var gear = this.state.gear;

        return React.DOM.div({
            className: 'viewport',
            children: [
                React.DOM.header({
                    children: React.DOM.div({
                        className: 'home-link',
                        children: 'home',
                        onClick: this.handleClickOnHome
                    })
                }),
                React.DOM.article({
                    className: 'active-pane-' + pane,
                    children: [
                        React.DOM.div({
                            className: 'pane pane-home',
                            children: React.DOM.div({
                                className: 'jobs',
                                children: this.generateJobs()
                            })
                        }),
                        React.DOM.div({
                            className: 'pane pane-stats',
                            children: [
                                React.DOM.h2({
                                    className: 'pane-title',
                                    children: 'Attributes'
                                }),
                                React.DOM.div({
                                    className: 'stats',
                                    children: job ? this.generateStats(job, gear) : 'Select a job first.'
                                }),
                                React.DOM.div({
                                    className: 'stat-extras',
                                    children: [
                                        React.DOM.div({
                                            className: 'races',
                                            children: this.generateRaces()
                                        }),
                                        React.DOM.div({
                                            className: 'meals',
                                            children: this.generateMeals()
                                        })
                                    ]
                                })
                            ]
                        }),
                        React.DOM.div({
                            className: 'pane pane-gear',
                            children: [
                                React.DOM.h2({
                                    className: 'pane-title',
                                    children: 'Gear'
                                }),
                                React.DOM.div({
                                    className: 'gear',
                                    children: this.generateSlots(gear)
                                })
                            ]
                        }),
                        React.DOM.div({
                            className: 'pane pane-slot',
                            children: [
                                React.DOM.h2({
                                    className: 'pane-title',
                                    children: 'Slot' + (slot ? ' — ' + slot.replace(/_/g, ' ') : '')
                                }),
                                React.DOM.div({
                                    className: 'items',
                                    children: slot ? this.generateItems(slot, gear) : 'Click on a slot to view items.'
                                })
                            ]
                        }),
                        React.DOM.div({
                            className: 'pane pane-filters',
                            children: 'filters'
                        })
                    ]
                })
            ]
        });
    },

    generateItems: function (slot, gear) {
        var job = this.props.job.abbr;
        var slotIndex = Object.keys(Constants.items).indexOf(slot);
        var items;
        var components;

        items = Constants.items[slot].filter(function (item) {
            return item.all_jobs || (item.jobs && item.jobs.indexOf(job) !== -1);
        }, this).sort(function (a, b) {
            if (a.ilvl > b.ilvl) {
                return -1;
            } else if (a.ilvl < b.ilvl) {
                return 1;
            } else if (a.nid > b.nid) {
                return -1;
            } else {
                return 1;
            }
        });

        components = items.map(function (item) {
            var activeItem = gear[slotIndex];

            return React.DOM.div({
                className: 'item item-' + item.rarity + (activeItem && activeItem.sid === item.sid ? ' active' : ''),
                children: [
                    React.DOM.div({
                        className: 'item-image',
                        children: '<image>',
                        style: {
                            backgroundImage: "url('/images/" + item.sid + ".png')"
                        }
                    }),
                    React.DOM.div({
                        className: 'item-name',
                        children: item.name
                    }),
                    React.DOM.div({
                        className: 'item-ilvl',
                        children: [
                            item.hasOwnProperty('unique') ? 'Unique' : null,
                            'Item Level ' + item.ilvl
                        ]
                    }),
                    React.DOM.div({
                        className: 'item-stats item-stats-' + job,
                        children: this.generateItemStats(item.stats)
                    })
                ],
                onClick: this.handleClickOnItem.bind(this, item, slot)
            });
        }, this);

        components.unshift(React.DOM.div({
            className: 'item',
            children: 'None',
            onClick: this.handleClickOnItem.bind(this, null, slot)
        }));

        return components;
    },

    generateItemStats: function (stats) {
        var components = [];
        var majorStats;

        if (stats) {
            majorStats = [
                'physical_damage', 'magic_damage', 'auto_attack', 'delay',
                'block_strength', 'block_rate', 'defense', 'magic_defense'
            ];

            for (stat in stats) {
                var isMajor = majorStats.indexOf(stat) !== -1;

                components.push(
                    React.DOM.dl({
                        className: 'item-stat' + (isMajor ? ' major item-stat-' + stat.replace(/_/g, '-') : ''),
                        children: [
                            React.DOM.dt({
                                className: 'item-stat-label',
                                children: stat.replace(/_/g, ' ')
                            }), React.DOM.dd({
                                className: 'item-stat-value',
                                children: stats[stat]
                            })
                        ]
                    })
                );
            }
        }

        return components;
    },

    generateJobs: function () {
        var jobs = Constants.jobs;
        var components;

        components = jobs.map(function (job) {
            return React.DOM.div({
                className: 'job job-' + job.abbr,
                children: React.DOM.div({
                    className: 'job-inner',
                    children: [
                        React.DOM.div({
                            className: 'job-name',
                            children: job.abbr
                        }),
                        React.DOM.div({
                            className: 'job-icon job-icon-' + job.abbr,
                            children: React.DOM.span()
                        })
                    ]
                }),
                onClick: this.handleClickOnButton.bind(this, job)
            });
        }, this);

        return components;
    },

    generateMeals: function () {
        var meals = Constants.meals;
        var activeMeal = this.state.meal;
        var components;

        components = meals.map(function (meal) {
            return React.DOM.dl({
                className: 'meal' + (activeMeal && activeMeal.name === meal.name ? ' active' : ''),
                children: this.generateMealStats(meal),
                onClick: this.handleClickOnMeal.bind(this, meal)
            });
        }, this);

        return components;
    },

    generateMealStats: function (meal) {
        var stats = Constants.stats;
        var bonuses = meal.bonuses;
        var components = [];

        components.push(React.DOM.dt({
            className: 'meal-label',
            children: meal.name
        }));

        for (bonus in bonuses) {
            components.push(React.DOM.dd({
                className: 'meal-value',
                children: [
                    (bonuses[bonus].percentage + '% '),
                    stats[bonus].abbr
                ]
            }));
        }

        return components;
    },

    generateRaces: function () {
        var races = Constants.races;
        var activeRace = this.state.race;
        var components;

        components = races.map(function (race) {
            return React.DOM.div({
                className: [
                    'race race-',
                    race.name.replace(/\s/g, '-').toLowerCase(),
                    (race.name === activeRace.name ? ' active' : '')
                ].join(''),
                children: race.name,
                onClick: this.handleClickOnRace.bind(this, race)
            });
        }, this);

        return components;
    },

    generateSlots: function (gear) {
        var slots = Object.keys(Constants.items);
        var activeSlot = this.state.slot;
        var components;

        components = slots.map(function (slot, index) {
            var item = gear[index];

            return React.DOM.div({
                className: [
                    'slot slot-',
                    slot.replace(/_/g, '-'),
                    (item ? ' slot-filled slot-' + item.rarity : ''),
                    (activeSlot && activeSlot === slot ? ' active' : '')
                ].join(''),
                children: [
                    React.DOM.span({
                        className: 'slot-item-image',
                        children: '<image>',
                        style: {
                            backgroundImage: item ? "url('/images/" + item.sid + ".png')" : "none"
                        }
                    }),
                    React.DOM.span({
                        className: 'slot-name',
                        children: slot.replace(/_/g, ' ')
                    }),
                    React.DOM.span({
                        className: 'slot-item-name',
                        children: (item ? item.name : null)
                    }),
                    React.DOM.span({
                        className: 'slot-item-stats',
                        children: (item && item.stats ? this.generateStatTags(Object.keys(item.stats)) : null)
                    }),
                    React.DOM.span({
                        className: 'slot-item-ilvl',
                        children: (item ? 'ilvl ' + item.ilvl : null)
                    })
                ],
                onClick: this.handleClickOnSlot.bind(this, slot)
            });
        }, this);

        return components;
    },

    generateStats: function (job, gear) {
        var race = this.state.race;
        var meal = this.state.meal;
        var statMap = Constants.stats;
        var stats = job.stats;
        var bonuses = job.bonuses;
        var mealBonuses = meal ? meal.bonuses : null;
        var total = {};
        var components;

        components = [React.DOM.dl({
            className: 'stat stat-header',
            children: [
                React.DOM.dt({
                    className: 'stat-label',
                    children: 'attribute'
                }),
                React.DOM.dd({
                    className: 'stat-value stat-value-from-character',
                    children: 'base'
                }),
                React.DOM.dd({
                    className: 'stat-value stat-value-from-gear',
                    children: 'gear'
                }),
                React.DOM.dd({
                    className: 'stat-value stat-value-from-meal',
                    children: 'meal'
                }),
                React.DOM.dd({
                    className: 'stat-value stat-value-from-all',
                    children: 'total'
                })
            ]
        })];

        stats.forEach(function (stat) {
            total[stat] = 0;
        }, this);

        gear.forEach(function (item) {
            var itemStats;

            if (item) {
                itemStats = item.stats;

                for (stat in itemStats) {
                    if (total.hasOwnProperty(stat)) {
                        total[stat] += itemStats[stat];
                    }
                }
            }
        }, this);

        for (stat in total) {
            var baseStat = statMap[stat];
            var mealStat = mealBonuses ? mealBonuses[stat] : null;
            var characterValue;
            var gearValue;

            if (total.hasOwnProperty(stat)) {
                characterValue = baseStat ? baseStat.base + (bonuses[stat] || 0) + (race.bonuses[stat] || 0) : 0;
                gearValue = total[stat];
                mealValue = Math.round((characterValue + gearValue) * (mealStat ? mealStat.percentage : 0) * 0.01);

                if (mealStat && mealValue > mealStat.maximum) {
                    mealValue = mealStat.maximum;
                }

                components.push(React.DOM.dl({
                    className: 'stat',
                    children: [
                        React.DOM.dt({
                            className: 'stat-label',
                            children: stat.replace(/_/g, ' ')
                        }),
                        React.DOM.dd({
                            className: 'stat-value stat-value-from-character',
                            children: characterValue
                        }),
                        React.DOM.dd({
                            className: 'stat-value stat-value-from-gear',
                            children: gearValue
                        }),
                        React.DOM.dd({
                            className: 'stat-value stat-value-from-meal',
                            children: mealValue
                        }),
                        React.DOM.dd({
                            className: 'stat-value stat-value-from-all',
                            children: characterValue + gearValue + mealValue
                        })
                    ]
                }));
            }
        }

        return components;
    },

    generateStatTags: function (stats) {
        var statMap = Constants.stats;
        var tags;

        tags = stats.map(function (key) {
            var stat = statMap[key];

            return stat && stat.type === 'secondary' ? stat.abbr : null;
        }, this);

        return tags;
    },

    handleClickOnButton: function (job, event) {
        var soul;

        soul = Constants.items.soul_crystal.filter(function (item) {
            return item.jobs.indexOf(job.abbr) !== -1;
        }, this).shift();

        this.setState({
            pane: 'gear',
            slot: '',
            gear: [null, null, null, null, null, null, null, null, null, null, null, null, null, soul]
        });
    },

    handleClickOnHome: function (event) {
        this.setLocation();
    },

    handleClickOnItem: function (item, slot, event) {
        var nextGear;
        var index;

        if (slot === 'soul_crystal') {
            nextGear = [null, null, null, null, null, null, null, null, null, null, null, null, null, item];
        } else {
            nextGear = [].concat(this.state.gear);
            index = Object.keys(Constants.items).indexOf(slot);

            nextGear[index] = item;
        }

        this.setState({
            pane: 'gear',
            slot: '',
            gear: nextGear
        });
    },

    handleClickOnMeal: function (meal, event) {
        var prevMeal = this.state.meal;

        if (prevMeal && prevMeal.name === meal.name) {
            meal = null;
        }

        this.setState({
            meal: meal
        });
    },

    handleClickOnRace: function (race, event) {
        this.setState({
            race: race
        });
    },

    handleClickOnSlot: function (slot, event) {
        this.setState({
            pane: 'slot',
            slot: slot
        });
    },

    retrieveGear: function (nids) {
        return nids.map(function (nid, index) {
            var slot = Object.keys(Constants.items)[index];
            var items = Constants.items[slot];

            if (nid === 0) {
                return null;
            } else if (nid !== 0) {
                return items.filter(function (item) {
                    return item.nid === nid;
                }, this).shift();
            }
        }, this);
    },

    setLocation: function (job, gear) {
        nextHash = '#!/';

        if (job) {
            nextHash += (job + '/');
        }
        if (gear) {
            nextHash += gear;
        }

        location.hash = nextHash;
    }
});
