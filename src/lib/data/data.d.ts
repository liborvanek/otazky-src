declare module 'srcVhf.json' {
	export default Array<{
		name: 'blue' | 'grass' | 'violet';
		color: string;
		questions: {
			id: number;
			question: string;
			answer: string;
		};
	}>;
}
