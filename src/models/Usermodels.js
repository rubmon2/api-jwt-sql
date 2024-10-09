import { Sequelize,DataTypes } from "sequelize"
import {sequelize} from "../database/db.js"

const Users= sequelize.define("User",{
    username:{ type: DataTypes.STRING, allowNull: false,unique:true},
    password:{ type: DataTypes.STRING, allowNull:false}
} ,
    {
        timestamps: true, // Para tener `createdAt` y `updatedAt`
        tableName: 'Users', // Nombre de la tabla en la base de datos
    }
)


export default Users