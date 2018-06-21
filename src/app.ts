import * as express from 'express';
import * as path from 'path';
import * as http from 'http';
import { routes } from './app.routes';
import { config } from './app.config';

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
})

export function startServer(callback?) {
    // Fire it up!
    srv = app.listen(config.port, () => {
        if(callback) callback(srv);
    });
}

export function stopServer(callback?) {
    shuttingDown = true;
    srv.close(callback);
}