import { Component, effect, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonApiService } from '../../../core/services/pokemon-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex-shell',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers: [PokemonApiService],
  templateUrl: './pokedex-shell.component.html',
})
export class PokedexShellComponent {
  private api = inject(PokemonApiService);
  currentId = signal(1);
  pokemon = signal<any>(null);

private _inputValue = signal('');

get inputValue() {
  return this._inputValue();
}

set inputValue(value: string) {
  this._inputValue.set(value);
}


  constructor() {
    effect(() => {
      this.api.getPokemonDetails(this.currentId()).subscribe((res) => {
        this.pokemon.set(res);
      });
    });
  }

  playCry(id: number) {
  const audio = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`);
  audio.volume = 0.4; // opcional
  audio.play().catch(err => console.warn('Erro ao tocar áudio', err));
  }


  next() {
    this.currentId.update(v => v + 1);
     this.playCry(this.currentId());
  }

  prev() {
    if (this.currentId() > 1) {
      this.currentId.update(v => v - 1);
       this.playCry(this.currentId());
    }
  }

  search() {
    const value = this.inputValue.toLowerCase();
    this.api.getPokemonDetails(value).subscribe({
      next: (res) => {
        this.pokemon.set(res);
        this.currentId.set(res.id);
        this.playCry(res.id);
      },
      error: () => alert('Pokémon não encontrado 😢')
    });
  }
}
