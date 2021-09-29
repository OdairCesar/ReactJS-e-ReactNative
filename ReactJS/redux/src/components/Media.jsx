import React from "react";
import Card from "./Card";

export default function Media(props) {
  const {min, max} = props
  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(min+max) / 2}</strong>
        </span>
      </div>
    </Card>
  )
}
