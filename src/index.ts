import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
const app = new Hono()

app.get('/', (c) => c.text('Hello Cloudflare Workers!'))

export default app