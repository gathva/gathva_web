import React from 'react'
import DarComentario from './DarComentario'
import MostrarComentarios from './MostrarComentarios'


export const Post = (props) => {

    const imagen = 'https://picsum.photos/600/400'
    const [meGusta, setMeGusta] = React.useState(true)
    const [comentariosActivados, setComentariosActivados] = React.useState(false)
    //const [firebaseUser, setFirebaseUser] = React.useState(null)


    //React.useEffect(()=>{

    //    if(props.firebaseUser){
    //        setFirebaseUser(props.firebaseUser)
    //    }    

    //},[props.firebaseUser])



    return (
        <div className="card text-start col-md-5 my-2 mx-2 ">
            <img src={imagen} classNpm startame="card-img-top" alt="imagen aleateoria" />
            <div className="card-body">
                <h5 className="card-title align-end">Titulo</h5>
                <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta voluptate, ipsum saepe expedita, ab ipsam aspernatur consectetur eum aliquam labore quos distinctio eius similique rerum temporibus unde! Quisquam, nobis atque!
                </p>
                <div className="d-grid gap-3 d-flex justify-content-between">
                    <div className='d-grid gap-3 d-flex'>
                        {
                            meGusta ? (<i className="fa-regular fa-heart">16</i>) : (<i className="fa-solid fa-heart">16</i>)

                        }
                        <i className="fa-solid fa-comment">3</i>

                    </div>

                    <div className='d-grid gap-3 d-flex justify-content-between'>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => setMeGusta(!meGusta)}
                        >
                            Me gusta
                        </button>
                        <button
                            className="btn btn-primary btn-sm"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsePostComent"
                            aria-expanded="false"
                            aria-controls="collapsePostComent"
                            onClick={() => setComentariosActivados(!comentariosActivados)}
                        >
                            Comentarios
                        </button>
                    </div>
                </div>
            </div>



            <div className="collapse" id="collapsePostComent">
                {
                    comentariosActivados && (
                        <div className="card card-body">
                            <DarComentario />
                            <MostrarComentarios />
                        </div>

                    ) 
                }
            </div>
        </div>
    )
}
