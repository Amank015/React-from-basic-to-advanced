import React from 'react'
import { useParams } from 'react-router'

const ParaComponent = () => {
    const {id} = useParams();
  return (
    <div>
      Params:{id}
    </div>
  )
}

export default ParaComponent
