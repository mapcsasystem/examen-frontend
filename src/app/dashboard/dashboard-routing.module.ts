import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../dashboard/pages/groups-page/groups-page.module').then(
            (m) => m.GroupsPageModule
          ),
      },
      {
        path: 'grupos',
        loadChildren: () =>
          import('../dashboard/pages/groups-page/groups-page.module').then(
            (m) => m.GroupsPageModule
          ),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('../dashboard/pages/users-page/users-page.module').then(
            (m) => m.UsersPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
