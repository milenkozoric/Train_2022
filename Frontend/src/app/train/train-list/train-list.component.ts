import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchTrains } from 'src/app/model/search-trains';
import { Station } from 'src/app/model/station';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {
trains : Train[]=[];

stations : Station[]=[];


constructor(private service: TrainService,private router: Router) { }

params={
  filter: {
    from: "",
    to: "",
  }
}
  ngOnInit(): void {
    this.getAllTrains();
    this.getStations();
  }
getAllTrains(): void{
  this.service.getAllTrains(this.params).subscribe({
    next:(trains: SearchTrains)=>{
      this.trains= trains.results;
      console.log(this.trains);
      
    }
  })
}

getStations():void{
  this.service.getStations().subscribe({
    next: (stations: Station[])=>{
      this.stations=stations;
      
      
    }
  })
}

onStationFrom(event: Event){
  this.params.filter.from = (event.target as HTMLInputElement).value;
  this.getAllTrains();
}
onStationTo(event: Event){
  
  
  this.params.filter.to = (event.target as HTMLInputElement).value;
  this.getAllTrains();
}

onToTicketForm(trainId: number):void{
  this.router.navigate(['/ticket/'+ trainId])
}

}
