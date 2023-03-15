import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateInteractionComponent } from './associate-interaction.component';

describe('AssociateInteractionComponent', () => {
  let component: AssociateInteractionComponent;
  let fixture: ComponentFixture<AssociateInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociateInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
