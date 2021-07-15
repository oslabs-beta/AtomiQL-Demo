import React from 'react'
import gql from 'graphql-tag'
// import { gql } from 'graphql-request'
import { useQuery } from 'atomiql'
import PetsList from '../components/PetsList'
import Loader from '../components/Loader'


// export const GET_PET = gql`
//   query GetPetQuery {
//     pet(input: {id: "2l3krjhwelkfhaiewua"}) {
//       name
//       id
//       createdAt
//       img
//       type
//       __typename
//     }
//   }
// `

export const GET_PET = gql`
query GetPetQuery ($input: PetsInput) {
  pet(input: $input) {
    name
    id
    createdAt
    img
  }
}
`

export default function FindPets () {
  const [ data, loading, error ] = useQuery(GET_PET, {
    variables: {
      input: {
        id: '2l3krjhwelkfhaiewua'
      }
    }
  })
  console.log(`data in FindPetbyID: `, data);

  if (loading) return <Loader />

  if (error) return <span>Error</span>

  return (
    <div className="page pets-page">
      <h1>Find Pets</h1>
      <section>
        <div className="row between-xs middle-xs">
          <div className="col-xs-10">
            <h1>Component 1</h1>
          </div>
        </div>
      </section>
      <section>
        { !loading && !error && <PetsList pets={[data?.pet]} /> }
      </section>
      {/* <Component3 /> */}
    </div>
  )
}
