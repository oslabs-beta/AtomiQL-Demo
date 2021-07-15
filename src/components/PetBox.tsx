import React from 'react'
import { Pet } from './NewPet'

const PetBox = ({pet}: {pet: Pet}) => (
  <div className="pet">
    <figure>
      <img src={pet.img + `?pet=${pet.id}`} alt=""/>
    </figure>
    <div className="pet-name">{pet.name}</div>
    <div className="pet-name">Created at: {pet.createdAt}</div>
    <div className="pet-type">{pet.type}</div>
  </div>
)

export default PetBox
