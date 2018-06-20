const MESG = require('mesg-js').service()
const sendEmail = require('./sendEmail')

const send = ({ email, sendgridAPIKey }, { success, error }) =>
  sendEmail(email, sendgridAPIKey)
    .then(success)
    .catch(e => error({ message: e.toString() }))

MESG.listenTask({ send })
