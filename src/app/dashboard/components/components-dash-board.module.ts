import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { BreadcrumComponent } from './breadcrum/breadcrum.component';

@NgModule({
  declarations: [BreadcrumComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [BreadcrumComponent],
})
export class ComponentsDashBoardModule {}
