import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicModalInteractionComponent } from './basic-modal-interaction.component';

describe('BasicModalInteractionComponent', () => {
  let component: BasicModalInteractionComponent;
  let fixture: ComponentFixture<BasicModalInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicModalInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicModalInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
