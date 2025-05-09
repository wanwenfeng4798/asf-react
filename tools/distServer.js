import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback";
import {chalkProcessing} from "./chalkConfig.js";

 /* eslint-disable no-console */

console.log(chalkProcessing("Opening production build..."));

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001
  },
  server: {
    baseDir: "dist"
  },
  files: [
    "src/*.html"
  ],

  middleware: [historyApiFallback()]
});