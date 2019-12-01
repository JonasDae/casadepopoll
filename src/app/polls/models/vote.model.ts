export class Vote {
	id:number;
	answerid: number;
	userid: number;

	constructor(answerid: number, userid: number) {
		this.answerid = answerid;
		this.userid = userid;
	}
}
