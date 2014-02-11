App.viewport = React.createClass({
    getDefaultProps: function () {
        return {
            job: '',
            gear: []
        };
    },

    getInitialState: function () {
        return {
            slot: '',
            gear: this.retrieveGear(this.props.gear)
        };
    },

    componentWillReceiveProps: function (nextProps) {
        var gear = this.state.gear;
        var nextGear = nextProps.gear;

        if (!nextProps.job) {
            this.setState({
                slot: '',
                gear: []
            });
        } else if (!nextGear.every(function (nid, index) {
            return (gear[index] ? gear[index].nid : 0) === nid;
        }, this)) {
            this.setState({
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
        var slot = this.state.slot;
        var gear = this.state.gear;

        return React.DOM.div({
            className: 'viewport',
            children: [
                React.DOM.div({
                    className: 'overlay overlay-home' + (job ? '' : ' active'),
                    children: this.generateButtons()
                }),
                React.DOM.div({
                    className: 'overlay overlay-filters',
                    children: 'filters'
                }),
                React.DOM.div({
                    className: 'overlay overlay-slot' + (slot ? ' active' : ''),
                    children: slot ? this.generateItems(slot) : 'Click on a slot to select items.'
                }),
                React.DOM.div({
                    className: 'page',
                    children: this.generateSlots(gear)
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

        return components;
    },

    generateSlots: function (gear) {
        var slots = Object.keys(Constants.items);
        var components;

        components = slots.map(function (slot, index) {
            var item = gear[index];

            return React.DOM.div({
                className: 'slot slot-' + slot.replace('_', '-'),
                children: ['slot:', slot, (item ? item.name : null)].join(' '),
                onClick: this.handleClickOnSlot.bind(this, slot)
            });
        }, this);

        return components;
    },

    handleClickOnButton: function (job, event) {
        var soul;

        soul = Constants.items.soul_crystal.filter(function (item) {
            return item.jobs.indexOf(job.abbr) !== -1;
        }, this).shift();

        this.setState({
            slot: '',
            gear: [null, null, null, null, null, null, null, null, null, null, null, null, null, soul]
        });
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
            gear: nextGear
        });
    },

    handleClickOnSlot: function (slot, event) {
        this.setState({
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
