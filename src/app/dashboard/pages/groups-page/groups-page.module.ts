import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsPageRoutingModule } from './groups-page-routing.module';
import { GroupsPageComponent } from './groups-page.component';

import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [GroupsPageComponent],
  imports: [CommonModule, MaterialModule, GroupsPageRoutingModule],
})
export class GroupsPageModule {}
