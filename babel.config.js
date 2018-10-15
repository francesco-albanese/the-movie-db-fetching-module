module.exports = {
  'presets': [[ '@babel/preset-env', { 'modules': false }], 'react-app' ],
  'env': {
    'test': {
      'presets': [[ '@babel/preset-env', { 'modules': 'commonjs' }], 'react-app' ],
      'plugins': [
        'transform-es2015-modules-commonjs'
      ]
    }
  },
  'plugins': [
    '@babel/plugin-proposal-class-properties'
  ]
}
