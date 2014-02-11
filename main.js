if (Meteor.isClient) {
    Meteor.startup(function () {
        window.addEventListener('popstate', refresh);
    });
}

function getRoute (tokens) {
    var route;

    route = {
        job: validateToken(tokens[0], 'job') || null,
        gear: validateToken(tokens[1], 'gear')
    };

    return route;
}

function parseHash (hash) {
    var tokens;

    tokens = hash.split('/').filter(function (token) {
        token = token.trim();

        return (token.length && token[0] !== '#');
    });

    return tokens;
}

function refresh () {
    var tokens = parseHash(location.hash);
    var route = getRoute(tokens);

    React.renderComponent(App.viewport(route), document.body);

    document.title = (route.job ? ('FFXIV :: ' + route.job.name) : 'FFXIV');
}

function validateToken (token, key) {
    var validToken = null;
    var i;

    if (key === 'job') {
        validToken = Constants.jobs.filter(function (job) {
            return job.abbr === token;
        }).shift();
    } else if (key === 'gear') {
        validToken = App.hashids.decrypt(token || '');

        for (i = 0; i < 14; i++) {
            validToken[i] = validToken[i] || 0;
        }
    }

    return validToken;
}
