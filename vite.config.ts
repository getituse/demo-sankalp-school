import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// In GitHub Actions, GITHUB_REPOSITORY is "owner/repo-name" (e.g. "getituse/demo-sankalp-school")
const getBase = () => {
  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1]
    return `/${repo}/`
  }
  return '/'
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: getBase(),
})
