const client = require('./client');

const query = `
    mutation authorize($metodo: String!) {
        authorize(metodo: $metodo) {
            code
            success
            message
        }
    }
`;

module.exports = (uri, options = {
    query: query,
    variables: { metodo: '' },
    token: null
}) => {
    return client(uri, options)
}