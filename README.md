# gql-request-node


Consume api de graphql desde node.js

ejemplo

``` js
  
   const { client } = require('gql-request-node');
   
   const query = `
      {
        message
      }
   `;
   
   client("localhost:3000/graqhl")
    .then(res => consoñe.log(res))
    .catch(err => console.log(err));
```

Salida

```
  { data: message: "Hola mundo" }
```
