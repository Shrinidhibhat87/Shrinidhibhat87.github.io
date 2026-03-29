import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// base: '/' is correct for a GitHub user page (username.github.io)
// If you ever deploy to a project page (username.github.io/repo-name), change base to '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
