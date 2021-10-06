import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToGuideComponent } from './how-to-guide.component';

describe('HowToGuideComponent', () => {
  let component: HowToGuideComponent;
  let fixture: ComponentFixture<HowToGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
