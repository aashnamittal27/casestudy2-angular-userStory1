import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseIndividualOptionsComponent } from './response-individual-options.component';

describe('ResponseIndividualOptionsComponent', () => {
  let component: ResponseIndividualOptionsComponent;
  let fixture: ComponentFixture<ResponseIndividualOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseIndividualOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseIndividualOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
