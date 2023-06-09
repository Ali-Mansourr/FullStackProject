import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreRankingComponent } from './genre-ranking.component';

describe('GenreRankingComponent', () => {
  let component: GenreRankingComponent;
  let fixture: ComponentFixture<GenreRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreRankingComponent]
    });
    fixture = TestBed.createComponent(GenreRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
