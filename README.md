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
   
   client("localhost:3000/graphql")
    .then(res => console.log(res))
    .catch(err => console.log(err));
```

Salida

```
  { data:
    { message: "Hola mundo" }
  }
```


pasando variables a la query

``` js

const query = `
  query saludo($message: String!) {
    saludo(message: $message)
  }
`;

const variables = { message: "Hans" };

client('localhost:3000/graphql', { variables })
  .then(res => console.log(res))
  .catch(err => console.log(err));

```


Salida
```
{
  data: {
    message: "Hola, Hans"
  }
}
```

