import { useQuery } from "atomiql"
import { GET_PETS } from "../pages/Pets"
import PetsList from "./PetsList"


export const Component3 = () => {
  const [ data ] = useQuery(GET_PETS)
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
