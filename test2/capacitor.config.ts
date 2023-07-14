import { CapacitorConfig } from "@capacitor/cli";
import { url } from "inspector";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "test2",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
