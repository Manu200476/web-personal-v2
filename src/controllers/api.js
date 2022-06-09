const sendMail = (req, res) => {
    const { name, subject, service, message } = req.body
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=info@manuelmartin.me&su=${subject}-${name}-${service}&body=${message}`
    res.redirect(url)
}

module.exports = { sendMail }