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

@NgModule({
    declarations: [
        AppComponent,
        ErrorPageLComponent,
        DashboardLComponent,
        NavbarCComponent,
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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
