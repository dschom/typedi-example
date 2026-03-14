import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js'], // Target TypeScript files in the 'src/shared' directory
    rules: {
      '@typescript-eslint/no-require-imports': 'off', // Turn off a specific rule for these files
      'no-restricted-imports': ['error', {
        paths: [{
          name: 'typedi',
          importNames: ['Container'],
          message: 'Container may only be imported in src/lib/di-registry.ts',
        }],
      }],
      'no-restricted-syntax': ['error', {
        selector: "VariableDeclarator[init.type='CallExpression'][init.callee.name='require'][init.arguments.0.value='typedi'] > ObjectPattern > Property[key.name='Container']",
        message: 'Container may only be imported in src/lib/di-registry.ts',
      }],
    },
  },
  {
    files: ['src/di-registry.ts'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
];

