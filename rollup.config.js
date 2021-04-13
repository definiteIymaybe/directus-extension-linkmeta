import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import vue from "rollup-plugin-vue";

export default {
	input: "src/index.js",
	output: {
		format: "es",
		file: "dist/extensions/interfaces/linkpreview/index.js"
	},
	plugins: [terser(), resolve({ jsnext: true }), commonjs(), vue()]
};
