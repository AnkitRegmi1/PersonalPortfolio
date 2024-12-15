const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__a6c87d._.js");
runtime.loadChunk("server/chunks/ssr/src_styles_globals_scss_8e4c59.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
