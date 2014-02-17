App.viewport = React.createClass({
    getDefaultProps: function () {
        return {
            job: '',
            gear: []
        };
    },

    getInitialState: function () {
        return {
            pane: this.props.job ? 'gear' : 'home',
            slot: '',
            gear: this.retrieveGear(this.props.gear)
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
                            children: this.generateButtons()
                        }),
                        React.DOM.div({
                            className: 'pane pane-stats',
                            children: job ? this.generateStats(job, gear) : 'Select a job.'
                        }),
                        React.DOM.div({
                            className: 'pane pane-gear',
                            children: this.generateSlots(gear)
                        }),
                        React.DOM.div({
                            className: 'pane pane-slot',
                            children: slot ? this.generateItems(slot) : 'Click on a slot to select items.'
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

    generateButtons: function () {
        var jobs = Constants.jobs;
        var components;

        components = jobs.map(function (job) {
            return React.DOM.div({
                children: job.abbr,
                onClick: this.handleClickOnButton.bind(this, job)
            });
        }, this);

        return components;
    },

    generateItems: function (slot) {
        var job = this.props.job.abbr;
        var items;
        var components;

        items = Constants.items[slot].filter(function (item) {
            return item.all_jobs || (item.jobs && item.jobs.indexOf(job) !== -1);
        }, this);

        components = items.map(function (item) {
            return React.DOM.div({
                className: 'item',
                children: item.name,
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

    generateSlots: function (gear) {
        var slots = Object.keys(Constants.items);
        var components;

        components = slots.map(function (slot, index) {
            var item = gear[index];

            return React.DOM.div({
                className: 'slot slot-' + slot.replace(/_/g, '-') + (item ? ' slot-filled slot-' + item.rarity : ''),
                children: [
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
                    }),
                    React.DOM.span({
                        className: 'slot-item-image',
                        children: (item ? 'img' : null)
                    })
                ],
                onClick: this.handleClickOnSlot.bind(this, slot)
            });
        }, this);

        return components;
    },

    generateStats: function (job, gear) {
        var statMap = Constants.stats;
        var stats = job.stats;
        var bonuses = job.bonuses;
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
            var characterValue;
            var gearValue;

            if (total.hasOwnProperty(stat)) {
                characterValue = baseStat ? baseStat.base + (bonuses[stat] || 0) : 0;
                gearValue = total[stat];

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
                            className: 'stat-value stat-value-from-all',
                            children: characterValue + gearValue
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
