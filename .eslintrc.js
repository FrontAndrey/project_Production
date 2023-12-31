module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [{
        "env": {
            "node": true
        },
        "files": [
            ".eslintrc.{js,cjs,jsx}"
        ],
        "parserOptions": {
            "sourceType": "script"
        }
    }],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-indent": [2, 4],
        "react/jsx-filename-extension": [2, {
            "extensions": [".js", ".jsx", ".tsx"]
        }],
    },
}