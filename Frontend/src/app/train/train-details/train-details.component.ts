import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css'],
})
export class TrainDetailsComponent implements OnInit {
  trainId = -1;
  train: Train = new Train();

  constructor(
    private service: TrainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        this.trainId = params['id'];
        console.log(this.trainId);

        this.getTrain();
      },
    });
  }
  getTrain(): void {
    this.service.getTrain(this.trainId).subscribe({
      next: (train: Train) => {
        this.train = train;
        console.log(train);
      },
    });
  }

  onToTicketForm(trainId: number): void {
    this.router.navigate(['/ticket/' + this.trainId]);
  }
}
