import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GroupsPageRoutingModule } from './groups-page-routing.module';
import { GroupsPageComponent } from './groups-page.component';

import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [GroupsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    GroupsPageRoutingModule,
  ],
})
export class GroupsPageModule {}
