<div align="center">
	<br />
	<p>
		<a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/djs"><img src="https://img.shields.io/discord/222078108977594368?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://hub.docker.com/r/cyberpurge-net/proxy"><img src="https://img.shields.io/docker/v/cyberpurge-net/proxy.svg?sort=semver&maxAge=3600" alt="dockerhub version" /></a>
		<a href="https://hub.docker.com/r/cyberpurge-net/proxy"><img src="https://img.shields.io/docker/pulls/cyberpurge-net/proxy.svg?maxAge=3600" alt="dockerhub pulls" /></a>
		<a href="https://github.com/cyberpurge-net/discord.js/actions"><img src="https://github.com/cyberpurge-net/discord.js/actions/workflows/test.yml/badge.svg" alt="Build status" /></a>
	</p>
	<p>
		<a href="https://vercel.com/?utm_source=cyberpurge-net&utm_campaign=oss"><img src="https://raw.githubusercontent.com/cyberpurge-net/discord.js/main/.github/powered-by-vercel.svg" alt="Vercel" /></a>
		<a href="https://www.cloudflare.com"><img src="https://raw.githubusercontent.com/cyberpurge-net/discord.js/main/.github/powered-by-workers.png" alt="Cloudflare Workers" height="44" /></a>
	</p>
</div>

## About

`@cyberpurge-net/proxy-container` - Lightweight HTTP proxy for Discord's API, brought to you as a container 📦

## Usage

Quickly spin up an instance:

`docker run -d --restart unless-stopped --name proxy -p 127.0.0.1:8080:8080 cyberpurge-net/proxy`

Use it:

```ts
import { Client } from 'discord.js';

const client = new Client({
	// other options,
	rest: {
		api: 'http://localhost:8080/api',
	},
});
```

Or with just `@cyberpurge-net/rest`:

```ts
import { REST } from '@cyberpurge-net/rest';

const rest = new REST({
	api: 'http://localhost:8080/api',
});
```

**Do note that you should not use the same proxy with multiple bots. We cannot guarantee you won't hit rate limits.
Webhooks with tokens or other requests that don't include the Authorization header are okay, though!**

## Links

- [Website][website] ([source][website-source])
- [Documentation][documentation]
- [Guide][guide] ([source][guide-source])
  Also see the v13 to v14 [Update Guide][guide-update], which includes updated and removed items from the library.
- [discord.js Discord server][discord]
- [Discord API Discord server][discord-api]
- [GitHub][source]
- [Related libraries][related-libs]

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation][documentation].  
See [the contribution guide][contributing] if you'd like to submit a PR.

## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join our official [discord.js Server][discord].

[website]: https://discord.js.org
[website-source]: https://github.com/cyberpurge-net/discord.js/tree/main/apps/website
[guide]: https://cyberpurge-net.guide/
[guide-source]: https://github.com/cyberpurge-net/guide
[guide-update]: https://cyberpurge-net.guide/additional-info/changes-in-v14.html
[discord]: https://discord.gg/djs
[discord-api]: https://discord.gg/discord-api
[source]: https://github.com/cyberpurge-net/discord.js/tree/main/packages/proxy-container
[related-libs]: https://discord.com/developers/docs/topics/community-resources#libraries
[contributing]: https://github.com/cyberpurge-net/discord.js/blob/main/.github/CONTRIBUTING.md
