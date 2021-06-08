import React from "react"
import { useQuery } from "atomiql"
import { GET_PETS } from "../pages/Pets"
import Loader from "./Loader"
import PetsList from "./PetsList"


export const Component3 = () => {
  const [ data, loading, error ] = useQuery(GET_PETS)
  
  if (loading) return <Loader />

  if (error) return <span>Error</span>

  if (!data?.pets) return <div>No Pets yet</div>
  return (
    <div >
      <div className="col-xs-10">
        <h2>Component 3</h2>
      </div>
      <PetsList pets={data?.pets} />
    </div>
  )
}
