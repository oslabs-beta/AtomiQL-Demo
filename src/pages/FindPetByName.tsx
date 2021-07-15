import React from 'react'
import gql from 'graphql-tag'
// import { gql } from 'graphql-request'
import { useQuery } from 'atomiql'
import PetsList from '../components/PetsList'
import Loader from '../components/Loader'
import { Component3 } from '../components/Component3'


// export const GET_PET = gql`
//   query GetPetQuery {
//     pet(input: {name: "Tom"}) {
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


export default function FindPetByName () {
  const [ data, loading, error ] = useQuery(GET_PET, {
    variables: {
      input: {
        name: 'Tom'
      }
    }
  })
  console.log(`data in FindPetByName: `, data);
  console.log('error', error)

  if (loading) return <Loader />

  if (error) return <span>Error</span>

  return (
    <div className="page pets-page">
      <h1>Find Pet by Name</h1>
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
