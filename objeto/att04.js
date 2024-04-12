const data = require('./objeto.json')

const filtraOnibus = () => {
    const resu = data.onibus.filter((onibu) => onibu.status === 'em operação')
    return resu
}

console.log(filtraOnibus(data))