# eslint-plugin-zustand

does not let you destructure values from zustand store

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-zustand`:

```sh
npm install eslint-plugin-zustand --save-dev
```

## Usage

Add `zustand` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "zustand"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "zustand/rule-name": 2
    }
}
```

## Rules
<!-- begin auto-generated rules list -->

| Name                                           | Description                                            |
| :--------------------------------------------- | :----------------------------------------------------- |
| [no-destructure](docs/rules/no-destructure.md) | does not let you destructure values from zustand store |

<!-- end auto-generated rules list -->


