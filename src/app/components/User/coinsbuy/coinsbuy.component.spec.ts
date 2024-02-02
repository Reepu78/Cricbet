import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsbuyComponent } from './coinsbuy.component';

describe('CoinsbuyComponent', () => {
  let component: CoinsbuyComponent;
  let fixture: ComponentFixture<CoinsbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
