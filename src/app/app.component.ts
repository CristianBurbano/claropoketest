import { Component } from '@angular/core';
import { ServiceclaroService } from 'src/app/services/serviceclaro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarotest';
  pokemonData:any;
  pokemon:string;
  constructor(private pokemonService:ServiceclaroService){

  }

  getClickPokemon(){
    this.pokemonService.getPokemon(this.pokemon).subscribe((data) => {
      this.pokemonData = data;
            
    });
  }

  
}
