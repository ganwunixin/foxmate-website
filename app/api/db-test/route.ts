import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

export async function GET() {
  try {
    console.log('Testing database connection...')
    console.log('POSTGRES_URL:', process.env.POSTGRES_URL ? 'SET' : 'NOT SET')
    
    const client = await pool.connect()
    console.log('Database connected successfully')
    
    const result = await client.query('SELECT NOW()')
    console.log('Query result:', result.rows[0])
    
    client.release()

    return Response.json({
      success: true,
      message: 'Database connection successful',
      timestamp: result.rows[0].now,
      env: {
        POSTGRES_URL: process.env.POSTGRES_URL ? 'SET' : 'NOT SET',
        POSTGRES_USER: process.env.POSTGRES_USER ? 'SET' : 'NOT SET',
        POSTGRES_HOST: process.env.POSTGRES_HOST ? 'SET' : 'NOT SET',
        POSTGRES_DATABASE: process.env.POSTGRES_DATABASE ? 'SET' : 'NOT SET'
      }
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return Response.json({
      success: false,
      error: String(error),
      message: 'Database connection failed',
      env: {
        POSTGRES_URL: process.env.POSTGRES_URL ? 'SET' : 'NOT SET',
        POSTGRES_USER: process.env.POSTGRES_USER ? 'SET' : 'NOT SET',
        POSTGRES_HOST: process.env.POSTGRES_HOST ? 'SET' : 'NOT SET',
        POSTGRES_DATABASE: process.env.POSTGRES_DATABASE ? 'SET' : 'NOT SET'
      }
    }, { status: 500 })
  }
}
