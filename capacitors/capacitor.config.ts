import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.practisecapacitor',
  appName: 'PractiseCapacitor',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
