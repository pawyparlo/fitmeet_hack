import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/graphql": {
  //       target: "http://localhost:8000/graphql/api",
  //       changeOrigin: false,
  //       rewrite: (path) => path.replace(/^\/graphql/, ""),
  //     },
  //   },
  //   cors: false,
  // },
});
