declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV : string
        PORT? : string
        DB_USER: string
        DB_PASSWORD : string
        DB_HOST : string
        DB_NAME : string
        DB_PORT : string
        DB_SCHEMA : string
        DB_MAX_CONNECTIONS? : string
        DB_IDLE_TIMEOUT_MILLIS? : string
        DB_CONNECTION_TIMEOUT_MILLIS? : string
        DATABASE_URL? : string
      }
    }
  }

export {}