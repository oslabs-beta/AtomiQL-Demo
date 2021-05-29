import React, {useState} from 'react'
// import gql from 'graphql-tag'
import { gql } from 'graphql-request'
// import { useQuery, useMutation } from '@apollo/react-hooks'
import { useQuery, useMutation } from 'atomiql'
// import { useQuery } from 'atomiql'
import PetsList from '../components/PetsList'
import NewPetModal from '../components/NewPetModal'
import Loader from '../components/Loader'
import { Pet } from '../components/NewPet'

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

const GET_PETS = gql`
  query GetPets {
    pets {
      ...PetsFields
    }
  }
  ${PETS_FIELDS}
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

const OtherComponent = () => {
  const [ data ] = useQuery(GET_PETS)
  if (!data?.pets) return <div>No Pets yet</div>
  return (
    <div >
      <div className="col-xs-10">
        <h2>Component 2</h2>
      </div>
      <PetsList pets={data?.pets} />
    </div>
  )
}


export default function Pets () {
  // const { data, loading, error } = useQuery(GET_PETS)
  const [modal, setModal] = useState(false)
  const [ data, loading, error ] = useQuery(GET_PETS)
  const [addPet] = useMutation(
    ADD_PET,
    (cacheContainer: any, response: any) => {
      const atomiAtomContainer = cacheContainer.readQuery(GET_PETS);
      const { atomData, writeAtom } = atomiAtomContainer;
      const { pets } = atomData.data
      const newPetsArray = [response.data.addPet, ...pets];
      writeAtom({
        data: {
          pets: newPetsArray
        },
        loading: false,
        hasError: false,
      });
      // const { pets } = cacheContainer.readQuery(GET_PETS);
      // cacheContainer.writeCache(GET_PETS, [response.data.addPet, ...pets])
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
    addPet({input})
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

  // if (error || newPet.error) return <span>Error</span>
  if (error) return <span>Error</span>
  
  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  // console.log(`data.pets`, data?.pets)


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
        { !loading && !error && <PetsList pets={data?.pets} /> }
      </section>
      <OtherComponent />
    </div>
  )
}
