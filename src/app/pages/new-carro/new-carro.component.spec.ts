import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarroComponent } from './new-carro.component';

describe('NewCarroComponent', () => {
  let component: NewCarroComponent;
  let fixture: ComponentFixture<NewCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
