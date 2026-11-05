export const site = {
	name: 'Toan Do',
	url: 'https://rubey4112.github.io',
	title: 'Toan Do | Electrical Engineering, Robotics, and Embedded Systems',
	description:
		'Junior electrical engineering student at George Mason University. Robotics, embedded systems, PCB design, and FPGA — open to EE, robotics, and space internships.',
	email: 'tdo30@gmu.edu',
	school: 'George Mason University',
	degree: 'B.S. Electrical Engineering',
	standing: 'Junior',
	expected: 'December 2028',
	expectedShort: 'Dec 2028',
	gpa: '3.97',
	image: 'https://rubey4112.github.io/media/profile.jpg',
	portrait: {
		src: 'media/profile.jpg',
		alt: 'Portrait of Toan Do',
		width: 1080,
		height: 1080
	}
} as const;

export const focus = ['Robotics', 'Embedded systems', 'PCB design', 'FPGA / VHDL'] as const;

export const socials = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/toan-do-ece/' },
	{ label: 'GitHub', href: 'https://github.com/Rubey4112' },
	{ label: 'Instagram', href: 'https://www.instagram.com/toan.do.engineering/' }
] as const;
