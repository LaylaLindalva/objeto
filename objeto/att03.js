const data = require('./objeto.json')
// console.log(data)

const retornaParada = () => {
    return data.linhas.filter((datas) => datas.id === 1).map((parada) => parada.paradas)
}

console.log(retornaParada(data))

