import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

export async function GET(request: Request) {
  try {
    const client = await pool.connect()
    
    const result = await client.query('SELECT * FROM version_history ORDER BY release_date DESC LIMIT 1')
    
    client.release()

    if (result.rows.length === 0) {
      return Response.json({
        has_update: false,
        message: 'No version available'
      })
    }

    const version = result.rows[0]

    return Response.json({
      has_update: true,
      version: version.version,
      download_url: version.download_url,
      changelog: version.changelog,
      file_size: version.file_size,
      release_date: version.release_date,
      min_version: version.min_version
    })
  } catch (error) {
    console.error('Version API Error:', error)
    return Response.json({
      success: false,
      error: String(error)
    }, { status: 500 })
  }
}
