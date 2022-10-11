const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  console.log('Func 0')
  next()
})

app.get('/', (req, res, next) => {
  console.log('Func 1')
  res.status(200).send("Meu Backend")
})

app.listen(3000, () => {
  console.log('Back-End iniciado com sucesso')
})