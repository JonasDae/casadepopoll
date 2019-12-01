export class Poll {
	id: number;
	name: string;
	owner: number;

	constructor(id: number, name: string, owner: number) {
		this.id = id;
		this.name = name;
		this.owner = owner;
	}
}
