import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

app.use('/api/*', basicAuth({
  username: 'your-username',
  password: 'your-password'
}))

app.get('/', (c) => c.text('Hello, Cloudflare!'))
app.get('/api/protected', (c) => c.json({ message: 'This is protected!' }))

export default app