import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {IonicModule} from "@ionic/angular";
import {GoogleMapComponent} from "./components/google-map/google-map.component";

@NgModule({
  declarations: [AppComponent, GoogleMapComponent],
  imports: [BrowserModule, NoopAnimationsModule, IonicModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
