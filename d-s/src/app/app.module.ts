import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DanielComponentComponent } from './daniel-component/daniel-component.component';
import { SebastianComponentComponent } from './sebastian-component/sebastian-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DanielComponentComponent,
    SebastianComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
