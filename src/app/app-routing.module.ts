import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'}, // Route Guard
    // {path: '**', component: NotFoundComponent}, //Wild Card Route for 404 request, must be in bottom
    // loadChildren:() => import('./login/login.module').then(_ => _.LoginModule)  // for lazy-loading of that module
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
