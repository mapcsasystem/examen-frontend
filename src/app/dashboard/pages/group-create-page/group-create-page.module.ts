import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupCreatePageRoutingModule } from './group-create-page-routing.module';
import { GroupCreatePageComponent } from './group-create-page.component';

@NgModule({
  declarations: [GroupCreatePageComponent],
  imports: [CommonModule, GroupCreatePageRoutingModule],
})
export class GroupCreatePageModule {}
