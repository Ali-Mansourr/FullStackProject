import { ApprankingDataService } from './../../services/appranking-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-ranking',
  templateUrl: './app-ranking.component.html',
  styleUrls: ['./app-ranking.component.css']
})
export class AppRankingComponent implements OnInit {
  
  appRankingData$: any;
  genre: any;

  constructor(private route: ActivatedRoute, private ApprankingDataService: ApprankingDataService){}

  ngOnInit(): void{
     this.genre = this.route.snapshot.paramMap.get('genre');
     this.appRankingData$ = this.ApprankingDataService.getappRankingData(this.genre);

  }
  
}

