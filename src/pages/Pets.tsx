/* eslint-disable */
import React, { useState } from 'react'
import { useQuery, useMutation } from 'atomiql'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'
import { Pet } from '../components/NewPet'
import { Component2 } from '../components/Component2'
import { gql } from 'graphql-request'

const PETS_FIELDS = gql`
  fragment PetsFields on Pet {
    id
    name
    type
    img
    owner {
      id
    }
  }
`

export const GET_PETS = gql`
  query GetPets {
    pets {
      id
      name
      type
      img
      createdAt
      owner {
        id
      }
    }
  }
`

const ADD_PET = gql`
  mutation AddPet($input: NewPetInput!) {
    addPet(input: $input) {
      ...PetsFields
    }
  }
  ${PETS_FIELDS}
`


export default function Pets() {
  const [modal, setModal] = useState(false)
  const [data, loading, error] = useQuery(GET_PETS)
  const [addPet, newPet] = useMutation(
    ADD_PET,
    (cache: any, { data: { addPet } }: any) => {
      const { data: { pets }, writeAtom } = cache.readQuery(GET_PETS);
      writeAtom({
        pets: [addPet, ...pets]
      })
    },
  )

  const onSubmit = (input: Pet) => {
    addPet({ input })
    setModal(false)
  }

  console.log(`data`, data)

  if (loading) return <Loader />

  if (error || newPet.hasError) return <span>Error</span>

  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  return (
    <div className="page pets-page">
      <h1>Pets</h1>
      <section>
        <div className="row between-xs middle-xs">
          <div className="col-xs-10">
            <h1>Component 1</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        {!loading && !error && <PetsList pets={data?.pets} />}
      </section>
      <Component2 />
    </div>
  )
}
