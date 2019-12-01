export class Answer {
	id: number;
	answer: string;
	pollid: number;

	constructor(id: number, answer: string, pollid: number) {
		this.id = id;
		this.answer = answer;
		this.pollid = pollid;
	}
}
