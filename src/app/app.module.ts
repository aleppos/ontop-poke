import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideQueryClientOptions } from '@ngneat/query';
import { SubscribeDirective } from '@ngneat/subscribe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonListComponent } from './screens/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './screens/pokemon-details/pokemon-details.component';
import { NotFoundComponent } from './screens/not-found/not-found.component';
import { LogoComponent } from './components/logo/logo.component';
import { ContainerComponent } from './components/container/container.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { IconComponent } from './components/icon/icon.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { ClickDirective } from './click.directive';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DividerComponent } from './components/divider/divider.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ClickDirective,
    ContainerComponent,
    DividerComponent,
    FooterComponent,
    HeaderComponent,
    IconComponent,
    LogoComponent,
    MainLayoutComponent,
    NotFoundComponent,
    PaginationComponent,
    PokemonDetailsComponent,
    PokemonListComponent,
    SpacerComponent,
    SpinnerComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SubscribeDirective,
  ],
  providers: [
    provideQueryClientOptions({
      defaultOptions: {
        queries: {
          staleTime: 3000,
          refetchOnWindowFocus: false,
        },
      },
    }),
    { provide: ErrorHandler, useClass: ErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
