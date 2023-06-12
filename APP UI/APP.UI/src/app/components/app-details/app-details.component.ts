import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppdetailsDataService } from 'src/app/services/appdetails-data.service';

@Component({
  selector: 'app-app-details',
  templateUrl: './app-details.component.html',
  styleUrls: ['./app-details.component.css']
})
export class AppDetailsComponent implements OnInit{

  appDetailsData$: any;
  app: any;

  constructor(private route: ActivatedRoute, private AppdetailsDataService: AppdetailsDataService){}

  ngOnInit(): void{
     this.app = this.route.snapshot.paramMap.get('app');
     this.appDetailsData$ = this.AppdetailsDataService.getappDetailsData(this.app);
  }

}
