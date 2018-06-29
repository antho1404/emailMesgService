# Discord invitation

Send a Discord invitation for the MESG groupd

```bash
mesg-core service deploy https://github.com/mesg-foundation/service-discord-invitation
```

## Tasks

### send

Task key: **send**



#### Inputs

| **key** | **type** | **description** |
| --- | --- | --- |
| **email** | `String` | Email of the receipient of the email |
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

Return the status `code` and `message` when everything was fine

| **key** | **type** | **description** |
| --- | --- | --- |
| **code** | `Number` |  |
| **message** | `String` |  |




