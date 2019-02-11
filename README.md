# Email Sending Mesg service

Send an email by MESG and SEND GRID API

```bash
mesg-core service deploy https://github.com/MykolaSauliak/emailMesgService
```

## Tasks

### send

Task key: **send**



#### Inputs

| **key** | **type** | **description** |
| --- | --- | --- |
| **email** | `String` | Email of the receipient of the email |
| **subject** | `String` | Email subject |
| **messageBody** | `String` | Email text |
| **sendgridAPIKey** | `String` | Sendgrid API key [https://app.sendgrid.com/settings/api_keys](https://app.sendgrid.com/settings/api_keys) |


#### Outputs

##### error

Output key: **error**

Return a `message` with the error

| **key** | **type** | **description** |
| --- | --- | --- |
| **message** | `String` |  |

##### success

Output key: **success**

Return the status `code` and `message` when everything functions as expected.

| **key** | **type** | **description** |
| --- | --- | --- |
| **code** | `Number` |  |
| **message** | `String` |  |




