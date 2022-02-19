export const config = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT,10) || 3001,
  dbUser:  process.env.DB_USER,
  dbPassword:  process.env.DB_PASSWORD,
  dbHost:  process.env.DB_HOST,
  dbName:  process.env.DB_NAME,
  dbPort:  parseInt(process.env.DB_PORT,10),
  dbSchema: process.env.DB_SCHEMA || 'sch_comm',
  dbMaxConnections: parseInt(process.env.DB_MAX_CONNECTIONS,10) || 20,
  dbIdleTimeoutMillis: parseInt(process.env.DB_IDLE_TIMEOUT_MILLIS,10) || 30000,
  dbConnectionTimeoutMillis: parseInt(process.env.DB_CONNECTION_TIMEOUT_MILLIS,10) || 2000
} as Config

