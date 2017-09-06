import Sequelize from 'sequelize'
import { DB as DBConfig, System as SystemConfig } from '../config'

export default new Sequelize(DBConfig.database, DBConfig.username, DBConfig.password, {
  host: DBConfig.host,
  dialect: SystemConfig.db_type,
  dialectOptions: { 
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_520_ci',
    supportBigNumbers: true,
    bigNumberStrings: true
  },
  define: {
      underscored: true,
      timestamps: true,
      paranoid: true,
      createdAt:'create_date',
      updatedAt:'update_date',
      deletedAt:'delete_date'
  },
  pool: {
    max: 50,
    min: 0,
    idle: 10000
  }
});