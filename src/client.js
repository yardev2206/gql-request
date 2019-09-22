const fetch = require('node-fetch');

module.exports = (uri, options = {
    query: '',
    variables: null,
    token: null
}) => {
    return fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': options.token
        },
        body: JSON.stringify({
            query: options.query,
            variables: options.variables
        })
    })
};
