import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroAlumnoComponent } from './intro-alumno.component';

describe('IntroAlumnoComponent', () => {
  let component: IntroAlumnoComponent;
  let fixture: ComponentFixture<IntroAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
