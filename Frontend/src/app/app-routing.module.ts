import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { TicketFormComponent } from './train/ticket-form/ticket-form.component';
import { TicketListComponent } from './train/ticket-list/ticket-list.component';
import { TrainDetailsComponent } from './train/train-details/train-details.component';
import { TrainListComponent } from './train/train-list/train-list.component';

const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"about",component: AboutComponent},
  {path:"ticketList",component: TicketListComponent},
  {path:"trains",component: TrainListComponent},
  {path:"trains/:id",component: TrainDetailsComponent},
  {path:"ticket/:id",component: TicketFormComponent},
  {path:"",redirectTo: "/trains",pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
