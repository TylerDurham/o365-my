# o365-my - HLS Central West Microsoft Graph Explorer

### Dependencies

- **[Node JS](http://nodejs.org)** v6.14.3 or higher.
- **[Express](http://expressjs.com/)** Used to host the web service for the app.
- **[dotenv](https://www.npmjs.com/package/dotenv)** Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
- **[Passport JS](http://www.passportjs.org/)** Simple, unobtrusive authentication for Node.js.

### Configuring the app

Update `.env` with the appropriate keys OR specifiy in your Azure App settings:

```
PORT=8080
HOST=localhost
MICROSOFT_APP_ID=your_bot_app_id_here
MICROSOFT_APP_PASSWORD=your_password_here
TENANT_NAME=your_tenant_name_here.onmicrosoft.com
```