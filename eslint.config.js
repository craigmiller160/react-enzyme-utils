const config = {
    extends: [
        'airbnb',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        'react-hooks',
        '@typescript-eslint'
    ],
    parserOptions: {
        project: './tsconfig.json'
    },
    parser: '@typescript-eslint/parser',
    rules: {
        'no-tabs': 0,
        'react/jsx-indent': 0,
        'indent': 0,
        'react/jsx-filename-extension': 0,
        'no-console': 'error',
        'react/jsx-curly-spacing': [ 2, { 'when': 'always', allowMultiline: false } ],
        'react/jsx-indent-props': 0,
        'no-trailing-spaces': 0,
        'comma-dangle': ['error', 'never'],
        'react/jsx-props-no-spreading': 0,
        'no-plusplus': 0,
        'operator-linebreak': ['error', 'after'],
        'object-curly-newline': ['error', { consistent: true }],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true
            }
        ],
        'implicit-arrow-linebreak': 0,
        "import/no-extraneous-dependencies": 0,
        '@typescript-eslint/no-explicit-any': 'error',
        'import/extensions': ['error', 'never'],
        'array-bracket-spacing': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-function-return-type': 'error',
        'no-useless-constructor': 0,
        '@typescript-eslint/no-useless-constructor': 'error'
    },
    globals: {
        window: true,
        document: true,
        isNaN: true,
        requestAnimationFrame: true,
        localStorage: true,
        sessionStorage: true,
        fetch: true,
        customElements: true,
        HTMLElement: true
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                moduleDirectory: ['node_modules', 'src']
            }
        }
    }
};

module.exports = config;
