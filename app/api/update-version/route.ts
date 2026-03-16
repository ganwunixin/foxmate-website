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

    const result = await client.query(`
      INSERT INTO version_history (version, download_url, changelog, file_size, release_date, created_at)
      VALUES (
        '1.1.0',
        'https://foxmate2.sfo3.cdn.digitaloceanspaces.com/FoxMate_AI_v1.1.0.zip',
        '- 新增一键自动更新功能
- 新增数据同步功能
- 优化小狐狸对话框显示
- 修复已知问题',
        '373 MB',
        '2026-03-16',
        NOW()
      )
      ON CONFLICT (version) DO UPDATE SET
        download_url = EXCLUDED.download_url,
        changelog = EXCLUDED.changelog,
        file_size = EXCLUDED.file_size,
        release_date = EXCLUDED.release_date,
        created_at = NOW()
      RETURNING *
    `)

    client.release()

    return Response.json({ 
      success: true, 
      message: 'Version 1.1.0 updated successfully',
      data: result.rows[0]
    })
  } catch (error) {
    console.error('Update version error:', error)
    return Response.json({ 
      success: false, 
      error: String(error)
    }, { status: 500 })
  }
}
