<div align="center">
	<br />
	<p>
		<a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/djs"><img src="https://img.shields.io/discord/222078108977594368?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/@cyberpurge-net/formatters"><img src="https://img.shields.io/npm/v/@cyberpurge-net/formatters.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/@cyberpurge-net/formatters"><img src="https://img.shields.io/npm/dt/@cyberpurge-net/formatters.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://github.com/cyberpurge-net/discord.js/actions"><img src="https://github.com/cyberpurge-net/discord.js/actions/workflows/test.yml/badge.svg" alt="Build status" /></a>
		<a href="https://codecov.io/gh/cyberpurge-net/discord.js" ><img src="https://codecov.io/gh/cyberpurge-net/discord.js/branch/main/graph/badge.svg?precision=2&flag=formatters" alt="Code coverage" /></a>
	</p>
	<p>
		<a href="https://vercel.com/?utm_source=cyberpurge-net&utm_campaign=oss"><img src="https://raw.githubusercontent.com/cyberpurge-net/discord.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>
		<a href="https://www.cloudflare.com"><img src="https://raw.githubusercontent.com/cyberpurge-net/discord.js/main/.github/powered-by-workers.png" alt="Cloudflare Workers" height="44" /></a>
	</p>
</div>

## About

`@cyberpurge-net/formatters` is a collection of functions for formatting strings to be used on Discord.

## Installation

**Node.js 16.9.0 or newer is required.**

```sh
npm install @cyberpurge-net/formatters
yarn add @cyberpurge-net/formatters
pnpm add @cyberpurge-net/formatters
```

## Example usage

````ts
import { codeBlock } from '@cyberpurge-net/formatters';

const formattedCode = codeBlock('hello world!');
console.log(formattedCode);

// Prints:
// ```
// hello world!
// ```
````

## Links

- [Website][website] ([source][website-source])
- [Documentation][documentation]
- [Guide][guide] ([source][guide-source])
  Also see the v13 to v14 [Update Guide][guide-update], which includes updated and removed items from the library.
- [discord.js Discord server][discord]
- [Discord API Discord server][discord-api]
- [GitHub][source]
- [npm][npm]
- [Related libraries][related-libs]

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation][documentation].  
See [the contribution guide][contributing] if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [discord.js Server][discord].

[website]: https://discord.js.org
[website-source]: https://github.com/cyberpurge-net/discord.js/tree/main/apps/website
[documentation]: https://discord.js.org/docs/packages/formatters/stable
[guide]: https://cyberpurge-net.guide/
[guide-source]: https://github.com/cyberpurge-net/guide
[guide-update]: https://cyberpurge-net.guide/additional-info/changes-in-v14.html
[discord]: https://discord.gg/djs
[discord-api]: https://discord.gg/discord-api
[source]: https://github.com/cyberpurge-net/discord.js/tree/main/packages/formatters
[npm]: https://www.npmjs.com/package/@cyberpurge-net/formatters
[related-libs]: https://discord.com/developers/docs/topics/community-resources#libraries
[contributing]: https://github.com/cyberpurge-net/discord.js/blob/main/.github/CONTRIBUTING.md
