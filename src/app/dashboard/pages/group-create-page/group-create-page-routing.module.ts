import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupCreatePageComponent } from './group-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: GroupCreatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupCreatePageRoutingModule {}
