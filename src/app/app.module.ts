import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {HeaderCComponent} from './components/header-c/header-c.component';
import {FooterCComponent} from './components/footer-c/footer-c.component';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    declarations: [
        AppComponent,
        HeaderCComponent,
        FooterCComponent,
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
