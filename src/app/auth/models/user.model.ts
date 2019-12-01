export class User {
	id: number;
	name: string;
	secret: string;
	email: string;

	constructor(id: number, name: string, secret: string, email: string) {
		this.id = id;
		this.name = name;
		this.secret = secret;
		this.email = email;
	}
}
