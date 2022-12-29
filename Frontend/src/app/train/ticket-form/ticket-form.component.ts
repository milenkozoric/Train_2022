import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css'],
})
export class TicketFormComponent implements OnInit {
  trainId = -1;

  train: Train = new Train();

  ticket: Ticket = new Ticket();

  constructor(
    private service: TrainService,
     private route: ActivatedRoute,
     private router:Router) {}

  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.trainId = params['id'];
        this.getTrain();
      },
    });
  }
  getTrain(): void {
    this.service.getTrain(this.trainId).subscribe({
      next: (train: Train) => {
        this.train = train;
        this.ticket._id = this.train._id;
        this.ticket.number = this.train.number;
        this.ticket.from = this.train.from;
        this.ticket.departure = this.train.departure;
        this.ticket.to = this.train.to;
        this.ticket.arrival = this.train.arrival;
        this.ticket.price = this.train.price;
        return;
      },
    });
  }

  onChangeName(event: Event) {
    this.ticket.name= (event.target as HTMLInputElement).value;
  }

  onChangeDate(event: Event) {
    this.ticket.birthDate= new Date((event.target as HTMLInputElement).value);
  }

  onSendTicket(){
    this.service.postTicket(this.ticket).subscribe({
      next:(ticket:Ticket)=>{
        
        
      }
    })

    this.router.navigate(['/ticketList'])
  }

}
