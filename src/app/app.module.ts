import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard/dashboard-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,
  HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DashboardService]
})
export class AppModule { }
