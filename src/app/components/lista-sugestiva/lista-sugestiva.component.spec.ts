import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSugestivaComponent } from './lista-sugestiva.component';

describe('ListaSugestivaComponent', () => {
  let component: ListaSugestivaComponent;
  let fixture: ComponentFixture<ListaSugestivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSugestivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaSugestivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
