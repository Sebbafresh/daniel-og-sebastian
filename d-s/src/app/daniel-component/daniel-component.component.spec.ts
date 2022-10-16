import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanielComponentComponent } from './daniel-component.component';

describe('DanielComponentComponent', () => {
  let component: DanielComponentComponent;
  let fixture: ComponentFixture<DanielComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanielComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanielComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
