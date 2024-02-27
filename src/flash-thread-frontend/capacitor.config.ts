import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'FlashThread',
  webDir: 'dist/browser',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "SplashScreen": {
      "splashFullScreen": true,
      "splashImmersive": false,
    }
  }
};

export default config;
