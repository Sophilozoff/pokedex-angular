import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'list-pokemon',
    templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {
    pokemons: Pokemon[] = null;
    constructor(private router: Router, private pokemonsService : PokemonsService){}
    

    ngOnInit() {
        this.pokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons);
    }
    selectPokemon(pokemon: Pokemon) {
        let link = ['/pokemons', pokemon.id];
        this.router.navigate(link);
    }
}