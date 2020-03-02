import resolve from '@rollup/plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import serve from 'rollup-plugin-serve';
import html from '@rollup/plugin-html';
import scss from 'rollup-plugin-scss';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
// import clear from 'rollup-plugin-clear';
import embedCSS from 'rollup-plugin-embed-css';

export default {
  input: 'src/index.js',
  plugins: [
    scss({ output: true }),
    embedCSS({ css: 'dist/index.js' }),
    resolve(),
    buble({
      exclude: ['node_modules/**']
    }),
    commonjs(),
    html(),
    serve({
      contentBase: 'dist',
      port: 3000
    }),
    livereload('dist'),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ],
  output: { file: 'dist/index.js', format: 'iife', name: 'dev' }
};
