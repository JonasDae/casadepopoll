import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule, MatGridListModule, MatButtonModule, MatToolbarModule } from '@angular/material/';

//import { AuthModule } from './auth/auth.module';
import { PollsModule } from './polls/polls.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OverviewComponent } from './polls/overview/overview.component';
import { DetailComponent } from './polls/detail/detail.component';

const appRoutes: Routes = [
	{path: '', component: OverviewComponent},
	{path: 'poll/:id', component: DetailComponent},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//	AuthModule,
	PollsModule ,
	RouterModule.forRoot(appRoutes, { enableTracing: true }),
	MatCardModule, MatGridListModule, MatButtonModule, MatToolbarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
