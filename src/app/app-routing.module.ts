import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthLayoutCComponent } from './modules/auth-m/auth-layout-c/auth-layout-c.component';
import { DashboardLayoutCComponent } from './modules/dashboard-m/dashboard-layout-c/dashboard-layout-c.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardLayoutCComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthLayoutCComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
