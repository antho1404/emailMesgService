const sendgrid = require('@sendgrid/mail')
const fs = require('fs')

const from = 'MESG Foundation <contact@mesg.tech>'
const subject = 'Welcome to MESG'
const text = fs.readFileSync('./email.txt').toString()

module.exports = (email, sendgridAPIKey) => {
  sendgrid.setApiKey(sendgridAPIKey)
  return sendgrid.send({
    to: email,
    from,
    subject,
    text
  })
    .then(([response, _]) => ({
      code: response.statusCode,
      message: response.statusMessage
    }))
}