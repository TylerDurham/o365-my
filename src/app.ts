import * as express from 'express';
import * as session from 'express-session';
import * as path from 'path';
import * as http from 'http';
import { routes } from './app.routes';
import { serverConfig } from './app.config';
import { OIDCStrategy } from 'passport-azure-ad';

//
var shuttingDown = false;
const app = express();
let srv: http.Server;
 
// Initialize routes
app.use('/', routes);  

// MiddleWare
app.use('/static', express.static(path.join(__dirname, 'static'))); 

app.use((req, res, next) => {
    if (shuttingDown == true) {
        return;
    }
    next(); 
});

app.use(session({
    secret: 'asdf2343434-asdfR',
    name: 'o365-my-cookie',
    resave: false,
    saveUninitialized: false,
    //cookie: {secure: true} // For development only
  }));

export function startServer(callback?) {
    // Fire it up!
    srv = app.listen(serverConfig.port, () => {
        if(callback) callback(srv);
    });
}

export function stopServer(callback?) {
    shuttingDown = true;
    srv.close(callback);
}