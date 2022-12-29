import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
tickets: Ticket[]=[];
  constructor(private service: TrainService) { }

  params={
    sort: "departure",
    sortDirection: "asc",
  }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets():void{
    this.service.getTickets(this.params).subscribe({
      next:(tickets:Ticket[])=>{
        this.tickets= tickets;
        console.log(tickets);
        
      }
    })
  }

onDeleteTicket(ticketId: number): void{
  this.service.deleteTicket(ticketId).subscribe({
    next:(ticket: Ticket)=>{
      console.log(ticket);
      this.getTickets()
    }
  })
  
}
}
