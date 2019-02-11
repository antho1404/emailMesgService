const sendgrid = require('@sendgrid/mail')
const fs = require('fs')

const from = 'iot_info@iot.home>'
// const subject = 'Welcome to MESG'
// const text = fs.readFileSync('./email.txt').toString()

module.exports = (email, subject, messageBody, sendgridAPIKey) => {
  sendgrid.setApiKey(sendgridAPIKey)
  return sendgrid.send({
    to: email,
    from,
    subject,
    text : messageBody
  })
    .then(([response, _]) => ({
      code: response.statusCode,
      message: response.statusMessage
    }))
}