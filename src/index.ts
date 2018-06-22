import * as app from './app';
import * as dateFormat from 'dateformat';
import { serverConfig }  from './app.config';

// Start
console.log(`Server is listening at '${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}' with a PID of ${process.pid}.`);
app.startServer();

//Stop
process.on('SIGINT', function() {
    var now = dateFormat(Date.now(), 'HH:MM:ss');
    console.log(`\nServer is shutting down at ${now}...`);
    app.stopServer(() => {
        var now = dateFormat(Date.now(), 'HH:MM:ss');
        console.log(`Server shut down at ${now}.`);
        process.exit(0);
    });
});