require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-prettier/skip-formatting'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Aquí puedes añadir reglas específicas de TypeScript si lo deseas
  }
}
