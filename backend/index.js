import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';


dotenv.config({
    path: './.env'
});

const server = http.createServer(app);
server.listen(process.env.PORT, 'localhost', (err) => {
    if(err) return console.log(err);

    console.info(`server work on port: ${process.env.PORT}`);
});