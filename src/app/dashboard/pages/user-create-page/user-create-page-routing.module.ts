import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreatePageComponent } from './user-create-page.component';

const routes: Routes = [
  {
    path: '',
    component: UserCreatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserCreatePageRoutingModule {}
