//The express package import
import express, { Request, Response } from 'express';
import albumsRouter from './src/albums/albums.route';
import artistRouter from './src/artist/artist.route';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.middleware';
import dotenv from "dotenv";

dotenv.config();

//A new instance of the express class from the package
const app = express();

//The port number
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(helmet());

console.log(process.env.MY_SQL_DB_HOST);

if(process.env.NODE_ENV == 'development')
{
    app.use(logger);
    console.log(process.env.GREETING + " in dev mode");

}

app.get('/', (req: Request, res: Response) =>{
    res.send('<h1>Welcome to the Music API</h1>');
});

app.use('/', [albumsRouter, artistRouter]);

//Checks if the port is open and being used
//Returns an http server
app.listen(port, () => {

    //A display to show the port is working
    console.log(`Example app listening at http://localhost:${port}`)
    
});