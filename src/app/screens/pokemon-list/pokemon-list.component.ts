import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  private page = new BehaviorSubject(1);
  page$ = this.page.asObservable();

  perPage = 48;

  pokemons$ = this.page$.pipe(
    switchMap(page => this.pokeService.getPokemons(page, this.perPage).result$),
  );

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pokeService: PokeService,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const page = params.get('page');
      if (page != null) {
        this.page.next(Number(page));
      }
    });
  }

  handlePageChange(page: number) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: {
        page,
      },
    });
  }
}
