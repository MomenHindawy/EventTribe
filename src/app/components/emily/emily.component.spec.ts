import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmilyComponent } from './emily.component';

describe('EmilyComponent', () => {
  let component: EmilyComponent;
  let fixture: ComponentFixture<EmilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmilyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
