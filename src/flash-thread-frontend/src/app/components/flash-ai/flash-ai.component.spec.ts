import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashAiComponent } from './flash-ai.component';

describe('FlashAiComponent', () => {
  let component: FlashAiComponent;
  let fixture: ComponentFixture<FlashAiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashAiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
