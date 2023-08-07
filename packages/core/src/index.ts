export * from './api/index.js';
export * from './client.js';
export * from './util/index.js';

export * from 'discord-api-types/v10';

/**
 * The {@link https://github.com/cyberpurge-net/discord.js/blob/main/packages/core/#readme | @cyberpurge-net/core} version
 * that you are currently using.
 */
// This needs to explicitly be `string` so it is not typed as a "const string" that gets injected by esbuild
export const version = '[VI]{{inject}}[/VI]' as string;
