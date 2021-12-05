const _ = require('lodash')

const alunos =[{
    nome: 'João',
    nota: 7.6
}, {
    nome: 'Maria',
    nota: 8.6
}, {
    nome: 'Pedro',
    nota: 8.1
}]

const aluno4 = {
    nome: 'Paulo',
    nota: 9.2
}
const chunk = _.chunk(alunos, 2)

const compact = _.compact(['', 'ola', false, true, 0, 1, 3])

const concat = _.concat(alunos, aluno4)

const difference = _.difference([1,2,3,4], [2,3,4,5])

const differenceBy = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)

const media = _.sumBy(alunos, 'nota') /alunos.length

console.log(media)