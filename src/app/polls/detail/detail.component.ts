import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
 import { map, filter, tap, take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { PollDbService } from '../poll-db.service';
import { Poll } from '../models/poll.model';
import { Answer } from '../models/answer.model';
import { Vote } from '../models/vote.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
	votedata: Vote;
	poll: Poll;
	answers: Observable<Answer[]>;
  constructor(private _polldb: PollDbService, private route: ActivatedRoute) { }
	ngOnInit() {
// WTF kunne ze mij ni gewoon een klasse teruggeve
		this.route.paramMap.subscribe(params => {
			let id = parseInt(params.get('id'));
			this._polldb.getPoll(id).subscribe(val => {
				this.poll = val[0];
				this.answers = this._polldb.getAnswerByPollid(this.poll.id);
				});
		});
	}
	vote(answer: Answer) {
		console.log(answer);
		this.votedata = new Vote(answer.id, 0);
		console.log(this.votedata);
		this._polldb.vote(this.votedata);
	}
}
