import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': path.resolve(__dirname, 'src'), // Establece el alias "@" para apuntar a la carpeta "src"
    'components': path.resolve(__dirname, 'src/components'), // Otro ejemplo con un alias para la carpeta "src/components"
    'servicios': path.resolve(__dirname, 'src/servicios')
    // Puedes agregar más alias según sea necesario
  },
})
