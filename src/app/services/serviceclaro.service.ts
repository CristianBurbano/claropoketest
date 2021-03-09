import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { constants } from 'src/app/constans';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceclaroService {

  const = constants;

  constructor(private http: HttpClient) { 

  }

  getPokemon(pokemon:string):Observable<any>{
    // console.log('getPokemon');    
    return this.http.get(`${this.const.urlEndpoint}/${pokemon}`);
  }
}
