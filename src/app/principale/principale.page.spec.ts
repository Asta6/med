import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PrincipalePage } from './principale.page';

describe('PrincipalePage', () => {
  let component: PrincipalePage;
  let fixture: ComponentFixture<PrincipalePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincipalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
