import React from 'react'
// import gql from 'graphql-tag'
import { gql } from 'graphql-request'
import { useQuery } from 'atomiql'
import PetsList from '../components/PetsList'
import Loader from '../components/Loader'
import { Component3 } from '../components/Component3'


export const GET_PET = gql`
  query {
    pet(input: {id: "2l3krjhwelkfhaiewua"}) {
      name
      id
      createdAt
      img
    }
  }
`


export default function FindPets () {
  const [ data, loading, error ] = useQuery(GET_PET)
  console.log(`data in FindPets: `, data);

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
      <Component3 />
    </div>
  )
}
