const data = require('./objeto.json')

const encontraInfo = () => {
    const info = data.onibus.filter((onibu) => onibu.id === 'A102')
    return info
}

console.log(encontraInfo(data))