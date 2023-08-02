import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupCreatePageRoutingModule } from './group-create-page-routing.module';
import { GroupCreatePageComponent } from './group-create-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from '../../interceptors/token-interceptor.service';

@NgModule({
  declarations: [GroupCreatePageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    GroupCreatePageRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class GroupCreatePageModule {}
