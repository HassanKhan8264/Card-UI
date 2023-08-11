import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialchampCardComponent } from './socialchamp-card.component';

describe('SocialchampCardComponent', () => {
  let component: SocialchampCardComponent;
  let fixture: ComponentFixture<SocialchampCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialchampCardComponent]
    });
    fixture = TestBed.createComponent(SocialchampCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
