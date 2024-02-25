import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdataComponent } from './sdata.component';

describe('SdataComponent', () => {
  let component: SdataComponent;
  let fixture: ComponentFixture<SdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
