# Discord Invitation

```
mesg-core service deploy https://github.com/mesg-foundation/service-discord-invitation.git
```

## Tasks

### Execute

#### inputs
| input | type | description |
| --- | --- | --- |
| email | String | Email of the receipient of the email |
| sendgridAPIKey | String | Sendgrid API key [https://app.sendgrid.com/settings/api_keys](https://app.sendgrid.com/settings/api_keys) |


#### outputs
| ouput | description |
| --- | --- |
| success | Return the status `code` and `message` when everything was fine |
| error | Return a `message` with the error |



