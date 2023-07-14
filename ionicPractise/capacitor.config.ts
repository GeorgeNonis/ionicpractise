import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "ionicpractise",
  webDir: "build",
  server: {
    url: "http://localhost:5173/",
    cleartext: true,
  },
};

export default config;
