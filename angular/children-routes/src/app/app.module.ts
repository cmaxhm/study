import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildRouteComponent } from './components/child-route/child-route.component';
import { ChildRouteChildComponent } from './components/child-route/child-route-child/child-route-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildRouteComponent,
    ChildRouteChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
