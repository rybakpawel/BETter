const checkAuthenticate = (req, res, next) => {
    if (req.isAuthenticate()) {
        return next()
    }

    res.redirect('http://localhost:3000/table')
}

module.exports = checkAuthenticate