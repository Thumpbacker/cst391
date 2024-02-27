import { createPool, Pool } from "mysql";
let pool: Pool | null = null;

const initializingMySqlConnector = () => {
    try{
        pool = createPool({
            connectionLimit:
                parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT != undefined ? process.env.MY_SQL_DB_CONNECTION_LIMIT
                    : ""),
            port:
            parseInt(process.env.MY_SQL_DB_PORT != undefined ? process.env.MY_SQL_DB_PORT
                : ""),
            host: process.env.MY_SQL_DB_HOST,
            user: process.env.MY_SQL_DB_USER,
            password: process.env.MY_SQL_DB_PASSWORD,
            database: process.env.MY_SQL_DB_DATABASE, 
        });

        pool.getConnection((err, connetion) =>{
            if(err){
                throw new Error('Not able to connect to database');
            }
            else{
                connetion.release();
            }
        })
    }catch (error){
        throw new Error('Failed to initialize pool');
    }
}

export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try{
        if(!pool){
            initializingMySqlConnector();
        }

        return new Promise<T>((resolve, reject) =>{
            pool!.query(query, params, (error, results) => {
                if(error) reject(error);
                else resolve(results);
            });
        });
    }catch(error){
        throw new Error('Failed to execute MySQL query');
    }
}