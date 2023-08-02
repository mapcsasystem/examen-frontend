import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { GroupsPageRoutingModule } from './groups-page-routing.module';
import { GroupsPageComponent } from './groups-page.component';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from '../../interceptors/token-interceptor.service';

@NgModule({
  declarations: [GroupsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    GroupsPageRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class GroupsPageModule {}
