import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivoDialogComponent } from './festivo-dialog.component';

describe('FestivoDialogComponent', () => {
  let component: FestivoDialogComponent;
  let fixture: ComponentFixture<FestivoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FestivoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
