import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderCComponent } from './components/header-c/header-c.component';
import { FooterCComponent } from './components/footer-c/footer-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCComponent,
    FooterCComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
