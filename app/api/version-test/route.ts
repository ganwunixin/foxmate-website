import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

export async function GET() {
  try {
    const client = await pool.connect()
    
    const result = await client.query('SELECT * FROM version_history')
    
    client.release()

    return Response.json({
      success: true,
      count: result.rows.length,
      rows: result.rows
    })
  } catch (error) {
    console.error('Error:', error)
    return Response.json({
      success: false,
      error: String(error)
    }, { status: 500 })
  }
}
