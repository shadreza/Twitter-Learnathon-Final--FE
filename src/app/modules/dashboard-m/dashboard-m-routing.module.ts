import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminCComponent } from '../admin-m/admin-c/admin-c.component';
import { FeedsCComponent } from '../feeds-m/feeds-c/feeds-c.component';
import { DashboardLayoutCComponent } from './dashboard-layout-c/dashboard-layout-c.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutCComponent,
    children: [
      { path: 'home', component: FeedsCComponent, pathMatch: 'full' },
      { path: 'settings', component: AdminCComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
