import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { PokemonModel } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements  AfterViewInit {
  @Input() data: PokemonModel;
  @Input() pokemon: PokemonModel = {} as PokemonModel;

  min: number = 1;
  max: number = 200;
  random = Math.floor(Math.random() * (this.max - this.min)) + this.min;

  constructor(private pokemonService: ApiService) {}

  

  getPokemon() {
    this.pokemonService.get(this.random).subscribe((data) => {
      this.pokemon = {
        name: data['name'],
        poke_id: data['poke_id'],
        stats: data['stats'],
        image: data['image'],
        type: data['type'],
      };
    });
    return this.data;
  }

  ngAfterViewInit(): void {
    this.getPokemon();
    console.log( this.pokemon);
  }
  getPokemonImageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.poke_id}.png `;
  }
}
