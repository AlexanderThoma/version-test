import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import replace from "@rollup/plugin-replace";
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      replace({
        // Replace environment variables during build'import.meta.env.VITE_TEST_VAR1': JSON.stringify(process.env.VITE_TEST_VAR1),
        'import.meta.env.APP_VERSION_NUMBER': JSON.stringify(process.env.APP_VERSION_NUMBER),
    })
  ],
})
