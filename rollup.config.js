import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

const config = {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  external: ["react-select"],
  plugins: [
    external(),
    postcss({
      extract: true,
      modules: true,
    }),
    url({
      include: ["**/*.woff", "**/*.ttf", "**/*.png", "**/*.svg"],
      limit: Infinity, // This allows files from any size to be bundled. If we want larger files copied
      // we need to reduce the limit.
    }),
    svgr(),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ],
};

export default config;
