import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  private pokemonName = new BehaviorSubject<string | null>(null);
  pokemonName$ = this.pokemonName.asObservable();

  pokemonDetails$ = this.pokemonName$.pipe(
    switchMap(
      pokemonName => this.pokeService.getPokemonDetails(pokemonName).result$,
    ),
  );

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokeService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const pokemonName = params.get('pokemonName');
      this.pokemonName.next(pokemonName);
    });
  }
}
