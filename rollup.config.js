import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'cjs',

  plugins: [
    buble({
      jsx: 'Snabbdom.createElement'
    }),
    resolve(),
    common()
  ]
}
