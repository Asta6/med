import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Index0Page } from './index0.page';

describe('Index0Page', () => {
  let component: Index0Page;
  let fixture: ComponentFixture<Index0Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Index0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
