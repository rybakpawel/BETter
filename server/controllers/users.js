const User = require('../model/User');

const getUsers = async () => {
    try {
        const users = await User.find({}, (err, users) => {
            if (err) console.log(`Nie znaleziono kolekcji 'users'`)
        })
        
        return await users

    } catch {
        console.log('Coś poszło nie tak (users)')
    }
}

module.exports = getUsers