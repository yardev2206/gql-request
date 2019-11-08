const fetch = require('node-fetch');

module.exports = (uri, options = {
    query: '',
    variables: null,
    token: null
}) => {
    return new Promise((resolver, reject) => {
        fetch(uri, {
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
        .then(resData => resData.json())
        .then(res => resolver(res))
        .catch(err => reject(err));
    });
};
