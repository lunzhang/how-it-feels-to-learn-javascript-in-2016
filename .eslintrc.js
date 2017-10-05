module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "airbnb-base",
  "plugins": ["react"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "no-mixed-operators": 0,
    "no-param-reassign": 0,
    "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
    "import/no-extraneous-dependencies": 0,
    "max-len": [2, {"code": 160}],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "default-case": 0,
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
  }
};
