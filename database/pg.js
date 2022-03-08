const { Pool } = require('pg')

const pool = new Pool({
  connectionString: 'postgres://qltdmhzj:fTxQ_sDFrqaSiN6X1GmVMl408ynO-A6h@satao.db.elephantsql.com/qltdmhzj'
})


const rows = async (query, ...params) => {

  const client = await pool.connect()

  try {
    const { rows } = await client.query(query, params)
    return rows
  } catch (error) {
    console.error(error.message)
  }
  finally {
    client.release()
  }
}

module.exports.rows = rows