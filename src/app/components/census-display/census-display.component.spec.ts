import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusDisplayComponent } from './census-display.component';

describe('CensusDisplayComponent', () => {
  let component: CensusDisplayComponent;
  let fixture: ComponentFixture<CensusDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CensusDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensusDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
