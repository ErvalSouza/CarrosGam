import { Component, OnInit } from '@angular/core';

import { Carro } from 'src/app/Carro';

import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carro!: Carro;

  carros: Carro[] = [];

  constructor(private carroService:CarroService) { }

  ngOnInit(): void {
this.getCars()
  }

  getCars() {
    this.carroService.getCars().subscribe((carros: Carro[]) => {
      this.carros = carros;
    });
  }

}
