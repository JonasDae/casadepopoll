import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { AuthDbService} from './auth-db.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  providers: [AuthDbService],
  exports: [LoginComponent],
})
export class AuthModule { }
