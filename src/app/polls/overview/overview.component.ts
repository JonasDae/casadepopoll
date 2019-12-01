import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../../app-routing.module';

import { PollDbService } from '../poll-db.service';
import { Poll } from '../models/poll.model';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  polls: Observable<Poll[]>;

  constructor(private _polldb: PollDbService) { 
  	this.polls = this._polldb.getPolls();
  }
}
