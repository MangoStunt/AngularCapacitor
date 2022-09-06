import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ilbtestapp.angular',
  appName: 'angular-capacitor',
  webDir: 'dist/angular-capacitor',
  bundledWebRuntime: true,
  server: {
    url: 'http://192.168.56.1:4200',
    cleartext: true
  }
};

export default config;
