import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokemonApiService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2';

  getPokemons(limit = 151): Observable<any> {
    return this.http.get(`${this.baseUrl}/pokemon?limit=${limit}`);
  }

getPokemonDetails(nameOrId: string | number): Observable<any> {
  return this.http.get(`${this.baseUrl}/pokemon/${nameOrId}`);
}

}
