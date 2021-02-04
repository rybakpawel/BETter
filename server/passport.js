const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')

const initialize = (passport, getUserByLogin, getUserById) => {
    const authenticateUser = async (login, password, done) => {
        const user = getUserByLogin(login)
        if (user === undefined) {
            console.log('Niepoprawny login')
            return done(null, false, { message: 'Niepoprawny login'})
        }
        
        try {
            if (await bcrypt.compare(password, user.password)) {
                console.log('Zalogowales sie')
                return done(null, user)
            } else {
                console.log('Niepoprawne hasło')
                return done(null, false, { message: 'Niepoprawne hasło'})
            }
        } catch (err) {
            return done(err)
        }
    }

    passport.use(new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password'
    }, 
        authenticateUser
    ))
    
    passport.serializeUser((user, done) => done(null, user._id))
    
    passport.deserializeUser((id, done) => done(null, getUserById(id)))
} 

module.exports = initialize