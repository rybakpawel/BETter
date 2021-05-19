const nodemailer = require('nodemailer')

const sendEmail = (email, login) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'betterapp.euro2021@gmail.com',
            pass: 'BETter2021'
        }
    })
    
    const options = {
        from: 'betterapp.euro2021@gmail.com',
        to: email,
        subject: 'BETter',
        text: `Witaj ${login}! Pozostał ostatni krok do tego żeby rejestracja przebiegła pomyślnie. Kliknij w wygenerowany link aby aktywować swoje konto i mieć dostęp do całego serwisu.`
    }
    
    transporter.sendMail(options, (err, info) => {
        if (err) console.log(`Nie udało się wysłać maila. Błąd: ${err}`)
        else console.log(`Wysłano maila do ${email}`)
    })
}

module.exports.sendEmail = sendEmail

