import type { Span } from './types';

export type ProjectImage = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type Project = {
	id: string;
	title: string;
	tag: string;
	summary: string;
	dates: Span;
	href?: string;
	image?: ProjectImage;
	mark?: string;
	spotlight?: {
		kicker: string;
		summary: string;
		cta: string;
	};
};

export const projects: Project[] = [
	{
		id: 'arm',
		title: '5-DOF Robotic Arm',
		tag: 'Robotics',
		summary:
			'Designing a 5-DOF arm to learn kinematics and dynamics. The mechanism is modeled in Fusion for 3D printing. Low-level control is Arduino and C++; higher-level tasks such as pick-and-place and path planning use Python and ROS 2.',
		dates: { start: { label: 'Jul 2026', datetime: '2026-07' }, end: 'Present' },
		href: 'https://github.com/Rubey4112/robot-arm',
		image: {
			src: 'media/projects/robot_arm/arm.png',
			alt: 'CAD model of the 5-DOF robotic arm with a two-finger gripper',
			width: 912,
			height: 835
		},
		spotlight: {
			kicker: 'Current personal project',
			summary:
				'A 5-DOF arm for learning kinematics and dynamics. Modeled in Fusion for 3D printing, with Arduino and C++ at the joint level and Python and ROS 2 for pick-and-place and path planning.',
			cta: 'View repository'
		}
	},
	{
		id: 'space-rangers',
		title: 'Space Rangers',
		tag: 'Embedded',
		summary:
			'IEEE Student Activities Conference project. Led a team of four, taught GitHub and Copilot basics, and delegated the work by strengths.',
		dates: { start: { label: 'Mar 2026', datetime: '2026-03' } },
		href: 'https://github.com/FlashCoder456/Profhacks',
		image: {
			src: 'media/projects/space_rangers/IMG_6840.jpg',
			alt: 'Handheld device showing the Space Rangers title screen and three buttons',
			width: 1920,
			height: 1440
		}
	},
	{
		id: 'learning-buddy',
		title: 'Learning Buddy',
		tag: 'Hardware',
		summary:
			'Hardware paired with a Google Gemini agent, with voice streamed over a WebSocket. MLH best use of MongoDB Atlas (vector search / RAG).',
		dates: { start: { label: 'Feb 2026', datetime: '2026-02' } },
		href: 'https://github.com/SirBlobby/LearningBuddy',
		image: {
			src: 'media/projects/learning_buddy/IMG_6411.jpg',
			alt: 'Learning Buddy prototype on a perfboard, with a display, camera module, and speaker',
			width: 1440,
			height: 1920
		}
	},
	{
		id: 'fpga',
		title: 'FPGA Digital System Design Labs',
		tag: 'FPGA',
		summary: 'Digital system design labs in VHDL on a Basys 3 FPGA.',
		dates: {
			start: { label: 'Jan 2026', datetime: '2026-01' },
			end: { label: 'Apr 2026', datetime: '2026-04' }
		},
		mark: 'VHDL'
	},
	{
		id: 'desk-companion',
		title: 'Desk Companion for ADHD Users',
		tag: 'Robotics',
		summary:
			'A physical Pomodoro desk robot. Led hardware for a team of five, including a 3D-printed enclosure and a second-accurate timer. The project included a 20-page design report.',
		dates: {
			start: { label: 'Oct 2025', datetime: '2025-10' },
			end: { label: 'Dec 2025', datetime: '2025-12' }
		},
		href: 'https://github.com/Rubey4112/desk-robot-companion',
		image: {
			src: 'media/projects/desk_companion/IMG_5898.jpg',
			alt: 'Green 3D-printed desk robot displaying a work timer',
			width: 1440,
			height: 1920
		}
	},
	{
		id: 'blimp',
		title: 'Bio-Inspired Blimp',
		tag: 'Robotics',
		summary:
			'Led a team of four. A four-fin design was chosen for speed and control, with coding and soldering delegated across the team. Placed second of six teams in presentation and design.',
		dates: {
			start: { label: 'Sep 2025', datetime: '2025-09' },
			end: { label: 'Nov 2025', datetime: '2025-11' }
		},
		image: {
			src: 'media/projects/blimp/blimp.jpg',
			alt: 'Red foil balloon blimp with four fins, held up during a presentation',
			width: 918,
			height: 918
		}
	},
	{
		id: 'reactor',
		title: 'Reactor',
		tag: 'PCB',
		summary:
			'A high-score reaction game on an RP2040, with a custom KiCad PCB fabricated by JLCPCB. Simulated in Wokwi and built with PlatformIO.',
		dates: {
			start: { label: 'Jun 2025', datetime: '2025-06' },
			end: { label: 'Aug 2025', datetime: '2025-08' }
		},
		href: 'https://github.com/Rubey4112/reactor',
		image: {
			src: 'media/projects/reactor/IMG_7712.jpg',
			alt: 'Custom purple Reactor board with four pink keys and colored LEDs',
			width: 1440,
			height: 1920
		}
	},
	{
		id: 'home-lab',
		title: 'Personal Home Lab',
		tag: 'Systems',
		summary:
			'An image server for about 500 GB of family photos, with Docker running about 14 services. Tailscale and an Nginx reverse proxy provide secure remote access.',
		dates: { start: { label: 'May 2022', datetime: '2022-05' }, end: 'Present' },
		image: {
			src: 'media/projects/homelab/image.png',
			alt: 'Home lab dashboard with search and bookmarks for self-hosted services',
			width: 958,
			height: 789
		}
	}
];
