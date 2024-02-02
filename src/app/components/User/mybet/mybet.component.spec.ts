import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybetComponent } from './mybet.component';

describe('MybetComponent', () => {
  let component: MybetComponent;
  let fixture: ComponentFixture<MybetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
