import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpCComponent} from './sign-up-c/sign-up-c.component';
import {LogInCComponent} from './log-in-c/log-in-c.component';


@NgModule({
    declarations: [
        SignUpCComponent,
        LogInCComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UserCredentialMModule {
}
