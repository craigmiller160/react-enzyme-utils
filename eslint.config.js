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
        "import/no-extraneous-dependencies": 0
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
    }
};

module.exports = config;
