import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/js/app.js',
  dest: 'dist/js/app.min.js',
  format: 'iife',
  sourceMap: (process.env.NODE_ENV === 'production' ? false : 'inline'),
  moduleName: 'MUA',
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
  ],
};
