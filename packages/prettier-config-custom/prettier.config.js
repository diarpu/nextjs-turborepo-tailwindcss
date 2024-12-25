/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@trivago/prettier-plugin-sort-imports'
  ],
  trailingComma: 'none',
  tabWidth: 2,
  semi: false,
  singleQuote: true
}

module.exports = config
