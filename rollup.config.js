import babel from 'rollup-plugin-babel';
import multiEntry from "rollup-plugin-multi-entry";
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/**/*.jsx',
  external: ['react', 'react-dom', 'prop-types', 'classnames', 'lodash'],
  plugins: [
    multiEntry(),
    resolve({
      extensions: ['.jsx']
    }),
    babel()
  ],
  output: [{
    format: 'es',
    file: 'dist/cutestrap-react.js',
    globals: {
      react: "React",
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'classnames': 'classNames',
      'lodash': '_'
    },
    format: 'iife',
    name: "Cutestrap",
    file: 'dist/iife/cutestrap-react.js',
    globals: {
      react: "React",
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'classnames': 'classNames',
      'lodash': '_'
    },
    format: 'umd',
    file: 'dist/umd/cutestrap-react.js',
    globals: {
      react: "React",
      'react-dom': 'ReactDOM',
      'prop-types': 'PropTypes',
      'classnames': 'classNames',
      'lodash': '_'
    }
  }]
}
