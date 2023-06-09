import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRankingComponent } from './app-ranking.component';

describe('AppRankingComponent', () => {
  let component: AppRankingComponent;
  let fixture: ComponentFixture<AppRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRankingComponent]
    });
    fixture = TestBed.createComponent(AppRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
