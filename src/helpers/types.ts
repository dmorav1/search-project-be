export interface Config {
    env: string
    isProd: boolean
    port:  number
    dbUser: string
    dbPassword: string
    dbHost: string
    dbName: string
    dbPort:  number
    dbSchema: string
    dbMaxConnections: number
    dbIdleTimeoutMillis: number
    dbConnectionTimeoutMillis: number
    dbUrl?: string

  }

export interface GetInformationFilters {
    title?: string
}
