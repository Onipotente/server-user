const db = require('../models')
const Car = db.cars

exports.findAll = async () => {
    try{
        const cars = await Car.findAll({
            attributes: ['id', 'modelo', 'marca', 'chassi', 'placa']
        })
        return cars
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os carros. ERROR: ' + e.message)
    }
}

exports.findById = async (id) => {
    try{
        const car = await Car.findByPk(id, {
            attributes: ['id', 'modelo', 'marca', 'chassi', 'placa']
        })
        return car 
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar o carro. ERROR: ' + e.message)
    }
}

exports.create = async (modelo, marca, chassi, placa) => {
    try{

        const car = await Car.create({modelo, marca, chassi, placa})
        return car
        } catch(e){
            throw Error('Erro ao inserir o carro: ' + modelo + ' Error: ' + e.message)        
    }
}

exports.update = async (id, modelo, marca, chassi, placa) => {
    try {
        await User.update(
            {modelo, marca, chassi, placa},
            {where:{id}})
    } catch(e){
        throw Error('Erro ao alterar o carro: ' + modelo + ' Error: ' + e.message)
    }
}

exports.delete = async (id) => {
    try {
        await Car.destroy({
            where: {id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o carro. ERROR: ' + e.message)
    }
}