import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import { AppRoutingModule } from './app-routing-module.ts';


@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    BlueComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
