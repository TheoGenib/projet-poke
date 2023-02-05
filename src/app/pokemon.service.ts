import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from './models/pokemon.model';
import { UserModel } from './models/user.model';
import { UserPlusModel } from './models/user.model';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(public pokemons: PokemonComponent) {}

  @Input() boosters = [];
  ngOnInit() {}
  i: number = 0;
  card: any;
  public deck = [];

  getPokemonBooster(limit: number) {
    this.boosters = [];
    this.i = 0;
    while (this.i < limit) {
      this.boosters.push(this.pokemons.getPokemon());
      this.i++;
    }
    console.log(this.boosters);
    return this.boosters;
  }

  sellPokemon(index: number) {
    this.boosters.splice(index, 1).slice(0);
  }

  addDeck(index: number) {
    this.sellPokemon(index);
    console.log(this.boosters[index]);
    this.card = this.boosters[index];
    this.deck.push(this.card);
  }

  displayDeck() {
    return this.deck;
  }
}
