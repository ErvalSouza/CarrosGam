import { CarroService } from './../../services/carro.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Carro } from 'src/app/Carro';
import { Router } from '@angular/router';


@Component({
  selector: 'app-novo-form',
  templateUrl: './novo-form.component.html',
  styleUrls: ['./novo-form.component.css']
})
export class NovoFormComponent implements OnInit {

  @Output() onSubmit= new EventEmitter<Carro>()

carroForm!: FormGroup

  constructor(private carroService:CarroService,private router:Router) { }

  ngOnInit(): void {
    this.carroForm = new FormGroup({
      id: new FormControl(''),
      marca_carro: new FormControl(''),
      dc_modelo: new FormControl(''),
      dc_ano_fabricacao: new FormControl('',[Validators.required, Validators.maxLength(4), Validators.minLength(4)] ),
      dt_compra: new FormControl(''),
      nm_valor: new FormControl('', [Validators.required]),
    })
  }

get nm_valor(){
 return this.carroForm.get('nm_valor')!
}

get dt_compra(){
  return this.carroForm.get('dt_compra')!
}

get dc_ano_fabricacao(){
  return this.carroForm.get('dc_ano_fabricacao')!
}

get dc_modelo(){
  return this.carroForm.get('dc_modelo')!
}

get marca_carro(){
  return this.carroForm.get('marca_carro')!
}




submit(){
  if(this.carroForm.invalid){
    return;
  }

this.onSubmit.emit(this.carroForm.value)


  console.log(this.carroForm.value)

  this.router.navigateByUrl("")


}

}
