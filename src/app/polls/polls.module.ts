import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


import { HttpClientModule} from '@angular/common/http';
import { MatCardModule, MatGridListModule, MatButtonModule } from '@angular/material/';

import { Poll} from './models/poll.model';
import { Vote} from './models/vote.model';
import { Answer} from './models/answer.model';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { PollDbService } from './poll-db.service';

@NgModule({
  declarations: [OverviewComponent, DetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
	HttpClientModule,
	MatCardModule,
	MatButtonModule,
	MatGridListModule
  ],
  providers: [PollDbService],
  exports: [OverviewComponent,DetailComponent]
})
export class PollsModule { }
