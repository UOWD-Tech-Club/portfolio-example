# React + GitHub Pages using Vite

This template provides a minimal setup to get React working with GitHub Pages using Vite as the build tool.

> Remember to update the `vite.config.js` and change the base path to your repo name

```diff
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react()],
+  base: '/[your-repo-name]/'
})
```
