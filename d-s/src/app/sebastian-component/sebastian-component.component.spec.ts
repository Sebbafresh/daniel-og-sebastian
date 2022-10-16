import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SebastianComponentComponent } from './sebastian-component.component';

describe('SebastianComponentComponent', () => {
  let component: SebastianComponentComponent;
  let fixture: ComponentFixture<SebastianComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SebastianComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SebastianComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
