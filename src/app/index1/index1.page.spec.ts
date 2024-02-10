import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Index1Page } from './index1.page';

describe('Index1Page', () => {
  let component: Index1Page;
  let fixture: ComponentFixture<Index1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Index1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
