// vite.config.js
import { defineConfig } from "file:///mnt/c/Users/cyh21/kyck/team-kyck/P1/Website/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/c/Users/cyh21/kyck/team-kyck/P1/Website/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import eslint from "file:///mnt/c/Users/cyh21/kyck/team-kyck/P1/Website/frontend/node_modules/vite-plugin-eslint/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => ({
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production"
    })
  ],
  // To automatically open the app in the browser whenever the server starts,
  // uncomment the following lines:
  server: {
    // open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true
      }
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvY3loMjEva3ljay90ZWFtLWt5Y2svUDEvV2Vic2l0ZS9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2N5aDIxL2t5Y2svdGVhbS1reWNrL1AxL1dlYnNpdGUvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL2N5aDIxL2t5Y2svdGVhbS1reWNrL1AxL1dlYnNpdGUvZnJvbnRlbmQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgZXNsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBlc2xpbnQoe1xuICAgICAgbGludE9uU3RhcnQ6IHRydWUsXG4gICAgICBmYWlsT25FcnJvcjogbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICB9KVxuICBdLFxuICAvLyBUbyBhdXRvbWF0aWNhbGx5IG9wZW4gdGhlIGFwcCBpbiB0aGUgYnJvd3NlciB3aGVuZXZlciB0aGUgc2VydmVyIHN0YXJ0cyxcbiAgLy8gdW5jb21tZW50IHRoZSBmb2xsb3dpbmcgbGluZXM6XG4gIHNlcnZlcjoge1xuICAgIC8vIG9wZW46IHRydWUsXG4gICAgcHJveHk6IHtcbiAgICAgICcvYXBpJzoge1xuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnLFxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICB9XG4gICAgfVxuICB9XG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlWLFNBQVMsb0JBQW9CO0FBQzlXLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFHbkIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxhQUFhO0FBQUEsTUFDYixhQUFhLFNBQVM7QUFBQSxJQUN4QixDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUE7QUFBQSxFQUdBLFFBQVE7QUFBQTtBQUFBLElBRU4sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLE1BQ2hCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
