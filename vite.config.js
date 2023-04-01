import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: 'https://apis.data.go.kr/B552584',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
				secure: false,
				ws: true,
			},
			'/weather': {
				target: 'https://api.openweathermap.org',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/weather/, ''),
				secure: false,
				ws: true,
			},
		},
	},
});
