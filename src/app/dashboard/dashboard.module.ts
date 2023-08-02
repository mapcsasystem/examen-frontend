import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsDashBoardModule } from './components/components-dash-board.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    DashboardRoutingModule,
    ComponentsDashBoardModule,
  ],
})
export class DashboardPageModule {}
