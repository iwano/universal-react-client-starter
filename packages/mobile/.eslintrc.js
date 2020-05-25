module.exports = {
  root: true,
  extends: ['@react-native-community', '../../.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  globals: {
    __IS_ELECTRON__: 'writable',
  },
}
