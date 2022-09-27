import { AppRoutingModule } from './app-routing.module';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxMaskModule,IConfig  } from 'ngx-mask';



import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NovoFormComponent } from './pages/novo-form/novo-form.component';
import { NewCarroComponent } from './pages/new-carro/new-carro.component';
import { SobreComponent } from './pages/sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NovoFormComponent,
    NewCarroComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
     NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    })

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
