module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": [
            1,
            "always"
        ],
        "react/react-in-jsx-scope": "off",
        "no-unused-vars": 1
    },
    "ignorePatterns": [
        "node_modules/",
        "server/",
        "webpack.config.js",
        ".eslintrc.js"
    ]
};
