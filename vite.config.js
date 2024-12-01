import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactNativeWeb from 'vite-plugin-react-native-web';

// Configuration de base pour React Native Web avec Vite
export default defineConfig({
  plugins: [
    react(),
    reactNativeWeb(), // Ajoute le support pour React Native Web
  ],
  resolve: {
    alias: {
      // Mappe les alias nécessaires pour React Native
      'react-native$': 'react-native-web',
    },
  },
  server: {
    port: 3000, // Configurez le port pour le serveur de développement
  },
});
