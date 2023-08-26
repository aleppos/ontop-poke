import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideQueryClientOptions } from '@ngneat/query';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
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
