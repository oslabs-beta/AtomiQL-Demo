import React from 'react'

// import NewPet from './NewPet'
import NewPet, { NewPetProps } from './NewPet'

export default function NewPetModal({onSubmit, onCancel}: NewPetProps) {
  return (
    <div className="row center-xs">
      <div className="col-xs-8">
        <NewPet onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  )
}
