import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from 'src/app/shared/material/material.module';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersPageRoutingModule,
  ],
})
export class UsersPageModule {}
