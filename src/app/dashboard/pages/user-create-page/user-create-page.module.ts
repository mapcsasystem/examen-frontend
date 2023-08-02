import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreatePageRoutingModule } from './user-create-page-routing.module';
import { UserCreatePageComponent } from './user-create-page.component';

@NgModule({
  declarations: [UserCreatePageComponent],
  imports: [CommonModule, UserCreatePageRoutingModule],
})
export class UserCreatePageModule {}
