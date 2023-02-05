import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BoutiqueComponent } from '../boutique/boutique.component';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  deck = [];

  constructor(public pokemons: PokemonService) {}

  ngOnInit() {
    this.deck = this.pokemons.displayDeck();
    console.log(this.deck);
  }
}
