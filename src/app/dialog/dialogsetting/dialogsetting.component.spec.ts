import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsettingComponent } from './dialogsetting.component';

describe('DialogsettingComponent', () => {
  let component: DialogsettingComponent;
  let fixture: ComponentFixture<DialogsettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
