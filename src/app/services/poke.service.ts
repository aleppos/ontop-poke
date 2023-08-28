import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UseQuery } from '@ngneat/query';
import { QueryKeys } from 'src/constants/QueryKeys';
import { PokemonApi, PokemonDetailsApi } from './poke.interface';

const BASE_URL = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  private useQuery = inject(UseQuery);
  private http = inject(HttpClient);

  getPokemons(page: number, limit: number) {
    return this.useQuery({
      queryKey: [QueryKeys.GET_POKEMONS, page, limit],
      queryFn: () =>
        this.http
          .get<PokemonApi>(`${BASE_URL}/pokemon`, {
            params: {
              limit,
              offset: (page - 1) * limit,
            },
          })
          .pipe(
            map(data => ({
              ...data,
              results: data.results.map(pokemon => {
                const id = pokemon.url.match(/pokemon\/(\d+)\//)?.[1];

                return {
                  ...pokemon,
                  id,
                };
              }),
            })),
          ),
    });
  }

  getPokemonDetails(name: string | null) {
    return this.useQuery({
      enabled: name !== null,
      queryKey: [QueryKeys.GET_POKEMON_DETAILS, name],
      queryFn: () =>
        this.http
          .get<PokemonDetailsApi>(`${BASE_URL}/pokemon/${name}`)
          .pipe(map(data => data)),
    });
  }
}
