import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SubscribeDirective } from '@ngneat/subscribe';

import { PokemonListComponent } from './pokemon-list.component';
import { CardComponent } from 'src/app/components/card/card.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardComponent,
        ContainerComponent,
        PokemonListComponent,
        SpacerComponent,
        SpinnerComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SubscribeDirective,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
