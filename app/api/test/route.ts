export async function GET() {
  return Response.json({
    env_check: {
      POSTGRES_URL: process.env.POSTGRES_URL ? 'SET' : 'NOT SET',
      POSTGRES_USER: process.env.POSTGRES_USER ? 'SET' : 'NOT SET',
      POSTGRES_HOST: process.env.POSTGRES_HOST ? 'SET' : 'NOT SET',
      POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD ? 'SET' : 'NOT SET',
      POSTGRES_DATABASE: process.env.POSTGRES_DATABASE ? 'SET' : 'NOT SET'
    }
  })
}
