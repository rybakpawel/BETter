const Stadiums = require('../model/Stadiums');

const getStadiums = async () => {
    try {
        const stadiums = await Stadiums.find({}, (err, groups) => {
            if (err) console.log(`Nie znaleziono kolekcji 'stadiums'`)
        })
        return await stadiums
        // return await Promise.all(stadiums)
    } catch {
        console.log('Coś poszło nie tak (stadiums)')
    }
}

module.exports = getStadiums