import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SubscribeDirective } from '@ngneat/subscribe';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { ContainerComponent } from 'src/app/components/container/container.component';
import { DividerComponent } from 'src/app/components/divider/divider.component';
import { SpacerComponent } from 'src/app/components/spacer/spacer.component';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        DividerComponent,
        PokemonDetailsComponent,
        SpacerComponent,
        SpinnerComponent,
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SubscribeDirective,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
