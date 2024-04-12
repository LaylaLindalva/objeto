const data = require('./objeto.json')
// console.log(data)

const retornaHorario = () => {
    return data.linhas.filter((datas) => datas.id === 2).map((horario) => horario.horarios.map((item) => item.saida))
}

console.log(retornaHorario(data))