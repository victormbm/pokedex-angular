import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexShellComponent } from './pokedex-shell.component';

describe('PokedexShellComponent', () => {
  let component: PokedexShellComponent;
  let fixture: ComponentFixture<PokedexShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokedexShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
