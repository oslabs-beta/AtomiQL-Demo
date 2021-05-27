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

const GET_PETS = gql`
  query GetPets {
    pets {
      ...PetsFields
    }
  }
  ${PETS_FIELDS}
`

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
    </div>
  )
}
