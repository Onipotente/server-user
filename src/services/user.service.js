const db = require('../models')
const User = db.users

exports.findAll = async () => {
    try{
        const users = await User.findAll({
            attributes: ['id', 'username', 'email']
        })
        return users
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
    }
}

exports.findById = async (id) => {
    try{
        const user = await User.findByPk(id, {
            attributes: ['id', 'username', 'email']
        })
        return user
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar o usuário. ERROR: ' + e.message)
    }
}

exports.create = async (username, email, password) => {
    try{

        const user = await User.create({username: username, email: email, password: password})
        return user
        } catch(e){
            throw Error('Erro ao inserir o usuário: ' + username + ' Error: ' + e.message)        
    }
}

exports.update = async (id, username, email, password) => {
    try {
        await User.update(
            {username: username, email: email, password: password},
            {where:{id: id}})
    } catch(e){
        throw Error('Erro ao alterar o usuário: ' + username + ' Error: ' + e.message)
    }
}

exports.delete = async (id) => {
    try {
        await User.destroy({
            where: {id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o usuário. ERROR: ' + e.message)
    }
}