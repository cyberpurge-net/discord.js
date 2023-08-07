import type { Awaitable } from '@cyberpurge-net/util';
import type { ManagerShardEventsMap, WebSocketShardEvents } from '@cyberpurge-net/ws';
import type { GatewaySendPayload } from 'discord-api-types/v10';

export interface Gateway {
	getShardCount(): Awaitable<number>;
	on(
		event: WebSocketShardEvents.Dispatch,
		listener: (...params: ManagerShardEventsMap[WebSocketShardEvents.Dispatch]) => Awaitable<void>,
	): this;
	send(shardId: number, payload: GatewaySendPayload): Awaitable<void>;
}
