import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectComponent } from './conect.component';

describe('ConectComponent', () => {
  let component: ConectComponent;
  let fixture: ComponentFixture<ConectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
