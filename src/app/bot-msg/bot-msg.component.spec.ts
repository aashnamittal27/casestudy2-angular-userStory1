import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotMsgComponent } from './bot-msg.component';

describe('BotMsgComponent', () => {
  let component: BotMsgComponent;
  let fixture: ComponentFixture<BotMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
