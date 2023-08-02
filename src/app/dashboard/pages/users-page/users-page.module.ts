import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { MaterialModule } from 'src/app/shared/material/material.module';

import { UsersPageRoutingModule } from './users-page-routing.module';
import { UsersPageComponent } from './users-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from '../../interceptors/token-interceptor.service';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersPageRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class UsersPageModule {}
