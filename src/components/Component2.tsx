import { useQuery } from "atomiql"
import React from "react"
import { GET_PETS } from "../pages/Pets"
import PetsList from "./PetsList"


export const Component2 = () => {
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
