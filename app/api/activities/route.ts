import { Pool } from 'pg'
import crypto from 'crypto'

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

interface ActivityData {
  user_id?: string
  timestamp: string
  app_name: string
  window_title: string
  keystrokes_per_min: number
  mouse_px_per_min: number
  focus_score: number
  tags: string
}

function generateUserId(): string {
  return crypto.randomBytes(16).toString('hex').substring(0, 32)
}

function sanitizeWindowTitle(title: string): string {
  const sensitivePatterns = [
    /\b\d{4,}\b/g,
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi,
    /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g,
    /\b\d{4}[-/]\d{1,2}[-/]\d{1,2}\b/g
  ]
  
  let sanitized = title
  sensitivePatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '[REDACTED]')
  })
  
  return sanitized.substring(0, 200)
}

export async function POST(request: Request) {
  try {
    const data: ActivityData[] = await request.json()

    if (!Array.isArray(data) || data.length === 0) {
      return Response.json(
        { error: 'Invalid data format' },
        { status: 400 }
      )
    }

    const client = await pool.connect()
    
    for (const item of data) {
      const userId = item.user_id || generateUserId()
      const sanitizedTitle = sanitizeWindowTitle(item.window_title)

      await client.query(
        `INSERT INTO user_activities 
         (user_id, timestamp, app_name, window_title, keystrokes_per_min, mouse_px_per_min, focus_score, tags)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          userId,
          item.timestamp,
          item.app_name,
          sanitizedTitle,
          item.keystrokes_per_min,
          item.mouse_px_per_min,
          item.focus_score,
          item.tags
        ]
      )
    }

    client.release()

    return Response.json({
      success: true,
      message: `Received ${data.length} records`,
      records_count: data.length
    })
  } catch (error) {
    console.error('API Error:', error)
    return Response.json(
      { error: 'Failed to save data' },
      { status: 500 }
    )
  }
}
