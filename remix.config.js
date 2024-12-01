/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  publicPath: "/build/", // default value, can be removed
  serverBuildPath: ".netlify/functions-internal/server.js",
  serverMainFields: ["main", "module"], // default value, can be removed
  serverMinify: false, // default value, can be removed
  serverModuleFormat: "cjs", // default value, can be removed
  serverPlatform: "node", // default value, can be removed
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
};
