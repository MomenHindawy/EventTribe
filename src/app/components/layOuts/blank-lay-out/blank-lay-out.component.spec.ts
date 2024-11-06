import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankLayOutComponent } from './blank-lay-out.component';

describe('BlankLayOutComponent', () => {
  let component: BlankLayOutComponent;
  let fixture: ComponentFixture<BlankLayOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlankLayOutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlankLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
