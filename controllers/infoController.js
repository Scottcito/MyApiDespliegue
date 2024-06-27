import mysql from 'mysql2/promise'
import db from '../config/database.js';
export default class infoController{
    static async index(req,res){
        let connection;
        try{
            connection=await mysql.createConnection(db)
            const [result]=await connection.execute('SELECT * FROM pruebaAPI')
            console.log(result)
            res.json(result)
        }
        catch(error){
            res.status(500).json({'error :':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
    static async store(req,res){
        let connection;
        try{
            const {nombre,edad,color,nombre2,descripcion,imagenComponente}=req.body
            connection=await mysql.createConnection(db)
            const [resultget]=await connection.execute('INSERT INTO pruebaAPI (nombre,edad,color,nombre2,descripcion,imagenComponente) VALUES(?,?,?,?,?,?)',[nombre,edad,color,nombre2,descripcion,imagenComponente])
            console.log(resultget)
        }
        catch(error){
            res.status(500).json({'error :':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
    static async details(req,res){
        let connection
        try{
            const id=req.params.id
            connection=await mysql.createConnection(db)
            const [resultID]=await connection.execute('SELECT * FROM pruebaAPI WHERE id = ?',[id])
            console.log(resultID)
            res.status(200).json([resultID])
        }
        catch(error){
            res.status(500).json({'error :':error.message})
        }
        finally{
            if(connection){
                await connection.end()
            }
        }
    }
}