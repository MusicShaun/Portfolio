import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@images": path.resolve(__dirname, "./src/img"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@features": path.resolve(__dirname, "./src/features"),

    }
  }

});
