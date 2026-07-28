import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { handleContactRequest } from './server/contact.js'

function contactApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'portfolio-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (request, response) => {
        let body = ''

        for await (const chunk of request) {
          body += chunk.toString()
          if (body.length > 12_000) break
        }

        const result = await handleContactRequest({
          method: request.method ?? 'GET',
          contentType: request.headers['content-type'],
          body,
          env,
        })

        response.statusCode = result.status
        response.setHeader('Content-Type', 'application/json; charset=utf-8')
        response.setHeader('Cache-Control', 'no-store')
        Object.entries(result.headers ?? {}).forEach(([name, value]) =>
          response.setHeader(name, value),
        )
        response.end(JSON.stringify(result.body))
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    contactApiPlugin(loadEnv(mode, process.cwd(), '')),
  ],
}))
