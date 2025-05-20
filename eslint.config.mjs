import eslint from '@eslint/js'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'
import tsEslint from 'typescript-eslint'

export default [
  eslint.configs.recommended,
  ...tsEslint.configs.recommendedTypeChecked,

  prettierPluginRecommended,
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          modules: true
        },
        tsconfigRootDir: '.',
        projectService: true
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/return-await': ['error', 'always'],
      curly: 'error',
      eqeqeq: 2,
      'import-x/no-named-as-default-member': 0,
      'no-console': 2,
      'no-unused-expressions': 2, // no short-circuit eval, e.g. `!!x && (() => ...)`
      'prettier/prettier': ['error', { singleQuote: true }]
    }
  },
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      '**/generated',
      'coverage',
      'bin'
    ]
  },
  {
    /**
     * Ignore configs and generated files
     */
    files: ['*.mjs', 'dist/**'],
    ...tsEslint.configs.disableTypeChecked
  }
]
