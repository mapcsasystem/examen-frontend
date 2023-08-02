import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCreatePageRoutingModule } from './user-create-page-routing.module';
import { UserCreatePageComponent } from './user-create-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../../interceptors/token-interceptor.service';

@NgModule({
  declarations: [UserCreatePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserCreatePageRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class UserCreatePageModule {}
