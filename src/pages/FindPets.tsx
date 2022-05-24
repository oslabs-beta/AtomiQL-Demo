import React from 'react'
import { useQuery } from 'atomiql'
import PetsList from '../components/PetsList'
import Loader from '../components/Loader'
import { gql } from 'graphql-request'


export const GET_PET = gql`
query GetPetQuery ($input: PetsInput) {
  pet(input: $input) {
    name
    id
    createdAt
    img
    type
  }
}
`

export default function FindPets () {
  const [ data, loading, error ] = useQuery(GET_PET, {
    variables: {
      input: {
        id: '2l3krjhwelkfhaiewua'
      }
    },
  })
  console.log(`data in FindPets: `, data);

  if (loading) return <Loader />

  if (error) return <span>Error</span>

  return (
    <div className="page pets-page">
      <h1>Find Pet by ID</h1>
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
