import React from "react"

import Card from "./Card"

export default function Sorteio(props) {
  const {min, max} = props

  return (
    <Card title="Sorteio de um Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{Math.floor(Math.random() * (max - min)) + min}</strong>
        </span>
      </div>
    </Card>
  )
}
