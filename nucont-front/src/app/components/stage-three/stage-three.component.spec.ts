import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageThreeComponent } from './stage-three.component';

describe('StageThreeComponent', () => {
  let component: StageThreeComponent;
  let fixture: ComponentFixture<StageThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
