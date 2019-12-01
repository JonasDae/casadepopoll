import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Poll } from './models/poll.model';
import { Answer } from './models/answer.model';
import { Vote } from './models/vote.model';

@Injectable({
  providedIn: 'root'
})
export class PollDbService {

  constructor(private http: HttpClient) { }

  getPolls(): Observable<Poll[]> {
  	return this.http.get<Poll[]>("http://localhost:8081/polls");
  }
  getPoll(id: number): Observable<Poll[]> {
  	return this.http.get<Poll[]>("http://localhost:8081/poll/"+id);
  }
  addPoll(poll: Poll) {
  	return this.http.post<Poll>("http://localhost:8081/polladd", poll);
  }
  updatePoll(id: number, poll: Poll) {
  	return this.http.post<Poll>("http://localhost:8081/pollchange/"+id, poll);
  }

  getAnswerByPollid(id: number): Observable<Answer[]> {
  	return this.http.get<Answer[]>("http://localhost:8081/answersbypoll/"+id);
  }
  vote(vote: Vote) {
  	this.http.post<Vote>("http://localhost:8081/voteadd/", vote);
  	return this.http.get<Poll[]>("http://localhost:8081/polls");
  }
}
