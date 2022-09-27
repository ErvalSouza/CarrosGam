import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Carro } from '../Carro';


@Injectable({
  providedIn: 'root'
})
export class CarroService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  createCarro(carro:Carro): Observable<Carro>{
return this.http.post<Carro>(this.baseUrl, carro)
  }

  getCars(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.baseUrl)

  }

}
