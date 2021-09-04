import React from "react"
import { useParams } from "react-router"

const Home = props =>{
    const { id } = useParams()

    return(
        <aside className='Param'>
            <h1>Parametros</h1>
            <p>Valor: {id}</p>
        </aside>
    )
}

export default Home