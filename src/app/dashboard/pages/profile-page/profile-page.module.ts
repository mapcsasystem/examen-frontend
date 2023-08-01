import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';

import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, MaterialModule, ProfilePageRoutingModule],
})
export class ProfilePageModule {}
