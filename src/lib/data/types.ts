export type DatePoint = {
	label: string;
	datetime: string;
};

export type Span = {
	start: DatePoint;
	end?: DatePoint | 'Present';
};
