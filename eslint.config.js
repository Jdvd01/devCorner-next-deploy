import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'
import prettierPlugin from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    ignores: [
      'node_modules',
      '.next',
      'dist',
      'package.json',
      'package-lock.json',
      'pnpm-lock.yaml',
      'yarn.lock',
      '.gitignore',
      '.prettierignore',
      'prettier.config.js',
      'prettier.config.cjs',
      'next-env.d.ts',
    ],
  },
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      'prettier': prettierPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      'prettier/prettier': 'error',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'block-spacing': 'off',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-tslint-comment': 'error',
      'no-template-curly-in-string': 'error',
      'no-implicit-coercion': 'error',
      'no-lonely-if': 'error',
      'yoda': 'error',
      'curly': 'error',
      'no-alert': 'error',
      'no-bitwise': 'error',
      'no-empty-function': 'error',
      'no-magic-numbers': 'error',
      'no-duplicate-imports': 'error',
      'eqeqeq': ['error', 'always'],
    },
  },
]
