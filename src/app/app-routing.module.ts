import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthLComponent } from './layouts/auth-l/auth-l.component';
import { DashboardLComponent } from './layouts/dashboard-l/dashboard-l.component';
import { ErrorPageLComponent } from './layouts/error-page-l/error-page-l.component';

const routes: Routes = [
  { path: '', component: DashboardLComponent },
  { path: 'auth', component: AuthLComponent },
  { path: '**', component: ErrorPageLComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
