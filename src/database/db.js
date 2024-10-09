import dotenv from "dotenv";
dotenv.config()
import { Sequelize } from "sequelize";


const sequelize = new Sequelize(
  process.env.DATABASE_NAME,   // Nombre de la base de datos
  process.env.DATABASE_USER,   // Usuario de la base de datos
  process.env.DATABASE_PASSWORD, // Contraseña del usuario
  {
    host: process.env.DATABASE_HOST,  // Host de la base de datos
    port: process.env.DATABASE_URL,   // Puerto de la base de datos
    dialect: 'mysql',  // Dialecto de la base de datos (MySQL)
  }
);

// Función para verificar la conexión

const conectarDB = async () => {
    try {
        // Crear la base de datos si no existe
        await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME};`);
        console.log(`Base de datos '${process.env.DATABASE_NAME}' creada o existente.`);

        // Autenticar conexión
        await sequelize.authenticate();

        await sequelize.sync();  
        console.log("Conexión exitosa a la base de datos.");
    } catch (error) {
        console.error("Error al conectar a la base de datos: ", error);
    }
};

export { sequelize, conectarDB };