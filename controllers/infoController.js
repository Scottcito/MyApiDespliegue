import mysql from 'mysql2/promise';
import db from '../config/database.js';

export default class InfoController {
  static async index(req, res) {
    let connection;
    try {
      connection = await mysql.createConnection(db);
      const [result] = await connection.execute('SELECT * FROM pruebaAPI');
      console.log(result);
      res.json(result);
    } catch (error) {
      console.error('Error al obtener datos:', error);
      res.status(500).json({ 'error': error.message });
    } finally {
      if (connection) {
        await connection.end();
      }
    }
  }

  static async store(req, res) {
    let connection;
    try {
      const { nombre, edad, color, nombre2, descripcion, imagenComponente } = req.body;
      connection = await mysql.createConnection(db);
      const [resultget] = await connection.execute(
        'INSERT INTO pruebaAPI (nombre, edad, color, nombre2, descripcion, imagenComponente) VALUES (?, ?, ?, ?, ?, ?)',
        [nombre, edad, color, nombre2, descripcion, imagenComponente]
      );
      console.log(resultget);
      res.status(201).json({ message: 'Información creada exitosamente', id: resultget.insertId });
    } catch (error) {
      console.error('Error al crear datos:', error);
      res.status(500).json({ 'error': error.message });
    } finally {
      if (connection) {
        await connection.end();
      }
    }
  }

  static async details(req, res) {
    let connection;
    try {
      const id = req.params.id;
      connection = await mysql.createConnection(db);
      const [resultID] = await connection.execute('SELECT * FROM pruebaAPI WHERE id = ?', [id]);
      console.log(resultID);
      if (resultID.length === 0) {
        res.status(404).json({ message: 'Información no encontrada' });
      } else {
        res.json(resultID[0]);
      }
    } catch (error) {
      console.error('Error al obtener detalles:', error);
      res.status(500).json({ 'error': error.message });
    } finally {
      if (connection) {
        await connection.end();
      }
    }
  }
}
