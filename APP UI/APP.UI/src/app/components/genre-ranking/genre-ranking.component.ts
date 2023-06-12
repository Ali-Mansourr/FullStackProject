import { GenreDataService } from '../../services/genre-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-ranking',
  templateUrl: './genre-ranking.component.html',
  styleUrls: ['./genre-ranking.component.css']
})
export class GenreRankingComponent implements OnInit {
  genreData$: any;
  constructor (private GenreDataService: GenreDataService) {}

  ngOnInit(): void{
    this.genreData$ = this.GenreDataService.getGenreData();
  }
}
