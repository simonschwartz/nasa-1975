module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    plugins: ['react', 'emotion', 'jest'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'linebreak-style': ['error', 'unix'],
    },
};
