import { CarroService } from './../../services/carro.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/Carro';

@Component({
  selector: 'app-new-carro',
  templateUrl: './new-carro.component.html',
  styleUrls: ['./new-carro.component.css']
})
export class NewCarroComponent implements OnInit {

  constructor(private carroService:CarroService) { }

  ngOnInit(): void {
  }

async create(carro: Carro){

await this.carroService.createCarro(carro).subscribe()

}

}
