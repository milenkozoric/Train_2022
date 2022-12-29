import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutComponent } from './core/about/about.component';
import { TrainListComponent } from './train/train-list/train-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { TrainDetailsComponent } from './train/train-details/train-details.component';
import { TicketFormComponent } from './train/ticket-form/ticket-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketListComponent } from './train/ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TrainListComponent,
    TrainDetailsComponent,
    TicketFormComponent,
    TicketListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
