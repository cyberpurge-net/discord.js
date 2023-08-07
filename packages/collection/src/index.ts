export * from './collection.js';

/**
 * The {@link https://github.com/cyberpurge-net/discord.js/blob/main/packages/collection/#readme | @cyberpurge-net/collection} version
 * that you are currently using.
 */
// This needs to explicitly be `string` so it is not typed as a "const string" that gets injected by esbuild
export const version = '[VI]{{inject}}[/VI]' as string;
