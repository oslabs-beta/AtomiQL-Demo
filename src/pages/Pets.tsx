import React, {useState} from 'react'
import { gql } from 'graphql-request'
import { useQuery } from 'atomiql'
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

// !CHECK! This is how we query the vaccinated property from atomiql
// [To Do] Add new function in atomiql (similar to useQuery?) to read gql query input against local state (see if this can be done without an initialstate and simply against the resolvers) and return resolved value
const GET_PETS_LOCAL = gql`
  query getPetsLocal {
    pets {
      vaccinated @client
    }
  }
}`

const GET_PETS = gql`
  query GetPets {
    pets {
      ...PetsFields
    }
  }
  ${PETS_FIELDS}
`;

const OtherComponent = () => {
  const [ data, loading, error ] = useQuery(GET_PETS)
  // const result = useQueryLocal(GET_PETS_LOCAL)
  if (!data?.pets) return <div>No Pets yet</div>
  return (
    <div>
      {data?.pets.map((pet: any, i: number) => <div key={i}>{pet.name}</div>)}
    </div>
  )
}

export default function Pets () {
  const [modal, setModal] = useState(false)
  const [ data, loading, error ] = useQuery(GET_PETS)

  const onSubmit = (input: Pet) => {
    setModal(false)
  }

  if (loading) return <Loader />

  if (error) return <span>Error</span>
  
  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  return (
    <div className="page pets-page">
      <section>
        <div className="row between-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
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
