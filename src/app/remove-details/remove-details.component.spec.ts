import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveDetailsComponent } from './remove-details.component';

describe('RemoveDetailsComponent', () => {
  let component: RemoveDetailsComponent;
  let fixture: ComponentFixture<RemoveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
