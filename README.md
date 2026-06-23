# Sticks Lite VS Code Extension

Official VS Code editor support for Sticks Lite.

Sticks Lite is intended for monitored educational environments and introductory computer-science teaching.

## Who this is for

- Teachers and mentors introducing programming in a supervised classroom.
- Students writing `.slite` source files while learning beginner programming concepts.
- Clubs, camps, and classroom setups that want Sticks Lite syntax highlighting in VS Code.

## Features

- Recognizes `.slite` files as Sticks Lite.
- Registers language ID `sticks-lite`.
- Adds syntax highlighting for Sticks Lite keywords, built-ins, strings, numbers, comments, operators, functions, errors, lists, tuples, and dictionaries.
- Configures `#` line comments and `/* */` block comments.
- Configures brackets, auto-closing pairs, surrounding pairs, and indentation after block-opening lines.

## Install From Local VSIX

Install dependencies:

```sh
npm install
```

Package the extension:

```sh
npm run package
```

Install the generated `.vsix` from VS Code:

```sh
code --install-extension sticks-lite-vscode-<version>.vsix
```

## Develop

Open this repository in VS Code, press `F5`, and open `examples/sample.slite` in the Extension Development Host.

The file should use:

- Language mode: `Sticks Lite`
- Language ID: `sticks-lite`
- TextMate scope: `source.sticks-lite`

## Check

```sh
npm run check
```

The check validates the extension manifest, language configuration, and grammar metadata.

## Example

```slite
DEFINE MAX_SCORE = 100

score = 87

if score >= 90:
    say "A"
orif score >= 80:
    say "B"
otherwise:
    say "Keep practicing"

new double(value):
    return value * 2

say toText(double(MAX_SCORE))
```

## Relationship To Sticks Lite

This extension provides editor recognition and syntax highlighting only. It does not include a language server, diagnostics, formatter, interpreter, or `sticks` CLI.

Install the Sticks Lite interpreter and `sticks` CLI separately:

```sh
npm install -g sticks-lite
sticks --version
sticks run main.slite
```

## License

MIT. The software is provided as-is, without warranty or liability.
