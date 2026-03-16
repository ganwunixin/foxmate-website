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

    await client.query(`
      CREATE TABLE IF NOT EXISTS user_activities (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(32) NOT NULL,
        timestamp TIMESTAMP NOT NULL,
        app_name VARCHAR(100),
        window_title VARCHAR(200),
        keystrokes_per_min INTEGER,
        mouse_px_per_min INTEGER,
        focus_score DECIMAL(5,2),
        tags VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_user_id ON user_activities(user_id)
    `)

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_timestamp ON user_activities(timestamp)
    `)

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_app_name ON user_activities(app_name)
    `)

    await client.query(`
      CREATE TABLE IF NOT EXISTS version_history (
        id SERIAL PRIMARY KEY,
        version VARCHAR(20) NOT NULL UNIQUE,
        download_url VARCHAR(500) NOT NULL,
        changelog TEXT,
        file_size VARCHAR(20),
        release_date DATE,
        min_version VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)

    await client.query(`
      INSERT INTO version_history (version, download_url, changelog, file_size, release_date, min_version)
      VALUES (
        '1.1.0',
        'https://foxmate2.sfo3.cdn.digitaloceanspaces.com/FoxMate_AI_v1.1.0.zip',
        '- 新增一键自动更新功能
- 新增数据同步功能
- 优化小狐狸对话框显示
- 修复已知问题',
        '390 MB',
        '2026-03-16',
        '1.0.0'
      )
      ON CONFLICT (version) DO UPDATE SET
        download_url = EXCLUDED.download_url,
        changelog = EXCLUDED.changelog,
        file_size = EXCLUDED.file_size,
        release_date = EXCLUDED.release_date
    `)

    client.release()

    return Response.json({ 
      success: true, 
      message: 'Database tables created successfully',
      tables: ['user_activities', 'version_history']
    })
  } catch (error) {
    console.error('Migration error:', error)
    return Response.json({ 
      success: false, 
      error: String(error)
    }, { status: 500 })
  }
}
