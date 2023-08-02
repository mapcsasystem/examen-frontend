import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsDashBoardModule } from './components/components-dash-board.module';
import { TokenInterceptorService } from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    DashboardRoutingModule,
    ComponentsDashBoardModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
})
export class DashboardPageModule {}
