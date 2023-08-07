'use client';

import { Section as DJSSection, type SectionOptions } from '@cyberpurge-net/ui';
import type { PropsWithChildren } from 'react';

export function Section(options: PropsWithChildren<SectionOptions>) {
	return <DJSSection {...options} />;
}
