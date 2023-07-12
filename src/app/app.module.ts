import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppPageComponent } from './app-page/app-page.component';
import { PageChildComponent } from './app-page/page-child/page-child.component';
import { BothPageComponent } from './both-page/both-page.component';
import { WidgetsModule } from './widgets/widgets.module';


@NgModule({
  declarations: [
    AppComponent,
    AppPageComponent,
    PageChildComponent,
    BothPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
