import { readFile } from "node:fs/promises";

const readJson = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));

const root = "../";
const manifest = await readJson(`${root}package.json`);
const languageConfig = await readJson(`${root}language-configuration.json`);
const grammar = await readJson(`${root}syntaxes/sticks-lite.tmLanguage.json`);

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

assert(manifest.name === "sticks-lite-vscode", "package name must be sticks-lite-vscode");
assert(manifest.displayName === "Sticks Lite", "display name must be Sticks Lite");
assert(manifest.contributes.languages[0].id === "sticks-lite", "language id must be sticks-lite");
assert(manifest.contributes.languages[0].extensions.includes(".slite"), "language must register .slite files");
assert(manifest.contributes.grammars[0].scopeName === "source.sticks-lite", "scope name must be source.sticks-lite");
assert(languageConfig.comments.lineComment === "#", "line comment must be #");
assert(languageConfig.comments.blockComment[0] === "/*", "block comment must start with /*");
assert(grammar.scopeName === "source.sticks-lite", "grammar scope must match manifest");

const grammarText = JSON.stringify(grammar);
for (const word of ["DEFINE", "orif", "otherwise", "loopif", "foreach", "attempt", "when", "toNumber", "toText", "ValueError"]) {
  assert(grammarText.includes(word), `grammar is missing ${word}`);
}

console.log("Sticks Lite VS Code extension metadata is valid.");
