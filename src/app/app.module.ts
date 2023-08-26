import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideQueryClientOptions } from '@ngneat/query';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonListComponent } from './screens/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './screens/pokemon-details/pokemon-details.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideQueryClientOptions({
      defaultOptions: {
        queries: {
          staleTime: 3000,
          refetchOnWindowFocus: false,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
