import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonApiService } from '../core/services/pokemon-api.service';
import { ExtractIdPipe } from '../shared/pipes/extract-id.pipe';
import { PokedexCardComponent } from '../shared/components/pokedex-card.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule,ExtractIdPipe,PokedexCardComponent],
  providers: [PokemonApiService],
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent {
  private pokeApi = inject(PokemonApiService);
  pokemons = signal<{ name: string, url: string }[]>([]);

  constructor() {
    this.pokeApi.getPokemons().subscribe((res: any) => {
      this.pokemons.set(res.results);
    });
  }
}
