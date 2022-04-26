import React from 'react'

export const Boton = ({titulo = "boton"}) => {
  

    return (
    <div className='container'>
        <button className="btn btn-primary">{titulo}</button>
    </div>
    
  )
}
