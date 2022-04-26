import React from 'react'

const MostrarComentarios = () => {

    const comentarios = [
        { nombre: 'Juan', texto: 'Muy interesante...' },   
        { nombre: 'Pedro',texto: 'opino igual...'     },  
        { nombre: 'Diego',texto: 'Me paso lo mismo...'},   
    ]
    
    const listaCards = comentarios.map( (comentario, index) => {
        return (
            <div className="card my-2" key={index}>
                <div className="card-body bg-light">
                    <div className="card-title lead">{comentario.nombre}</div>
                    <p className="card-text">{comentario.texto}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            {listaCards}
        </div>
    )
}

export default MostrarComentarios
