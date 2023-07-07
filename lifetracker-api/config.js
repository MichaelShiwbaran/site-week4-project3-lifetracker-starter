require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001
const IS_TESTING = process.env.NODE_ENV === "test"

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  const dbUser = process.env.DATABASE_USER || "postgres"
  const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
  const dbHost = process.env.DATABASE_HOST || "local"
  const dbPort = process.env.DATABASE_PORT || 5432
  const dbProdName = process.env.DATABASE_NAME || "lifetracker_hub"
  const dbName = process.env.NODE_ENV === "test" ? dbTestName : dbProdName
  const dburl = process.env.DATABASE_URL || "postgres://lifetracker_database_2ghj_user:UkpokDDqqDePSKHWydw6U1vTx0shiwU1@dpg-cik90m5ph6eg6kacu890-a/lifetracker_database_2ghj"

  return process.env.DATABASE_URL || {dburl}
}

const BCRYPT_WORK_FACTOR = IS_TESTING ? 1 : 13

console.log("Vaccine Hub Config:".red)
console.log("PORT:".blue, PORT)
console.log("BCRYPT_WORK_FACTOR".blue, BCRYPT_WORK_FACTOR)
console.log("Database:".blue, getDatabaseUri())
console.log("---")

module.exports = {
  PORT,
  IS_TESTING,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
}