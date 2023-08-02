import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreatePageRoutingModule } from './user-create-page-routing.module';
import { UserCreatePageComponent } from './user-create-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserCreatePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserCreatePageRoutingModule,
  ],
})
export class UserCreatePageModule {}
