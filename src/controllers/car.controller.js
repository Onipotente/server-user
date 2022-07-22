const carService = require('../services/car.service')

exports.findAll = async (request, response) => {
    try {
        const cars = await carService.findAll()
        return response.status(200).json({
            status: 200,
            data: cars,
            message: 'Carros listados com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status:400,
            message: e
            })
    }
}

exports.findById = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const car = await carService.findById(id)
        response.status (200).json({
            status: 200,
            data: car,
            message: 'Carro selecionado com sucesso!'
            })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
            })
    }
}

exports.create = async (request, response) => {
    try {
        const {modelo, marca, chassi, placa} = request.body
        const car = await carService.create(modelo, marca, chassi, placa)
        response.status (201).send({
            message: "Carro cadastrado com sucesso!",
            body: {
                car
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: "Erro ao cadastrar o carro. ERROR: " + e.message
        })
    }
}

exports.update = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        const {modelo, marca, chassi, placa} = request.body

        await carService.update(id, modelo, marca, chassi, placa)
        response.status(200).send({
            message: "Carro alterado com suceso!",
            body:{
                modelo, 
                marca, 
                chassi, 
                placa
            }
        })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.delete = async (request, response) => {
    try {
        const id = parseInt(request.params.id)
        await carService.delete(id)
        response.status(200).send({message: "Carro deletado"})
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}