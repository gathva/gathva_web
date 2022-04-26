import React from 'react'

const DarComentario = () => {

    const [comentario, setComentario] = React.useState('')


    return (
        <div>
            <form className="row g-2">
                <div className="col-6 col-md-9">
                    <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Escribe un comentario..."
                            onChange={(e)=> setComentario(e.target.value)} 
                            value={comentario}

                    />
                </div>
                <div className="col-1 justify-content-end">
                    <button type="submit" className="btn btn-primary mb-3">Comentar</button>
                </div>
            </form>
        </div>
    )
}

export default DarComentario
