import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    DashboardRoutingModule,
  ],
})
export class DashboardPageModule {}
