import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

//import path from path to be able use it bellow
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  base: "/Netflix-Clone-2025/",
  plugins: [tailwindcss(), react()],

  //set src path
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
