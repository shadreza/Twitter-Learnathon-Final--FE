import { FeedsMModule } from './modules/feeds-m/feeds-m.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import { MatSliderModule } from '@angular/material/slider';
import { ErrorPageLComponent } from './layouts/error-page-l/error-page-l.component';
import { DashboardLComponent } from './layouts/dashboard-l/dashboard-l.component';
import { NavbarCComponent } from './layouts/dashboard-l/components/navbar-c/navbar-c.component';
import { SearchbarCComponent } from './layouts/dashboard-l/components/searchbar-c/searchbar-c.component';
import { SidebarCComponent } from './layouts/dashboard-l/components/sidebar-c/sidebar-c.component';
import { NavOptionCComponent } from './layouts/dashboard-l/components/nav-option-c/nav-option-c.component';
import { AuthMModule } from './modules/auth-m/auth-m.module';
import { FriendsMModule } from './modules/friends-m/friends-m.module';
import { SettingsMModule } from './modules/settings-m/settings-m.module';
import { UserAuthMModule } from './modules/user-auth-m/user-auth-m.module';
import { NotificationsMModule } from './modules/notifications-m/notifications-m.module';

@NgModule({
    declarations: [
        AppComponent,
        ErrorPageLComponent,
        DashboardLComponent,
        NavbarCComponent,
        SearchbarCComponent,
        SidebarCComponent,
        NavOptionCComponent,
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
        FeedsMModule,
        AuthMModule,
        FriendsMModule,
        NotificationsMModule,
        SettingsMModule,
        UserAuthMModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
