import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

// Public route
app.get('/', (c) => c.text('Hello New Cloudflare Workers!'))

// Basic auth middleware for all /api routes
app.use('/api/*', basicAuth({
  username: 'your-username',
  password: 'your-password'
}))

// Protected route
app.get('/api/protected', (c) => c.json({ message: 'This is protected!' }))

export default app
