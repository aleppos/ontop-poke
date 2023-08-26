import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PokemonListComponent } from './screens/pokemon-list/pokemon-list.component';
import { AppRoutes } from 'src/constants/AppRoutes';
import { PokemonDetailsComponent } from './screens/pokemon-details/pokemon-details.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: AppRoutes.POKEMON_LIST,
        component: PokemonListComponent,
      },
      {
        path: AppRoutes.POKEMON_DETAILS,
        component: PokemonDetailsComponent,
      },
      {
        path: '',
        redirectTo: AppRoutes.POKEMON_LIST,
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
