export default () => ({
    // database: {
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT, 10),
    //   username: process.env.DATABASE_USERNAME,
    //   password: process.env.DATABASE_PASSWORD,
    //   database: process.env.DATABASE_NAME,
    // },
    port: process.env.PORT,
    db_port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_host: process.env.DB_HOST,
    secret_jwt: process.env.SECRET,
    expire_jwt: process.env.EXPIRE_JWT,
});