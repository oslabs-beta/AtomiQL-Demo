import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
// import { ApolloLink } from 'apollo-link';
import gql from 'graphql-tag'

/**
 * Create a new apollo client and export as default
 */

const typeDefs = gql`
  extend type User {
    age: Int
  }
  extend type Pet {
    vaccinated: Boolean!
  }
`

const resolvers = {
  User: {
    age() {
      return 35
    }
  },
  Pet: {
    vaccinated() {
      return true
    }
  }
}

// const link = new HttpLink({ uri: 'http://rickandmortyapi.com/graphql' })
const http = new HttpLink({ uri: 'http://localhost:4000' })
const delay = setContext(
  request =>
    new Promise((success: (value: unknown) => void, fail) => {
      setTimeout(() => {
        success('')
      }, 800)
    })
)
const link = ApolloLink.from([
  // delay,
  http
])
const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
  resolvers,
  typeDefs
});

// const query = gql`
//   {
//     characters {
//       results {
//         name
//         id
//       }
//     }
//   }
// `

// client.query({query})
//   .then(result => console.log(result))

export default client
