import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEditComponent } from './stage-edit.component';

describe('StageEditComponent', () => {
  let component: StageEditComponent;
  let fixture: ComponentFixture<StageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
