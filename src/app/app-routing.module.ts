import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FeedsCComponent } from './modules/feeds-m/feeds-c/feeds-c.component';
import { LogInCComponent } from './modules/user-credential-m/log-in-c/log-in-c.component';
import { SignUpCComponent } from './modules/user-credential-m/sign-up-c/sign-up-c.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: FeedsCComponent}, // Route Guard
    {path: 'home', pathMatch: 'full', component: FeedsCComponent},
    {path: 'login', pathMatch: 'full', component: LogInCComponent},
    {path: 'signup', pathMatch: 'full', component: SignUpCComponent},
    // {path: '**', component: NotFoundComponent}, //Wild Card Route for 404 request, must be in bottom
    // loadChildren:() => import('./login/login.module').then(_ => _.LoginModule)  // for lazy-loading of that module
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
