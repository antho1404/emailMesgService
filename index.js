const MESG = new (require('@liteflow/service'))()
const sendEmail = require('./sendEmail')

const send = ({ email, subject, messageBody, sendgridAPIKey }, { success, error }) =>
  sendEmail(email, subject, messageBody, sendgridAPIKey)
    .then(success)
    .catch(e => error({ message: e.toString() }))

MESG.listenTask({ send })
