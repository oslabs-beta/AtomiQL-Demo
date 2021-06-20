/* eslint-disable */
import React, { useState } from 'react'
// import gql from 'graphql-tag'
import { gql } from 'graphql-request'
// import { useQuery, useMutation } from '@apollo/react-hooks'
import { useQuery, useMutation } from 'atomiql'
// import { useQuery } from 'atomiql'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'
import { Pet } from '../components/NewPet'
import { Component2 } from '../components/Component2'

const PETS_FIELDS = gql`
  fragment PetsFields on Pet {
    id
    name
    type
    img
    # vaccinated @client
    owner {
      id
      # age @client
    }
  }
`

// export const GET_PETS = gql`
//   query GetPets {
//     pets {
//       ...PetsFields
//     }
//   }
//   ${PETS_FIELDS}
// `
export const GET_PETS = gql`
  query GetPets {
    pets {
      id
      name @client
      # name
      type
      img
      # vaccinated @client
      owner {
        id
        age @client
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

// const examplePet: Pet = {
//   img: 'asdfasdf',
//   id: 'asdfasdf',
//   name: 'Tom',
//   type: 'CAT'
// }



export default function Pets() {
  // const { data, loading, error } = useQuery(GET_PETS)
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
    //   // GET_PETS
    //   // {
    //   //   update(cache, { data: { addPet } }) {
    //   //     const { pets } = cache.readQuery({ query: GET_PETS })
    //   //     cache.writeQuery({
    //   //       query: GET_PETS,
    //   //       data: { pets: [addPet, ...pets] }
    //   //     })
    //   //   }
    //   // }
  )

  const onSubmit = (input: Pet) => {
    addPet({ input })
    // addPet({
    //   variables: { input }
    // })
    // addPet({
    //   variables: { input },
    //   optimisticResponse: {
    //     __typename: "Mutation",
    //     addPet: {
    //       __typename: "Pet",
    //       id: Math.floor(Math.random() * 1000) + '',
    //       name: input.name,
    //       type: input.type,
    //       img: 'https://via.placeholder.com/300',
    //       vaccinated: true,
    //       owner: {
    //         id: '',
    //         age: 35
    //       }
    //     }
    //   }
    // })
    setModal(false)
  }


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
