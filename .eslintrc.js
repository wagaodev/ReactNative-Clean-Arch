module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        'import/prefer-default-export': ['off'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-raw-text': ['off'],
        'react/function-component-definition': ['off'],
        'import/no-extraneous-dependencies': ['off'],
        'react/require-default-props': ['off'],
        'react/jsx-props-no-spreading': ['off'],
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsFor: ['state'],
          },
        ],
        'react/no-unstable-nested-components': ['off'],
      },
    },
  ],
};
