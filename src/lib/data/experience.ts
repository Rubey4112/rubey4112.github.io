import type { Span } from './types';

export type Role = {
	title: string;
	org: string;
	detail?: string;
	dates: Span;
};

export const experience: Role[] = [
	{
		title: 'Electrical Engineer',
		org: "NASA L'SPACE Mission Concept Academy",
		detail: '15-week virtual program through preliminary design review.',
		dates: { start: { label: 'Fall 2026', datetime: '2026' } }
	},
	{
		title: 'Treasurer',
		org: 'IEEE Student Branch at George Mason University',
		dates: { start: { label: 'Fall 2026', datetime: '2026' } }
	},
	{
		title: 'Foundations of AI Engineering Tech Fellow',
		org: 'CodePath',
		dates: {
			start: { label: 'May 2026', datetime: '2026-05' },
			end: { label: 'Aug 2026', datetime: '2026-08' }
		}
	},
	{
		title: 'Lead Instructor and Course Developer',
		org: 'GMU ACCESS Academy',
		detail: 'Robotics camp for high school students.',
		dates: {
			start: { label: 'May 2026', datetime: '2026-05' },
			end: { label: 'Jul 2026', datetime: '2026-07' }
		}
	},
	{
		title: 'Undergraduate Research Assistant',
		org: 'Mason Autonomy and Robotics Center',
		detail: 'Research on swarm robotics platforms.',
		dates: {
			start: { label: 'Sep 2025', datetime: '2025-09' },
			end: { label: 'Aug 2026', datetime: '2026-08' }
		}
	}
];
