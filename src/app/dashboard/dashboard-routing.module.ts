import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'grupos',
        loadChildren: () =>
          import('../dashboard/pages/groups-page/groups-page.module').then(
            (m) => m.GroupsPageModule
          ),
      },
      {
        path: 'crear-grupo',
        loadChildren: () =>
          import(
            '../dashboard/pages/group-create-page/group-create-page.module'
          ).then((m) => m.GroupCreatePageModule),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('../dashboard/pages/users-page/users-page.module').then(
            (m) => m.UsersPageModule
          ),
      },
      {
        path: 'crear-usuario',
        loadChildren: () =>
          import(
            '../dashboard/pages/user-create-page/user-create-page.module'
          ).then((m) => m.UserCreatePageModule),
      },
      {
        path: '',
        redirectTo: 'grupos',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
