import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackTagComponent } from './track-tag.component';

describe('TrackTagComponent', () => {
  let component: TrackTagComponent;
  let fixture: ComponentFixture<TrackTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
