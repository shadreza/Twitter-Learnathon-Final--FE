import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { MatSliderModule } from '@angular/material/slider';
import { DashboardLComponent } from './layouts/dashboard-l/dashboard-l.component';
import { AuthLComponent } from './layouts/auth-l/auth-l.component';
import { ErrorPageLComponent } from './layouts/error-page-l/error-page-l.component';
import { SidebarCComponent } from './components/sidebar-c/sidebar-c.component';
import { NavOptionCComponent } from './components/nav-option-c/nav-option-c.component';
import { TopnavCComponent } from './components/topnav-c/topnav-c.component';
import { SearchbarMModule } from './modules/searchbar-m/searchbar-m.module';
import { TopnavProfileCComponent } from './components/topnav-profile-c/topnav-profile-c.component';
import { UserCredentialMModule } from './modules/user-credential-m/user-credential-m.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardLComponent,
        AuthLComponent,
        ErrorPageLComponent,
        SidebarCComponent,
        NavOptionCComponent,
        TopnavCComponent,
        TopnavProfileCComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MatSliderModule,
        SearchbarMModule,
        UserCredentialMModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
