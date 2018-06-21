import * as express from 'express';

const router: express.Router = express.Router();

router.get('/', (req, res) => {
    let data = { msg: 'Hello from PureTS!' }
    res.send(data);
});

router.get('/login', (req, res) => {
    let data = { msg: 'You are at /login' }
    res.send(data);
});

router.get('/token', (req, res) => {
    let data = { msg: 'You are at /token' }
    res.send(data);
});

router.get('/logout', (req, res) => {
    let data = { msg: 'You are at /logout' }
    res.send(data);
});

export { router as routes }