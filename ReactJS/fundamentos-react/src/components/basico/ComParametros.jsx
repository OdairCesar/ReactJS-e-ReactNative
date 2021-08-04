import React from "react"

export default function ComParametro(params){
    return (
        <>
            <h1>{ params.titulo }</h1>
            <h2>{ params.subtitulo }</h2>
            <p>{ params.numero }</p>
        </>
    )
}