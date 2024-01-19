import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FTWebsterComponent } from './ftwebster.component';

describe('FTWebsterComponent', () => {
  let component: FTWebsterComponent;
  let fixture: ComponentFixture<FTWebsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FTWebsterComponent]
    });
    fixture = TestBed.createComponent(FTWebsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
