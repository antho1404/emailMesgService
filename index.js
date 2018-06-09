const MESG = require('mesg-js').service()
const sendgrid = require('@sendgrid/mail')
const fs = require('fs')

const from = 'MESG Foundation <contact@mesg.tech>'
const subject = 'Welcome to MESG'
const text = fs.readFileSync('./email.txt').toString()

const send = async ({ email, sendgridAPIKey }, { success, error }) => {
  sendgrid.setApiKey(sendgridAPIKey)
  try {
    const [response, _] = await sendgrid.send({
      to: email,
      from,
      subject,
      text
    })
    success({
      code: response.statusCode,
      message: response.statusMessage
    })
  } catch(e) {
    error({ message: e.toString() })
  }
}

MESG.listenTask({ send })
